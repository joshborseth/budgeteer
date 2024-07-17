import { env } from "@/env";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { TypographyP } from "../ui/typography";
import { StatementUploadForm } from "./StatementUploadForm";

const items = [
  {
    id: 1,
    name: "march.csv",
    downloadLink: "#",
  },
  {
    id: 2,
    name: "june.csv",
    downloadLink: "#",
  },
  {
    id: 3,
    name: "july.csv",
    downloadLink: "#",
  },
];

export const Statements = async () => {
  const command = new PutObjectCommand({
    Key: "idk",
    Bucket: env.S3_BUCKET,
  });
  const url = await getSignedUrl(
    new S3Client({
      region: env.S3_REGION,
      credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      },
    }),
    command,
  );
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Statements</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64 pr-5">
          <ul className="flex flex-col gap-4 py-2">
            {[...items, ...items, ...items].map((item, i) => (
              <li
                className="flex w-full list-disc items-center justify-between"
                key={i}
              >
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <TypographyP className="text-sm font-medium">
                      {item.name}
                    </TypographyP>
                  </div>
                </div>
                <Link href={item.downloadLink}>
                  <Button size="sm" variant="outline">
                    Download
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <StatementUploadForm url={url} />
      </CardFooter>
    </Card>
  );
};
