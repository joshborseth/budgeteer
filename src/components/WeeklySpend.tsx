import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export const WeeklySpend = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>This Week</CardDescription>
        <CardTitle className="text-4xl">$1,329</CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="destructive">
          <p className="text-xs">+25% from last week</p>
        </Badge>
      </CardContent>
    </Card>
  );
};
