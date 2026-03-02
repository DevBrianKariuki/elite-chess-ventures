import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'How Chess Improves Academic Performance in Kenyan Schools',
        excerpt: 'A comprehensive study of 50 Nairobi schools shows remarkable correlation between chess programs and improved mathematics scores.',
        category: 'Education',
        author: 'Dr. James Kamau',
        date: 'March 10, 2024',
        readTime: '5 min read',
        image: '🎓',
        isPublished: true,
        isFeatured: true,
        content: `
      <p>Over the past three years, Elite Chess Ventures has conducted a comprehensive study across 50 schools in Nairobi, 
      tracking the academic performance of students enrolled in our chess programs. The results have been nothing short of remarkable.</p>

      <h2>Key Findings</h2>
      <p>Students who participated in regular chess training showed an average improvement of 23% in mathematics scores 
      and 18% in science subjects. More importantly, teachers reported significant improvements in problem-solving abilities, 
      concentration spans, and critical thinking skills.</p>

      <h3>The Connection Between Chess and Mathematics</h3>
      <p>Chess is fundamentally a game of patterns, calculations, and logical sequences—skills that directly transfer to 
      mathematical thinking. When students learn to calculate chess moves several steps ahead, they're simultaneously 
      developing the ability to work through multi-step mathematical problems.</p>

      <h3>Beyond the Numbers</h3>
      <p>Perhaps even more valuable than test scores are the soft skills students develop through chess. We've observed 
      improvements in patience, emotional regulation, and the ability to learn from mistakes—all crucial life skills that 
      extend far beyond the classroom.</p>

      <h2>Implementation in Your School</h2>
      <p>Our school chess programs are designed to integrate seamlessly with existing curricula. We work with teachers to 
      align chess lessons with STEM education goals and provide all necessary materials and training.</p>

      <p>If you're a school administrator or teacher interested in bringing these benefits to your students, contact us 
      to schedule a free consultation and demonstration class.</p>
    `,
        tags: ['education', 'research', 'schools'],
        createdAt: '2024-03-10T10:00:00Z',
        updatedAt: '2024-03-10T10:00:00Z',
    },
    {
        id: '2',
        title: 'Tournament Recap: 2024 Inter-School Chess Championship',
        excerpt: 'Over 300 students competed in this year\'s championship. Meet the winners and see highlights from Kenya\'s biggest youth chess event.',
        category: 'Tournaments',
        author: 'Sarah Wanjiru',
        date: 'March 5, 2024',
        readTime: '8 min read',
        image: '🏆',
        isPublished: true,
        isFeatured: true,
        content: `
      <p>The 2024 Inter-School Chess Championship concluded last weekend with record-breaking participation and unforgettable moments.</p>

      <h2>By the Numbers</h2>
      <ul>
        <li>312 participants from 45 schools</li>
        <li>156 games played across two days</li>
        <li>8 different age categories</li>
      </ul>

      <h2>Championship Winners</h2>
      <p>Congratulations to all participants and special recognition to our category champions who demonstrated exceptional skill and sportsmanship.</p>

      <h3>Key Highlights</h3>
      <p>The tournament showcased the growing strength of school chess in Kenya, with several players achieving personal best performances.</p>
    `,
        tags: ['tournaments', 'recap', 'schools'],
        createdAt: '2024-03-05T14:00:00Z',
        updatedAt: '2024-03-05T14:00:00Z',
    },
    {
        id: '3',
        title: 'Success Story: From Beginner to National Champion',
        excerpt: 'Meet Isaac Mwangi, who went from zero chess experience to representing Kenya internationally in just 18 months.',
        category: 'Success Stories',
        author: 'Elite Chess Team',
        date: 'February 28, 2024',
        readTime: '6 min read',
        image: '⭐',
        isPublished: true,
        isFeatured: false,
        content: `
      <p>Isaac Mwangi's chess journey is a testament to dedication, proper coaching, and the transformative power of the game.</p>

      <h2>The Beginning</h2>
      <p>18 months ago, Isaac had never touched a chess piece. Today, he's representing Kenya at international tournaments.</p>

      <h2>The Journey</h2>
      <p>Through consistent training, tournament experience, and mentorship from our grandmaster coaches, Isaac's rating climbed from 800 to 2100.</p>
    `,
        tags: ['success-stories', 'inspiration', 'youth'],
        createdAt: '2024-02-28T09:00:00Z',
        updatedAt: '2024-02-28T09:00:00Z',
    },
    {
        id: '4',
        title: '10 Essential Chess Tactics Every Student Should Master',
        excerpt: 'Learn the fundamental tactical patterns that form the foundation of strong chess play: pins, forks, skewers, and more.',
        category: 'Coaching Tips',
        author: 'Coach Patrick Omondi',
        date: 'February 20, 2024',
        readTime: '10 min read',
        image: '♟️',
        isPublished: true,
        isFeatured: false,
        content: `
      <p>Tactical patterns are the building blocks of chess mastery. Here are the 10 essential tactics every student should know.</p>

      <h2>1. The Fork</h2>
      <p>A fork is when one piece attacks two or more enemy pieces simultaneously.</p>

      <h2>2. The Pin</h2>
      <p>A pin occurs when a piece cannot move because doing so would expose a more valuable piece to capture.</p>

      <h2>3. The Skewer</h2>
      <p>Similar to a pin, but the more valuable piece is in front and must move, exposing the piece behind.</p>

      <p>Continue practicing these patterns in your games and puzzles, and you'll see rapid improvement!</p>
    `,
        tags: ['tactics', 'coaching', 'learning'],
        createdAt: '2024-02-20T11:00:00Z',
        updatedAt: '2024-02-20T11:00:00Z',
    },
    {
        id: '5',
        title: 'Building a Chess Culture: Best Practices for Schools',
        excerpt: 'Practical advice for school administrators on establishing thriving chess clubs that engage students and deliver results.',
        category: 'Education',
        author: 'Dr. James Kamau',
        date: 'February 15, 2024',
        readTime: '7 min read',
        image: '🏫',
        isPublished: true,
        isFeatured: false,
        content: `
      <p>Creating a sustainable chess program in schools requires more than just buying boards and pieces.</p>

      <h2>Key Success Factors</h2>
      <ul>
        <li>Regular coaching sessions</li>
        <li>Tournament participation</li>
        <li>Parental involvement</li>
        <li>Integration with curriculum</li>
      </ul>

      <h2>Getting Started</h2>
      <p>We recommend starting with a pilot program in one class or grade level, then expanding based on results.</p>
    `,
        tags: ['education', 'schools', 'program-building'],
        createdAt: '2024-02-15T13:00:00Z',
        updatedAt: '2024-02-15T13:00:00Z',
    },
    {
        id: '6',
        title: 'The Mental Benefits of Chess for Young Minds',
        excerpt: 'Scientific research reveals how chess training enhances memory, concentration, and emotional intelligence in children.',
        category: 'Research',
        author: 'Dr. Grace Njeri',
        date: 'February 8, 2024',
        readTime: '6 min read',
        image: '🧠',
        isPublished: true,
        isFeatured: true,
        content: `
      <p>Recent neuroscience research provides compelling evidence for chess as a cognitive development tool.</p>

      <h2>Cognitive Benefits</h2>
      <p>Brain imaging studies show increased activity in areas responsible for planning, analysis, and pattern recognition in chess players.</p>

      <h2>Emotional Development</h2>
      <p>Chess teaches children to manage emotions, handle defeat gracefully, and celebrate victories with humility.</p>
    `,
        tags: ['research', 'psychology', 'youth-development'],
        createdAt: '2024-02-08T10:00:00Z',
        updatedAt: '2024-02-08T10:00:00Z',
    },
    {
        id: '7',
        title: 'Preparing Your Child for Their First Chess Tournament',
        excerpt: 'A parent\'s guide to tournament preparation: what to expect, how to support your child, and essential items to bring.',
        category: 'Parents Guide',
        author: 'Sarah Wanjiru',
        date: 'January 30, 2024',
        readTime: '5 min read',
        image: '📋',
        isPublished: true,
        isFeatured: false,
        content: `
      <p>First tournaments can be exciting and nerve-wracking for both children and parents. Here's how to prepare.</p>

      <h2>Before the Tournament</h2>
      <ul>
        <li>Ensure your child knows the rules thoroughly</li>
        <li>Practice with a clock</li>
        <li>Discuss tournament etiquette</li>
      </ul>

      <h2>What to Bring</h2>
      <ul>
        <li>Snacks and water</li>
        <li>Notebook for recording games</li>
        <li>Positive attitude!</li>
      </ul>
    `,
        tags: ['parents', 'tournaments', 'preparation'],
        createdAt: '2024-01-30T15:00:00Z',
        updatedAt: '2024-01-30T15:00:00Z',
    },
    {
        id: '8',
        title: 'Chess Olympiad Dreams: Kenya\'s Rising Stars',
        excerpt: 'Meet the young Kenyan players who are making waves internationally and aiming for the Chess Olympiad.',
        category: 'Success Stories',
        author: 'Elite Chess Team',
        date: 'January 22, 2024',
        readTime: '9 min read',
        image: '🌟',
        isPublished: true,
        isFeatured: false,
        content: `
      <p>Kenya's chess scene is experiencing unprecedented growth, with several young players gaining international recognition.</p>

      <h2>Rising Stars</h2>
      <p>We profile five young Kenyan players who are on track to represent the country at the Chess Olympiad.</p>

      <h2>The Path Forward</h2>
      <p>With continued support and training, Kenya's chess future looks brighter than ever.</p>
    `,
        tags: ['success-stories', 'international', 'olympiad'],
        createdAt: '2024-01-22T12:00:00Z',
        updatedAt: '2024-01-22T12:00:00Z',
    },
];

// Helper functions
export const getPublishedPosts = () => {
    return blogPosts.filter(post => post.isPublished !== false);
};

export const getFeaturedPosts = () => {
    return blogPosts.filter(post => post.isFeatured === true && post.isPublished !== false);
};

export const getPostsByCategory = (category: string) => {
    if (category === 'All') return getPublishedPosts();
    return blogPosts.filter(post => post.category === category && post.isPublished !== false);
};

export const getPostById = (id: string) => {
    return blogPosts.find(post => post.id === id);
};
