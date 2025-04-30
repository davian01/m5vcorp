import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/utils';
import { newsItems } from '@/lib/news';
import Image from 'next/image';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.id,
  }));
}

export default async function NewsArticlePage({ params }: PageProps) {
  const article = newsItems.find((item) => item.id === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="pt-[128px]">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <span className="text-sm font-medium text-blue-600">{article.category}</span>
          <h1 className="text-4xl font-bold mb-4 mt-2">{article.headline}</h1>
          <div className="text-gray-600">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className="mx-2">•</span>
            <span>{article.author}</span>
          </div>
        </div>

        {article.image && (
          <div className="mb-8 relative aspect-video w-full">
            <Image
              src={article.image}
              alt={article.headline}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          {article.body.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg sm:text-xl mb-6 whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
