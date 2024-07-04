import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "./ui/progress";

export const MonthlySpendRemaing = () => {
  return (
    <Card className="col-span-full">
      <CardHeader className="pb-2">
        <CardDescription>Monthly Expenditure</CardDescription>
        <CardTitle className="text-4xl">$2,090</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">$2910 remaining</div>
      </CardContent>
      <CardFooter>
        <Progress value={56} aria-label="2,090 spent" />
      </CardFooter>
    </Card>
  );
};
