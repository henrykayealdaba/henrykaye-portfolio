import JournalListItem from '@/components/journal/JournalListItem';
import { getAllJournalSlugs, getJournalData } from '@/lib/readMdFiles/journal';

export default async function JournalList() {
  const slugs = getAllJournalSlugs();
  const postsData = await Promise.all(slugs.map((slug) => getJournalData(slug.params.slug)));
  const posts = postsData.filter((post) => post !== null) as Array<{
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
  }>;

  return (
    <div className="grid grid-cols-1 gap-4 px-10 sm:grid-cols-2 lg:grid-cols-3">
      <JournalListItem
        link={'404'}
        title={'404 Not Found Testing'}
        date={'404'}
        description={'This is a test for 404 not found'}
      />
      {posts.map((post) => (
        <JournalListItem
          key={post.slug}
          link={post.slug}
          title={post.title}
          date={post.date}
          description={post.description}
        />
      ))}
    </div>
  );
}
