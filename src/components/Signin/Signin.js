import React from "react";
import { useForm, useFormState } from "react-hook-form";
import useSignin from "./useSign";

export default function Signin() {
  const { register, handleSubmit, control } = useForm({
    mode: "onChange",
  });
  const { errors } = useFormState({ control });
  console.log(errors);
  const { signinHandler, loading, error: signinError } = useSignin();

  // will get data from the register and needs to be passed on handle submit

  return (
    <div className="signin">
      <form className="signin__form" onSubmit={handleSubmit(signinHandler)}>
        <h1 className="signin-heading">Sign in</h1>
        <p className="signin__error">
          {errors?.email?.message || errors?.password?.message || signinError}
        </p>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            autoComplete="off"
            {...register("email", { required: "Email is Required" })}
          />

          <input
            type="password"
            placeholder="Password"
            autoComplete="off"
            {...register("password", { required: "Password is Required" })}
          />
          <input
            id="s-btn"
            type="submit"
            value={`${loading ? "*  *  *" : "Submit"}`}
          />
        </div>
      </form>
    </div>
  );
}
