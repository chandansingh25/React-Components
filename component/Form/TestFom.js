import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  age: yup.number().positive("Age must be a positive number").integer("Age must be an integer").required("Age is required"),
}).required();





const TestForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = (data) => console.log(data);

  return (
    <div className="mb-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input {...register("firstName")} />
          <p>{errors.firstName?.message}</p>
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input {...register("age")} />
          <p>{errors.age?.message}</p>
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default TestForm;
