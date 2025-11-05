export default function ProductLoading() {
  return (
    <div className="container mx-auto px-4 py-12 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Skeleton */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-200 rounded-lg"></div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
        
        {/* Content Skeleton */}
        <div className="space-y-6">
          <div className="h-8 w-32 bg-gray-200 rounded"></div>
          <div className="h-10 w-64 bg-gray-200 rounded"></div>
          <div className="h-8 w-32 bg-gray-200 rounded"></div>
          
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
          
          <div className="space-y-3">
            <div className="h-6 w-48 bg-gray-200 rounded"></div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div className="h-5 w-5 bg-gray-200 rounded-full mr-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
          
          <div className="h-10 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
