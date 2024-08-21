import { ButtonBack } from "@/components/sections/button-back";
import { Button } from "@/components/ui/button";
import { PencilLine, Trash2 } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {}

const BlogDetailsPage: FC<Props> = ({}) => {
  return (
    <div className="flex min-h-screen max-w-screen-lg mx-auto py-10 flex-col gap-10">
      <div className="flex flex-row justify-between items-center w-full gap-4">
        <ButtonBack />
        <div className="flex flex-row items-center gap-x-4">
          <Link href="/blog/edit/1">
            <Button variant={"secondary"}>
              <PencilLine className="size-4" />
            </Button>
          </Link>
          <Button variant={"destructive"}>
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
      <div>
        <h1>Blog Details Page</h1>
        <p>This is the blog details page.</p>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
