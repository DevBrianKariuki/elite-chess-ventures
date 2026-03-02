import { TeamMember } from '@/types/team';

export const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Patrick Omondi',
        role: 'Head Coach & Founder',
        rating: 'FIDE Master',
        bio: 'With over 20 years of chess experience, Patrick founded Elite Chess Ventures to make professional chess education accessible to all Kenyan students.',
        avatar: '👨‍🏫',
        email: 'patrick@elitechess.co.ke',
        specialties: ['Opening Theory', 'Endgame Mastery', 'Tournament Preparation'],
        yearsOfExperience: 20,
        isVisible: true,
        order: 1,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2026-02-28T00:00:00Z',
    },
    {
        id: '2',
        name: 'Grace Njeri',
        role: 'School Programs Director',
        rating: 'Candidate Master',
        bio: 'Grace specializes in developing comprehensive chess programs for schools, integrating chess education with academic curricula.',
        avatar: '👩‍💼',
        email: 'grace@elitechess.co.ke',
        specialties: ['School Programs', 'Curriculum Development', 'Youth Education'],
        yearsOfExperience: 12,
        isVisible: true,
        order: 2,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2026-02-28T00:00:00Z',
    },
    {
        id: '3',
        name: 'James Kamau',
        role: 'Tournament Director',
        rating: 'International Arbiter',
        bio: 'James manages all tournament operations and has officiated over 200 chess tournaments across East Africa.',
        avatar: '👨‍⚖️',
        email: 'james@elitechess.co.ke',
        specialties: ['Tournament Management', 'FIDE Regulations', 'Event Organization'],
        yearsOfExperience: 15,
        isVisible: true,
        order: 3,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2026-02-28T00:00:00Z',
    },
    {
        id: '4',
        name: 'Sarah Wanjiru',
        role: 'Youth Development Coach',
        rating: 'FIDE Instructor',
        bio: 'Sarah focuses on nurturing young talent and has coached multiple national youth champions.',
        avatar: '👩‍🎓',
        email: 'sarah@elitechess.co.ke',
        specialties: ['Youth Training', 'Talent Development', 'Psychological Coaching'],
        yearsOfExperience: 8,
        isVisible: true,
        order: 4,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2026-02-28T00:00:00Z',
    },
    {
        id: '5',
        name: 'David Mwangi',
        role: 'Senior Chess Coach',
        rating: 'National Master',
        bio: 'David brings deep tactical knowledge and has trained numerous players to achieve their first FIDE ratings.',
        avatar: '👨‍🏫',
        email: 'david@elitechess.co.ke',
        specialties: ['Tactical Training', 'Rating Improvement', 'Competitive Play'],
        yearsOfExperience: 10,
        isVisible: true,
        order: 5,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2026-02-28T00:00:00Z',
    },
    {
        id: '6',
        name: 'Mary Akinyi',
        role: 'Community Outreach Manager',
        rating: 'FIDE Instructor',
        bio: 'Mary leads our community programs, bringing chess education to underserved communities across Kenya.',
        avatar: '👩‍💻',
        email: 'mary@elitechess.co.ke',
        specialties: ['Community Outreach', 'Program Management', 'Partnership Development'],
        yearsOfExperience: 7,
        isVisible: true,
        order: 6,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2026-02-28T00:00:00Z',
    },
];

// Helper functions
export const getVisibleTeamMembers = () => {
    return teamMembers
        .filter(member => member.isVisible !== false)
        .sort((a, b) => (a.order || 0) - (b.order || 0));
};

export const getTeamMemberById = (id: string) => {
    return teamMembers.find(member => member.id === id);
};
