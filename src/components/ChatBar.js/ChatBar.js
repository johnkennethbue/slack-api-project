import { useForm, useFormState } from "react-hook-form";
import useSender from "./useSender";

export default function ChatBar() {
  const { register, handleSubmit } = useForm();
  const sendHandler = useSender();
  return (
    <form
      onSubmit={handleSubmit(sendHandler)}
      className="bg-purple-700 border p-5 rounded-sm "
    >
      <input
        placeholder="your message"
        type="text"
        className=" p-2 rounded-sm"
        {...register("message")}
      />
      <button type="submit" className="bg-yellow-400 py-1 px-3 rounded-sm ml-2">
        {" "}
        send
      </button>
    </form>
  );
}
