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
export const LastMonth = (props: {
  amount: number;
  overUnder: "over" | "under";
  overUnderAmount: number;
}) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Last Month Spending</CardDescription>
        <CardTitle className="text-3xl">
          <NumberScramble value={props.amount} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <>
          {props.overUnder === "over" ? (
            <Badge variant="destructive">
              <TypographyP className="text-xs">
                ${props.overUnderAmount} over budget
              </TypographyP>
            </Badge>
          ) : (
            <Badge variant="secondary">
              <TypographyP className="text-xs">
                ${props.overUnderAmount} under budget
              </TypographyP>
            </Badge>
          )}
        </>
      </CardContent>
    </Card>
  );
};
