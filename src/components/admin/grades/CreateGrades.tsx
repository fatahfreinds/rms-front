"use client";
import { AddSectionDocument, AddSectionMutation, AddSectionMutationVariables, Section } from "@/gql/graphql";
import { addSectionSchema } from "@/types/section"
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { OperationResult, useMutation } from "urql";

interface Props {
  data : Section[]
  setData : React.Dispatch<React.SetStateAction<Section[]>>
}

const CreateSection = (props: Props) => {

  const [state, CreateSectionExecute] = useMutation(AddSectionDocument);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    shouldUseNativeValidation: true,
    resolver: zodResolver(addSectionSchema),
  });

  const HandleSubmit = async (data: any) => {
    const datas: OperationResult<AddSectionMutation,AddSectionMutationVariables> = await CreateSectionExecute({
      name: data.name
    });

    if (datas.data?.createSection) {
      alert("Section Added");
    props.setData([...props.data, datas.data?.createSection as Section]);
    } else {
      alert("Section Not Added");
    }
    reset();
  };

  return (
    <div>
      <h1>Create Section</h1>

      <form
        onSubmit={handleSubmit(async (data) => {
          await HandleSubmit(data);
        })}
      >
        <input type="text" {...register("name")} placeholder="name" />
        <button
          className="bg-fuchsia-600"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateSection;