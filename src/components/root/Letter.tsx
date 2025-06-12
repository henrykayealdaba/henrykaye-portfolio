export default function Letter() {
  return (
    <div className="flex h-[36rem] w-screen items-center justify-center bg-gradient-to-b from-amber-950 to-yellow-950 p-2 text-center text-[var(--dark-foreground)] dark:bg-slate-900 dark:from-slate-900 dark:to-slate-950">
      <div className="relative flex h-[95%] w-[95%] flex-col items-center justify-between border-2 border-dotted border-[var(--dark-border)] py-2">
        <p className="text-xs opacity-75">IMPORTANT NOTE FROM THE AUTHOR</p>
        <p className="max-md:text-md px-[20%] font-mono text-2xl font-bold max-lg:text-lg max-md:px-[10%] max-sm:text-sm">
          Dear lost and stagnant soul,
          <br />
          <br />
          If you stop reading this letter, you&#39;ve proven exactly who you are. Perhaps
          there&#39;s hope yet. You are someone willing to change, to grow, and to become better.
          Someone willing to take the first step toward self-improvement.
        </p>
        <p className="rotate-180 text-xs opacity-75">IMPORTANT NOTE FROM THE AUTHOR</p>

        <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-[clamp(10rem,35vw,40rem)] text-nowrap opacity-10 select-none">
          手紙
        </div>
      </div>
    </div>
  );
}
