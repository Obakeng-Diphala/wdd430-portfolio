export default function ProjectListSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="border border-gray-200 rounded-lg p-4 space-y-3 animate-pulse"
        >
          <div className="h-6 w-1/2 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}  