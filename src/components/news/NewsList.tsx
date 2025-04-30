import { NewsItem } from '@/types/news';
import NewsCard from './NewsCard';

interface NewsListProps {
  items: NewsItem[];
}

export default function NewsList({ items }: NewsListProps) {
  return (
    <div className="space-y-12">
      {items.map(item => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
} 