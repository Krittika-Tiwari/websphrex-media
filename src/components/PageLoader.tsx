const PageLoader = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center pt-8 px-4 md:px-8">
      {/* Header Nav Skeleton */}
      <div className="w-full max-w-7xl flex justify-between items-center mb-32 border-b border-border/20 pb-4">
        <div className="w-32 h-8 bg-muted/20 animate-pulse rounded" />
        <div className="hidden md:flex gap-8">
          {[1, 2, 3, 4].map(i => <div key={i} className="w-16 h-4 bg-muted/10 animate-pulse rounded" />)}
        </div>
        <div className="w-32 h-10 bg-accent/20 animate-pulse rounded-md" />
      </div>

      {/* Hero Content Skeleton */}
      <div className="w-full max-w-4xl flex flex-col items-center gap-6">
        <div className="w-3/4 h-16 md:h-20 bg-muted/30 animate-pulse rounded-2xl" />
        <div className="w-full h-10 md:h-12 bg-muted/20 animate-pulse rounded-xl" />
        <div className="w-5/6 h-10 md:h-12 bg-muted/20 animate-pulse rounded-xl" />
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center">
          <div className="w-full sm:w-48 h-14 bg-accent/30 animate-pulse rounded-lg" />
          <div className="w-full sm:w-48 h-14 bg-muted/30 animate-pulse rounded-lg" />
        </div>
      </div>
      
      {/* Cards Skeleton */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-64 bg-muted/10 animate-pulse rounded-2xl border border-border/20" />
        ))}
      </div>
    </div>
  );
};

export default PageLoader;
