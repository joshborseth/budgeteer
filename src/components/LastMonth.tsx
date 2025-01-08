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
export const LastMonth = (
  props:
    | {
        type: "income";
        amount: number;
      }
    | {
        type: "spending";
        amount: number;
        overUnder: "over" | "under";
        overUnderAmount: number;
      },
) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>
          Last Month {props.type === "income" ? "Income" : "Spending"}
        </CardDescription>
        <CardTitle className="text-3xl">
          <NumberScramble value={props.amount} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        {props.type === "spending" && (
          <>
            {props.overUnder === "over" ? (
              <Badge variant="destructive">
                <TypographyP className="text-xs">
                  ${props.overUnderAmount} over budget
                </TypographyP>
              </Badge>
            ) : (
              <Badge variant="success">
                <TypographyP className="text-xs">
                  ${props.overUnderAmount} under budget
                </TypographyP>
              </Badge>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};
