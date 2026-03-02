export interface TeamMember {
    id: string;
    name: string;
    role: string;
    rating: string;
    bio?: string;
    avatar?: string;
    photo?: string; // URL to the team member's photo
    email?: string;
    socialLinks?: {
        linkedin?: string;
        twitter?: string;
    };
    specialties?: string[];
    yearsOfExperience?: number;
    isVisible?: boolean;
    order?: number;
    createdAt?: string;
    updatedAt?: string;
}

export type TeamMemberFormData = Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>;
