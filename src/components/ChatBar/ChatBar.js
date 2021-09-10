import { useForm } from "react-hook-form";
import useSender from "./useSender";

export default function ChatBar() {
  const { register, handleSubmit } = useForm();
  const sendHandler = useSender();

  return (
    <form
      className="h-16 grid grid-cols-bar p-3 bg-pink-700"
      onSubmit={handleSubmit(sendHandler)}
    >
      <input
        className="p-2"
        type="text"
        placeholder="Enter a message"
        {...register("message")}
      />
      <button className="ml-3" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" m-0 h-5 w-5 transform rotate-90"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </button>
    </form>
  );
}
