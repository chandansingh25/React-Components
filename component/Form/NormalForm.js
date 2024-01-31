import React from "react";
import { useForm } from "react-hook-form";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
        />
        <br />
        {errors.name && <span>This field is required</span>}
        <button type="submit">send</button>
      </form>
    </>
  );
};

export default NormalForm;
