import { SkeletonPulse } from './SkeletonPulse';

export function FAQSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border-2 border-black p-6">
          <div className="flex justify-between items-center">
            <div className="w-2/3 h-8">
              <SkeletonPulse />
            </div>
            <div className="w-8 h-8">
              <SkeletonPulse />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}