// Basic piece values for evaluation
const PIECE_VALUES = {
	p: 1, // pawn
	n: 3, // knight
	b: 3, // bishop
	r: 5, // rook
	q: 9, // queen
	k: 0, // king (not used in basic evaluation)
};

// Position weights for pieces (simplified)
const POSITION_WEIGHTS = {
	p: [
		[0, 0, 0, 0, 0, 0, 0, 0],
		[5, 5, 5, 5, 5, 5, 5, 5],
		[1, 1, 2, 3, 3, 2, 1, 1],
		[0.5, 0.5, 1, 2.5, 2.5, 1, 0.5, 0.5],
		[0, 0, 0, 2, 2, 0, 0, 0],
		[0.5, -0.5, -1, 0, 0, -1, -0.5, 0.5],
		[0.5, 1, 1, -2, -2, 1, 1, 0.5],
		[0, 0, 0, 0, 0, 0, 0, 0],
	],
	// Add more position weights for other pieces as needed
};

// Evaluate board position
const evaluatePosition = (game) => {
	let score = 0;
	const board = game.board();

	// Material and position evaluation
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			const piece = board[i][j];
			if (piece) {
				// Material score
				const materialValue =
					PIECE_VALUES[piece.type] * (piece.color === "w" ? 1 : -1);
				score += materialValue;

				// Position score for pawns
				if (piece.type === "p") {
					const positionValue =
						POSITION_WEIGHTS.p[piece.color === "w" ? i : 7 - i][j];
					score += positionValue * (piece.color === "w" ? 1 : -1);
				}
			}
		}
	}

	// Additional evaluation factors
	if (game.in_check()) {
		score += game.turn() === "w" ? -0.5 : 0.5;
	}

	return score;
};

// Minimax algorithm with alpha-beta pruning
const minimax = (game, depth, alpha, beta, maximizingPlayer) => {
	if (depth === 0 || game.game_over()) {
		return evaluatePosition(game);
	}

	const moves = game.moves();

	if (maximizingPlayer) {
		let maxEval = -Infinity;
		for (const move of moves) {
			game.move(move);
			const evaluation = minimax(game, depth - 1, alpha, beta, false);
			game.undo();
			maxEval = Math.max(maxEval, evaluation);
			alpha = Math.max(alpha, evaluation);
			if (beta <= alpha) break;
		}
		return maxEval;
	} else {
		let minEval = Infinity;
		for (const move of moves) {
			game.move(move);
			const evaluation = minimax(game, depth - 1, alpha, beta, true);
			game.undo();
			minEval = Math.min(minEval, evaluation);
			beta = Math.min(beta, evaluation);
			if (beta <= alpha) break;
		}
		return minEval;
	}
};

// Find best move based on difficulty
export const findBestMove = (game, difficulty = "medium") => {
	const depths = {
		easy: 1,
		medium: 2,
		hard: 3,
	};

	const depth = depths[difficulty];
	const moves = game.moves();
	let bestMove = null;
	let bestValue = game.turn() === "w" ? -Infinity : Infinity;

	// For easy difficulty, occasionally make random moves
	if (difficulty === "easy" && Math.random() < 0.3) {
		return moves[Math.floor(Math.random() * moves.length)];
	}

	for (const move of moves) {
		game.move(move);
		const value = minimax(
			game,
			depth - 1,
			-Infinity,
			Infinity,
			game.turn() === "w"
		);
		game.undo();

		if (game.turn() === "w") {
			if (value > bestValue) {
				bestValue = value;
				bestMove = move;
			}
		} else {
			if (value < bestValue) {
				bestValue = value;
				bestMove = move;
			}
		}
	}

	return bestMove;
};
