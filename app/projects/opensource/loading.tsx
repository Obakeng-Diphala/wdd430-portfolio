// loading.tsx (inside your open-source projects route folder)
export default function Loading() {
  return (
    <main>
      {/* Heading skeleton matching <h1>Open Source Projects</h1> */}
      <div className="h-9 w-64 bg-gray-200 rounded animate-pulse mb-6" />

      {/* ProjectList skeleton matching your project cards */}
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="border border-gray-200 rounded-lg p-4 space-y-3 animate-pulse"
          >
            <div className="h-6 w-1/2 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-4/5 bg-gray-200 rounded" />
            <div className="flex gap-2 pt-2">
              <div className="h-6 w-16 bg-gray-200 rounded-full" />
              <div className="h-6 w-16 bg-gray-200 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}    