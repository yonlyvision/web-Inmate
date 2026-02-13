export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverUrl: string;
  amazonLink: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  duration: string;
  date: string;
  description: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: string;
  image: string;
  time: string;
  description: string;
}

export interface MetricData {
  subject: string;
  A: number; // Algorithm Match
  B: number; // User Preference
  fullMark: number;
}