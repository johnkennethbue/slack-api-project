import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("httttttttttt????", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        // userArray.push(response.data);
        console.log(response);
        // setUsers([...userArray]);
        // console.log("users data", users);
      })
      .catch((error) => console.log("Hello", error));
  };

  return (
    <div className="signin">
      <form className="signin__form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="signin-heading">Sign in</h1>
        <p className="signin__error">Status</p>

        <div className="input-group">
          <input
            required
            type="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            {...register("email", { required: true })}
          />

          <input type="password" placeholder="Password" autoComplete="off" />
          <input id="s-btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
