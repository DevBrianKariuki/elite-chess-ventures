import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { findBestMove } from "../utils/chessAI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faRedo,
	faUndo,
	faPlay,
	faStopwatch,
	faSave,
	faGamepad,
	faCog,
} from "@fortawesome/free-solid-svg-icons";

function Play() {
	const [game, setGame] = useState(new Chess());
	const [boardOrientation, setBoardOrientation] = useState("white");
	const [moveHistory, setMoveHistory] = useState([]);
	const [capturedPieces, setCapturedPieces] = useState({ w: [], b: [] });
	const [isComputerOpponent, setIsComputerOpponent] = useState(false);
	const [timer, setTimer] = useState({ white: 600, black: 600 });
	const [isTimerRunning, setIsTimerRunning] = useState(false);
	const timerInterval = useRef(null);
	const [difficulty, setDifficulty] = useState("medium");
	const [timeControl, setTimeControl] = useState(600);
	const [savedGames, setSavedGames] = useState([]);
	const [showTimeControlModal, setShowTimeControlModal] = useState(false);
	const [showSavedGames, setShowSavedGames] = useState(false);

	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	// Sound effects
	const moveSound = new Audio("/sounds/move.mp3");
	const captureSound = new Audio("/sounds/capture.mp3");
	const checkSound = new Audio("/sounds/check.mp3");
	const gameOverSound = new Audio("/sounds/gameOver.mp3");

	// Timer logic
	useEffect(() => {
		if (isTimerRunning && !game.isGameOver()) {
			timerInterval.current = setInterval(() => {
				setTimer((prevTimer) => {
					const currentPlayer = game.turn();
					if (
						prevTimer[currentPlayer === "w" ? "white" : "black"] <=
						0
					) {
						clearInterval(timerInterval.current);
						gameOverSound.play();
						return prevTimer;
					}
					return {
						...prevTimer,
						[currentPlayer === "w" ? "white" : "black"]:
							prevTimer[
								currentPlayer === "w" ? "white" : "black"
							] - 1,
					};
				});
			}, 1000);
		}
		return () => clearInterval(timerInterval.current);
	}, [isTimerRunning, game]);

	// Format time for display
	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
	};

	// Computer move logic
	const makeComputerMove = useCallback(() => {
		if (game.isGameOver() || !isComputerOpponent) return;

		const bestMove = findBestMove(game, difficulty);
		if (bestMove) {
			const moveDetails = game.move(bestMove);

			if (moveDetails.captured) {
				captureSound.play();
			} else {
				moveSound.play();
			}
			if (game.isCheck()) {
				checkSound.play();
			}

			updateGameState(game);
		}
	}, [game, isComputerOpponent, difficulty]);

	// Update game state helper
	const updateGameState = (newGame) => {
		setGame(new Chess(newGame.fen()));
		setMoveHistory(newGame.history({ verbose: true }));

		// Update captured pieces
		const captured = { w: [], b: [] };
		newGame.history({ verbose: true }).forEach((move) => {
			if (move.captured) {
				captured[move.color].push(move.captured);
			}
		});
		setCapturedPieces(captured);

		if (newGame.isGameOver()) {
			gameOverSound.play();
			setIsTimerRunning(false);
		}
	};

	// Handle piece movement
	const onDrop = useCallback(
		(sourceSquare, targetSquare) => {
			try {
				const move = game.move({
					from: sourceSquare,
					to: targetSquare,
					promotion: "q",
				});

				if (move === null) return false;

				// Play appropriate sound
				if (move.captured) {
					captureSound.play();
				} else {
					moveSound.play();
				}
				if (game.isCheck()) {
					checkSound.play();
				}

				updateGameState(game);

				// Start timer if not running
				if (!isTimerRunning) {
					setIsTimerRunning(true);
				}

				// Make computer move if enabled
				if (isComputerOpponent) {
					setTimeout(makeComputerMove, 300);
				}

				return true;
			} catch (error) {
				return false;
			}
		},
		[game, isComputerOpponent, isTimerRunning]
	);

	// Game control functions
	const resetGame = () => {
		setGame(new Chess());
		setMoveHistory([]);
		setCapturedPieces({ w: [], b: [] });
		setTimer({ white: 600, black: 600 });
		setIsTimerRunning(false);
		clearInterval(timerInterval.current);
	};

	const undoMove = () => {
		const newGame = new Chess(game.fen());
		newGame.undo();
		if (isComputerOpponent) newGame.undo(); // Undo computer's move too
		updateGameState(newGame);
	};

	const flipBoard = () => {
		setBoardOrientation((currentOrientation) =>
			currentOrientation === "white" ? "black" : "white"
		);
	};

	const toggleComputerOpponent = () => {
		setIsComputerOpponent((prev) => !prev);
		resetGame();
	};

	const saveGame = () => {
		const gameData = {
			id: Date.now(),
			fen: game.fen(),
			date: new Date().toLocaleString(),
			vs: isComputerOpponent ? "Computer" : "Friend",
		};
		const updatedGames = [...savedGames, gameData];
		setSavedGames(updatedGames);
		localStorage.setItem("savedGames", JSON.stringify(updatedGames));
	};

	const loadGame = (fen) => {
		const newGame = new Chess(fen);
		setGame(newGame);
		setMoveHistory(newGame.history({ verbose: true }));
		updateGameState(newGame);
	};

	const updateTimeControl = (minutes) => {
		const seconds = minutes * 60;
		setTimeControl(seconds);
		setTimer({ white: seconds, black: seconds });
		setShowTimeControlModal(false);
	};

	useEffect(() => {
		const saved = localStorage.getItem("savedGames");
		if (saved) {
			setSavedGames(JSON.parse(saved));
		}
	}, []);

	return (
		<div>
			{/* Hero Section */}
			<section className="relative h-[40vh] flex items-center justify-center bg-brand-black text-brand-white">
				<div className="absolute inset-0 bg-[url('/chess-play-hero.jpg')] bg-cover bg-center opacity-30"></div>
				<div className="container mx-auto px-6 relative z-10 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-4xl md:text-6xl font-bold mb-6">
						Play Chess
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl text-brand-brown max-w-2xl mx-auto">
						Challenge yourself and improve your game
					</motion.p>
				</div>
			</section>

			{/* Chessboard Section */}
			<section ref={ref} className="py-20 bg-brand-white">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						className="max-w-6xl mx-auto">
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
							{/* Left Panel - Move History */}
							<div className="lg:col-span-1 bg-brand-black/5 p-6 rounded-xl shadow-soft">
								<h3 className="text-lg font-semibold text-brand-red mb-4">
									Move History
								</h3>
								<div className="h-[400px] overflow-y-auto">
									{moveHistory.map((move, index) => (
										<div
											key={index}
											className="flex items-center py-1 border-b border-brand-brown/10">
											<span className="w-8 text-brand-brown">
												{Math.floor(index / 2) + 1}.
											</span>
											<span className="flex-1 text-brand-black">
												{move.san}
											</span>
										</div>
									))}
								</div>
							</div>

							{/* Center - Chessboard */}
							<div className="lg:col-span-2">
								<div className="bg-brand-black/5 p-8 rounded-2xl shadow-soft">
									{/* Timer Display */}
									<div className="flex justify-between mb-4">
										<div className="text-xl font-semibold text-brand-black">
											⌛ Black: {formatTime(timer.black)}
										</div>
										<div className="text-xl font-semibold text-brand-black">
											⌛ White: {formatTime(timer.white)}
										</div>
									</div>

									{/* Chessboard */}
									<div className="aspect-square">
										<Chessboard
											position={game.fen()}
											onPieceDrop={onDrop}
											boardOrientation={boardOrientation}
											customBoardStyle={{
												borderRadius: "4px",
												boxShadow:
													"0 2px 10px rgba(0, 0, 0, 0.15)",
											}}
											customDarkSquareStyle={{
												backgroundColor: "#B88B5E",
											}}
											customLightSquareStyle={{
												backgroundColor: "#F5EDE7",
											}}
										/>
									</div>

									{/* Game Controls */}
									<div className="mt-8 space-y-4">
										{/* Primary Controls */}
										<div className="flex flex-wrap justify-center gap-3">
											<button
												onClick={resetGame}
												className="px-4 py-2 bg-brand-red text-brand-white rounded-md hover:bg-opacity-90 transition-colors">
												<FontAwesomeIcon
													icon={faRedo}
													className="mr-2"
												/>
												New Game
											</button>
											<button
												onClick={toggleComputerOpponent}
												className={`px-4 py-2 ${
													isComputerOpponent
														? "bg-brand-red"
														: "bg-brand-brown"
												} text-brand-white rounded-md hover:bg-opacity-90 transition-colors`}>
												<FontAwesomeIcon
													icon={faGamepad}
													className="mr-2"
												/>
												{isComputerOpponent
													? "Play vs Friend"
													: "Play vs Computer"}
											</button>
											{isComputerOpponent && (
												<select
													value={difficulty}
													onChange={(e) =>
														setDifficulty(
															e.target.value
														)
													}
													className="px-4 py-2 bg-brand-brown text-brand-white rounded-md cursor-pointer hover:bg-opacity-90 transition-colors">
													<option value="easy">
														Easy
													</option>
													<option value="medium">
														Medium
													</option>
													<option value="hard">
														Hard
													</option>
												</select>
											)}
										</div>

										{/* Game Actions */}
										<div className="flex flex-wrap justify-center gap-3">
											<button
												onClick={undoMove}
												className="px-4 py-2 bg-brand-brown text-brand-white rounded-md hover:bg-opacity-90 transition-colors">
												<FontAwesomeIcon
													icon={faUndo}
													className="mr-2"
												/>
												Undo Move
											</button>
											<button
												onClick={flipBoard}
												className="px-4 py-2 bg-brand-black text-brand-white rounded-md hover:bg-opacity-90 transition-colors">
												<FontAwesomeIcon
													icon={faCog}
													className="mr-2"
												/>
												Flip Board
											</button>
										</div>

										{/* Game Management */}
										<div className="flex flex-wrap justify-center gap-3">
											<button
												onClick={saveGame}
												className="px-4 py-2 bg-brand-brown text-brand-white rounded-md hover:bg-opacity-90 transition-colors">
												<FontAwesomeIcon
													icon={faSave}
													className="mr-2"
												/>
												Save Game
											</button>
											<div className="relative">
												<button
													onClick={() =>
														setShowSavedGames(
															(prev) => !prev
														)
													}
													className="px-4 py-2 bg-brand-brown text-brand-white rounded-md hover:bg-opacity-90 transition-colors">
													<FontAwesomeIcon
														icon={faGamepad}
														className="mr-2"
													/>
													Load Game
												</button>
												{showSavedGames && (
													<div className="absolute top-full mt-2 w-64 bg-white shadow-lg rounded-md p-4 z-10">
														{savedGames.length >
														0 ? (
															savedGames.map(
																(game) => (
																	<button
																		key={
																			game.id
																		}
																		onClick={() => {
																			loadGame(
																				game.fen
																			);
																			setShowSavedGames(
																				false
																			);
																		}}
																		className="w-full text-left p-2 hover:bg-brand-brown/10 rounded">
																		{
																			game.date
																		}{" "}
																		- vs{" "}
																		{
																			game.vs
																		}
																	</button>
																)
															)
														) : (
															<p className="text-brand-black text-center py-2">
																No saved games
															</p>
														)}
													</div>
												)}
											</div>
											<button
												onClick={() =>
													setShowTimeControlModal(
														true
													)
												}
												className="px-4 py-2 bg-brand-brown text-brand-white rounded-md hover:bg-opacity-90 transition-colors">
												<FontAwesomeIcon
													icon={faStopwatch}
													className="mr-2"
												/>
												Set Time
											</button>
										</div>
									</div>
								</div>
							</div>

							{/* Right Panel - Captured Pieces & Game Info */}
							<div className="lg:col-span-1 bg-brand-black/5 p-6 rounded-xl shadow-soft">
								<h3 className="text-lg font-semibold text-brand-red mb-4">
									Captured Pieces
								</h3>
								<div className="mb-6">
									<div className="mb-4">
										<h4 className="text-brand-black font-medium mb-2">
											White captured:
										</h4>
										<div className="flex flex-wrap gap-2">
											{capturedPieces.w.map(
												(piece, index) => (
													<span
														key={index}
														className="text-2xl">
														{piece === "p"
															? "♟"
															: piece === "n"
															? "♞"
															: piece === "b"
															? "♝"
															: piece === "r"
															? "♜"
															: piece === "q"
															? "♛"
															: ""}
													</span>
												)
											)}
										</div>
									</div>
									<div>
										<h4 className="text-brand-black font-medium mb-2">
											Black captured:
										</h4>
										<div className="flex flex-wrap gap-2">
											{capturedPieces.b.map(
												(piece, index) => (
													<span
														key={index}
														className="text-2xl">
														{piece === "p"
															? "♙"
															: piece === "n"
															? "♘"
															: piece === "b"
															? "♗"
															: piece === "r"
															? "♖"
															: piece === "q"
															? "♕"
															: ""}
													</span>
												)
											)}
										</div>
									</div>
								</div>

								{/* Game Status */}
								<div className="text-center text-brand-black">
									{game.isGameOver() ? (
										<p className="text-xl font-semibold">
											Game Over!{" "}
											{game.isCheckmate()
												? `${
														game.turn() === "w"
															? "Black"
															: "White"
												  } wins by checkmate!`
												: game.isDraw()
												? "Game is a draw!"
												: ""}
										</p>
									) : (
										<p className="text-xl font-semibold">
											{game.turn() === "w"
												? "White"
												: "Black"}
											's turn
										</p>
									)}
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Time Control Modal */}
			{showTimeControlModal && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center">
					<div className="bg-white p-6 rounded-lg">
						<h3 className="text-xl font-bold mb-4">
							Set Time Control
						</h3>
						<div className="space-y-2">
							{[1, 3, 5, 10, 15, 30].map((minutes) => (
								<button
									key={minutes}
									onClick={() => updateTimeControl(minutes)}
									className="w-full px-4 py-2 bg-brand-brown text-brand-white rounded-md">
									{minutes}{" "}
									{minutes === 1 ? "minute" : "minutes"}
								</button>
							))}
						</div>
						<button
							onClick={() => setShowTimeControlModal(false)}
							className="mt-4 px-4 py-2 bg-brand-red text-brand-white rounded-md">
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Play;
