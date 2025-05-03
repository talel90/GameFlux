export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: number;
  imageUrl: string;
  category: ArticleCategory;
  tags: string[];
  likes: number;
  comments: number;
  isBookmarked?: boolean;
}

export enum ArticleCategory {
  NEWS = 'news',
  REVIEW = 'review',
  GUIDE = 'guide',
  FEATURE = 'feature',
  INTERVIEW = 'interview',
  OPINION = 'opinion',
}

export interface Game {
  id: string;
  title: string;
  developer: string;
  publisher: string;
  releaseDate: string;
  platforms: string[];
  genres: string[];
  rating: number;
  imageUrl: string;
  coverImageUrl: string;
  description: string;
}

export interface Review {
  id: string;
  gameId: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publishDate: string;
  rating: number;
  pros: string[];
  cons: string[];
  imageUrl: string;
}