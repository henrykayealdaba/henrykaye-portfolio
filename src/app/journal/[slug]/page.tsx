import { getAllJournalSlugs, getJournalData } from '@/lib/readMdFiles/journal';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

// TODO: Add not found page soon
// TODO: Add metadata for each journal entry

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const journalData = await getJournalData(params.slug);

  if (!journalData) {
    return {
      title: 'Journal Not Found',
    };
  }

  return {
    title: journalData.title || 'Journal',
    description: journalData.description || '',
  };
}

export default async function JournalPage({ params }: { params: { slug: string } }) {
  const slugs = getAllJournalSlugs();
  const slug = await params.slug;
  const exists = slugs.some((s) => s.params.slug === slug);
  if (!exists) return notFound();

  const journalData = await getJournalData(params.slug);
  if (!journalData) return notFound();

  return (
    <div className="flex flex-col items-center justify-center space-y-12 overflow-x-hidden p-4">
      <div>
        {journalData.cover && (
          <div className="relative">
            {journalData.cover.includes('.gif') && (
              <div
                className={`absolute inset-0 animate-ping rounded-full bg-white opacity-10 blur-xl`}
              />
            )}
            <Image
              src={journalData.cover}
              alt="Cover"
              width={500}
              height={250}
              className={`w-xs rounded-lg ${!journalData.cover.includes('.gif') && 'mb-4'}`}
            />
          </div>
        )}
        {journalData.spotifySrc && (
          <iframe
            data-testid="embed-iframe"
            className="rounded-3xl bg-[var(--light-background)] ring ring-white dark:bg-[var(--dark-background)]"
            src={journalData.spotifySrc}
            width="100%"
            height="152"
            allowFullScreen={false}
            loading="lazy"
          />
        )}
      </div>
      <h1 className="text-6xl font-bold">{journalData.title}</h1>
      <div className="flex w-sm flex-col text-base">
        <p className="text-base font-bold">{journalData.date}</p>
        <div dangerouslySetInnerHTML={{ __html: journalData.contentHtml }} />
        <Link href={'/journal'} className="black-underline-hover self-end">
          <span className="inline-block align-middle">Go Back</span>
          <ArrowRight className="inline-block" />
        </Link>
      </div>
    </div>
  );
}
