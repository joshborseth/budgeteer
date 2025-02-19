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
export const MostExpensiveStoreLastMonth = (props: {
  amount: number;
  store: string;
  overUnder: "over" | "under";
  overUnderAmount: number;
}) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>{props.store} Last Month</CardDescription>
        <CardTitle className="text-3xl">
          <NumberScramble value={props.amount} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <>
          {props.overUnder === "over" ? (
            <Badge variant="destructive">
              <TypographyP className="text-xs">
                ${props.overUnderAmount} more than usual
              </TypographyP>
            </Badge>
          ) : (
            <Badge variant="secondary">
              <TypographyP className="text-xs">
                ${props.overUnderAmount} less than usual
              </TypographyP>
            </Badge>
          )}
        </>
      </CardContent>
    </Card>
  );
};
