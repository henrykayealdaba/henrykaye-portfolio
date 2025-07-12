import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import breaks from 'remark-breaks';

const journalDir = path.join(process.cwd(), 'src', 'content', 'journal');

type JournalSlug = {
  params: {
    slug: string;
  };
};

const getAllJournalSlugs = (): JournalSlug[] => {
  try {
    const filenames = fs.readdirSync(journalDir);

    const slugs = filenames.map((filename) => ({
      params: { slug: filename.replace(/\.md$/, '') },
    }));

    return slugs;
  } catch (error) {
    console.error('Error reading journal directory:', error);
    return [];
  }
};

const getJournalData = async (
  slug: string
): Promise<{
  content: string;
  slug: string;
  date: string;
  title: string;
  cover: string;
  description: string;
  spotifySrc?: string;
  contentHtml: string;
}> => {
  const filePath = path.join(journalDir, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const { date, title, cover, description, spotifySrc } = data as {
    date: string;
    title: string;
    cover: string;
    description: string;
    spotifySrc?: string;
  };

  const processedContent = await remark().use(breaks).use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    date,
    title,
    cover,
    content,
    description,
    spotifySrc: spotifySrc || '',
    contentHtml,
  };
};

export { getAllJournalSlugs, getJournalData };
