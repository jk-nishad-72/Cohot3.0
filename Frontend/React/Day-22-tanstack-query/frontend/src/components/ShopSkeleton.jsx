const SkeletonCard = () => (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="aspect-square animate-pulse bg-slate-100" />
      <div className="flex flex-col gap-3 p-4">
        <div className="h-3.5 w-4/5 animate-pulse rounded-full bg-slate-100" />
        <div className="h-3.5 w-2/5 animate-pulse rounded-full bg-slate-100" />
        <div className="mt-2 flex items-center justify-between">
          <div className="h-5 w-12 animate-pulse rounded-full bg-slate-100" />
          <div className="h-7 w-16 animate-pulse rounded-full bg-slate-100" />
        </div>
      </div>
    </div>
  );
  
  const ShopSkeleton = ({ count = 8 }) => {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  };
  
  export default ShopSkeleton;