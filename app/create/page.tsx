"use client";
import { FormComponent } from "@/components/sections/form";
import { IFormInput } from "@/types/type";
import React, { FC } from "react";
import { SubmitHandler } from "react-hook-form";

interface Props {}

const CreatePage: FC<Props> = ({}) => {
  const CreatePostForm: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex min-h-screen max-w-screen-lg mx-auto items-center py-10 flex-col gap-7">
      <h1>Create New Post</h1>
      <FormComponent submit={CreatePostForm} />
    </div>
  );
};

export default CreatePage;
