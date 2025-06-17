import ArticleI from '@/components/root/ArticleI';
import ArticleII from '@/components/root/ArticleII';
import ArticleIII from '@/components/root/ArticleIII';

export default function Article() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-3xl space-y-12">
        {/* ? First Article */}
        <ArticleI />
        {/* ? Second Article */}
        <ArticleII />
        {/* ? Third Article */}
        <ArticleIII />
      </div>
    </div>
  );
}
