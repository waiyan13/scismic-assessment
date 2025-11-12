import { CandidateCardSkelteon } from "./candidate-card-skeleton";

interface CandidateSkeletonListProps {
  count: number;
}

function CandidateSkeletonList({ count }: CandidateSkeletonListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <CandidateCardSkelteon key={index} />
      ))}
    </div>
  );
}

export { CandidateSkeletonList };
