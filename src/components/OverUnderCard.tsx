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
  overUnder,
  overUnderAmount,
}: {
  moneySpent: number;
  overUnder: "over" | "under";
  overUnderAmount: number;
}) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Last Month</CardDescription>
        <CardTitle className="text-4xl">
          <NumberScramble value={moneySpent} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        {overUnder === "over" ? (
          <Badge variant="destructive">
            <TypographyP className="text-xs">
              ${overUnderAmount} over budget
            </TypographyP>
          </Badge>
        ) : (
          <Badge variant="success">
            <TypographyP className="text-xs">
              ${overUnderAmount} under budget
            </TypographyP>
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};
