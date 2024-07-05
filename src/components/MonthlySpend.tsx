import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NumberScramble } from "./NumberScramble";
import { Badge } from "./ui/badge";
import { TypographyP } from "./ui/typography";
export const MonthlySpend = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Last Month</CardDescription>
        <CardTitle className="text-4xl">
          <NumberScramble value={5329} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="success">
          <TypographyP className="text-xs">$444 under budget</TypographyP>
        </Badge>
      </CardContent>
    </Card>
  );
};
