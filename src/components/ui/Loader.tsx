export default function Loader({ fullPage = true }: { fullPage?: boolean }) {
  return (
    <div className={`${fullPage ? 'min-h-[60vh]' : 'py-12'} flex items-center justify-center`}>
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-base-content/60 animate-pulse">Loading beautiful tiles...</p>
      </div>
    </div>
  );
}