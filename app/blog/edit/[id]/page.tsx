"use client";
import { FormComponent } from "@/components/sections/form";
import { IFormInput } from "@/types/type";
import React, { FC } from "react";
import { SubmitHandler } from "react-hook-form";

interface Props {}

const EditDetailsPage: FC<Props> = ({}) => {
  const EditPostForm: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex min-h-screen max-w-screen-lg mx-auto items-center py-10 flex-col gap-7">
      <h1>Edit Post</h1>
      <FormComponent submit={EditPostForm} />
    </div>
  );
};

export default EditDetailsPage;
