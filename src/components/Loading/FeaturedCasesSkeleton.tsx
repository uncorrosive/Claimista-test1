import { SkeletonPulse } from './SkeletonPulse';

export function FeaturedCasesSkeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-4 p-6 bg-gray-50 rounded-3xl">
          <div className="flex justify-between items-start">
            <div className="space-y-2 flex-1">
              <div className="h-6 w-3/4">
                <SkeletonPulse />
              </div>
              <div className="h-4 w-1/2">
                <SkeletonPulse />
              </div>
            </div>
            <div className="w-24 h-8">
              <SkeletonPulse />
            </div>
          </div>
          <div className="h-16">
            <SkeletonPulse />
          </div>
          <div className="flex items-center justify-between">
            <div className="w-32 h-4">
              <SkeletonPulse />
            </div>
            <div className="w-24 h-4">
              <SkeletonPulse />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}