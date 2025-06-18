export default function Footer() {
  return (
    <footer className="w-full bg-[var(--light-header-bg)]/75 py-4 text-center text-[var(--light-foreground)] backdrop-blur-xs dark:bg-[var(--dark-header-bg)] dark:text-[var(--dark-foreground)]">
      <p className="text-md">© {new Date().getFullYear()} Henry Kaye. All Rights Reserved.</p>
    </footer>
  );
}
