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
export const OverUnderCard = ({
  moneySpent,
  type,
  overUnder,
}: {
  moneySpent: number;
  type: {
    timeSpan: "monthly" | "weekly";
    overUnder: "over" | "under";
  };
  overUnder: number;
}) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>
          Last {type.timeSpan === "monthly" ? "Month" : "Week"}
        </CardDescription>
        <CardTitle className="text-4xl">
          <NumberScramble value={moneySpent} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        {type.overUnder === "over" ? (
          <Badge variant="destructive">
            <TypographyP className="text-xs">
              ${overUnder} over budget
            </TypographyP>
          </Badge>
        ) : (
          <Badge variant="success">
            <TypographyP className="text-xs">
              ${overUnder} under budget
            </TypographyP>
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};
