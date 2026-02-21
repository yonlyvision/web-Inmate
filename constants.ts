import { Book, PodcastEpisode, Recipe, MetricData } from './types';

export const BOOKS: Book[] = [
  {
    id: '1',
    title: "The Quiet Between Words",
    subtitle: "A Memoir of Connection",
    description: "An exploration of the silent moments that define our relationships and the unspoken truths that guide our lives.",
    coverUrl: "https://picsum.photos/300/450?grayscale",
    amazonLink: "#"
  },
  {
    id: '2',
    title: "Echoes of the City",
    subtitle: "Urban Stories",
    description: "Short stories inspired by the chaotic, beautiful mess of modern urban living and the people who survive it.",
    coverUrl: "https://picsum.photos/301/451?grayscale",
    amazonLink: "#"
  }
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: '1',
    title: "Ep. 42: Why We Fall in Love",
    duration: "45 min",
    date: "Coming soon in 2026",
    description: "Discussing the psychology of attachment with Dr. Sarah Jenkins."
  },
  {
    id: '2',
    title: "Ep. 41: The Art of Letting Go",
    duration: "38 min",
    date: "Coming soon in 2026",
    description: "How to move forward when the past feels comfortable."
  },
  {
    id: '3',
    title: "Ep. 40: Finding Solitude",
    duration: "50 min",
    date: "Coming soon in 2026",
    description: "The difference between being alone and being lonely."
  }
];

export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: "Morning Glow Smoothie",
    category: "Breakfast",
    image: "https://picsum.photos/600/400?random=1",
    time: "5 min",
    description: "Turmeric, ginger, and mango blend to start your day with anti-inflammatory power."
  },
  {
    id: '2',
    title: "Roasted Chickpea Salad",
    category: "Lunch",
    image: "https://picsum.photos/600/400?random=2",
    time: "20 min",
    description: "High protein, plant-based energy bowl with tahini dressing."
  },
  {
    id: '3',
    title: "Zen Matcha Latte",
    category: "Drink",
    image: "https://picsum.photos/600/400?random=3",
    time: "10 min",
    description: "The perfect afternoon ritual to reset your mind."
  }
];

export const DATING_METRICS: MetricData[] = [
  { subject: 'Values', A: 120, B: 110, fullMark: 150 },
  { subject: 'Lifestyle', A: 98, B: 130, fullMark: 150 },
  { subject: 'Emotion', A: 86, B: 130, fullMark: 150 },
  { subject: 'Growth', A: 99, B: 100, fullMark: 150 },
  { subject: 'Humor', A: 85, B: 90, fullMark: 150 },
  { subject: 'Vision', A: 65, B: 85, fullMark: 150 },
];
