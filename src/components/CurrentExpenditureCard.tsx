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

export const CurrentExpenditureCard = ({
  moneySpent,
  type,
  moneyRemaining,
  progressValue,
}: {
  moneySpent: number;
  type: "monthly" | "weekly";
  moneyRemaining: number;
  progressValue: number;
}) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>
          This {type === "monthly" ? "Month" : "Week"}
        </CardDescription>
        <CardTitle className="text-4xl">
          <NumberScramble value={moneySpent} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          ${moneyRemaining} remaining
        </div>
      </CardContent>
      <CardFooter>
        <Progress value={progressValue} aria-label={`${moneySpent} spent`} />
      </CardFooter>
    </Card>
  );
};
