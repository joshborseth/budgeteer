import { NumberScramble } from "./NumberScramble";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "./ui/progress";

export const WeeklySpendRemaing = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>This Week</CardDescription>
        <CardTitle className="text-4xl">
          <NumberScramble value={509} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">$400 remaining</div>
      </CardContent>
      <CardFooter>
        <Progress value={56} aria-label="$509 spent" />
      </CardFooter>
    </Card>
  );
};
