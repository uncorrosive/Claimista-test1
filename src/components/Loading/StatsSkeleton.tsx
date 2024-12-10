import { SkeletonPulse } from './SkeletonPulse';

export function StatsSkeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-24">
          <SkeletonPulse />
        </div>
      ))}
    </div>
  );
}