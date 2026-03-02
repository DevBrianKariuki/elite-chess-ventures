export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image?: string;
    imageUrl?: string;
    tags?: string[];
    isPublished?: boolean;
    isFeatured?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface BlogFormData extends Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'> { }
