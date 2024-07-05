import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NumberScramble } from "./NumberScramble";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { TypographyP } from "./ui/typography";

export const WeeklySpend = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Last Week</CardDescription>
        <CardTitle className="text-4xl">
          <NumberScramble value={1329} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="destructive">
          <TypographyP className="text-xs">$250 over budget</TypographyP>
        </Badge>
      </CardContent>
    </Card>
  );
};
