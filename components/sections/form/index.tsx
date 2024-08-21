"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import { IFormInput } from "@/types/type";
import { FC } from "react";

type FormType = {
  submit: SubmitHandler<IFormInput>;
};

export const FormComponent: FC<FormType> = ({ submit }) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
      <Input
        {...register("title", { required: true })}
        type="text"
        placeholder="Post Title"
        className="w-[384px]"
      />
      <Textarea
        {...register("content", { required: true })}
        placeholder="Post content"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
