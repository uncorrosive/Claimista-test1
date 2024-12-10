import { SkeletonPulse } from './SkeletonPulse';

export function HeroSkeleton() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="h-16 max-w-md">
              <SkeletonPulse />
            </div>
            <div className="h-24 max-w-lg">
              <SkeletonPulse />
            </div>
            <div className="h-12 w-48">
              <SkeletonPulse />
            </div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-12 h-12">
                  <SkeletonPulse />
                </div>
                <div className="flex-1 h-8">
                  <SkeletonPulse />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}