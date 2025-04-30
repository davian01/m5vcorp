export type NewsItem = {
  id: string
  headline: string
  date: string   // ISO yyyy-mm-dd
  author: string
  preview: string // Short preview text for list view
  body: string   // Full article content
  image?: string // optional image path
  category: string // e.g. "Press Release", "Market Update", etc.
} 