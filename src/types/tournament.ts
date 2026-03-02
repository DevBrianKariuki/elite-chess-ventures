export interface Tournament {
    id: string;
    title: string;
    date: string;
    endDate?: string;
    location: string;
    category: string;
    status: 'open' | 'upcoming' | 'closed' | 'completed';
    description?: string;
    entryFee?: string;
    prizePool?: string;
    maxParticipants?: number;
    currentParticipants?: number;
    format?: string;
    timeControl?: string;
    registrationDeadline?: string;
    contact?: string;
    image?: string;
    isFeatured?: boolean;
    isVisible?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export type TournamentFormData = Omit<Tournament, 'id' | 'createdAt' | 'updatedAt'>;
