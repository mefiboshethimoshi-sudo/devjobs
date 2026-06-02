interface HeaderProps {
  savedCount: number;
}

export default function Header({ savedCount }: HeaderProps) {
  return (
    <header>
      <h1>DevJobs</h1>

      {savedCount > 0 && (
        <span className="saved-badge">
          ❤️ {savedCount} saved
        </span>
      )}
    </header>
  );
}
