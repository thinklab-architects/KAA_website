export type Attachment = {
  name: string;
  url: string;
  version?: string;
  effective_from?: string; // ISO date
  mime?: string;
  size_bytes?: number;
};

export type ArticleCategory =
  | "公會公告"
  | "法規"
  | "公會公文"
  | "公文轉達"
  | "招標";

export interface Article {
  id: string;
  title: string;
  category: ArticleCategory | string;
  published_at: string; // ISO date YYYY-MM-DD
  updated_at?: string; // ISO date
  summary?: string;
  body?: string;
  tags?: string[];
  attachments?: Attachment[];
  publisher?: string;
}

export interface EventCredits {
  hours: number;
  type: string; // CPD / HSW ...
}

export interface EventItem {
  id: string;
  title: string;
  start: string; // ISO date-time
  end?: string; // ISO date-time
  venue?: string;
  isCPD?: boolean;
  credits?: EventCredits;
  status?: "open" | "closed" | "full";
  materials?: Attachment[];
}

export interface CourseModule {
  title: string;
  duration?: string; // HH:MM:SS or MM:SS
}

export interface Course {
  id: string;
  title: string;
  format: "live" | "on-demand";
  credits?: EventCredits;
  modules?: CourseModule[];
  instructors?: string[];
}

export interface AwardWinner {
  title: string;
  team?: string;
  category?: string;
}

export interface AwardCycle {
  year: number;
  name: string;
  categories?: string[];
  winners?: AwardWinner[];
}

export interface ResourceTopic {
  slug: string;
  title: string;
  description?: string;
}
