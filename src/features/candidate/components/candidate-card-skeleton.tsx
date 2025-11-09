import { Card, CardContent, CardHeader } from "@/components/card";
import { Skeleton } from "@/components/skeleton";

function CandidateCardSkelteon() {
  return (
    <Card className="border-none">
      <CardHeader>
        <Skeleton className="h-6 w-ful bg-primary-50" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full bg-primary-50" />
        <Skeleton className="h-4 w-2/3 bg-primary-50" />
        <Skeleton className="h-4 w-4/5 bg-primary-50" />
        <Skeleton className="h-4 w-1/2 bg-primary-50" />
      </CardContent>
    </Card>
  );
}

export { CandidateCardSkelteon };
