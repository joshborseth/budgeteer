import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { TypographyP } from "./ui/typography";
export const MonthlySpend = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>This Month</CardDescription>
        <CardTitle className="text-4xl">$5,329</CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="success">
          <TypographyP className="text-xs">-25% from last month</TypographyP>
        </Badge>
      </CardContent>
    </Card>
  );
};
