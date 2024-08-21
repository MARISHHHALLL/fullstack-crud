import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
export function CardComponent() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href="/blog/1">
          <Button className="w-full">
            <ArrowUpRight className="mr-2 size-3" /> Read More..
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
