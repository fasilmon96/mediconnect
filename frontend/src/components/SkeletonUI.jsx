import { Skeleton } from "@/components/ui/skeleton";

 function SkeletonUI() {
  return (
    <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto h-[200px]">
      {[1,2,3].map((item) => (
        <div 
          key={item}
          className="p-4 bg-white/2 border border-white/10 shadow rounded-lg flex items-start gap-4"
        >
          <Skeleton className="p-7 rounded-full  bg-white/7 border border-white/10 " />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/3  bg-white/7 border border-white/5" />
            <Skeleton className="h-4 w-1/2  bg-white/7 border border-white/5" />
            <Skeleton className="h-4 w-1/4  bg-white/7 border border-white/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonUI;