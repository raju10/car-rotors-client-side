import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const ReviewDetails = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //=====//
  const onSubmit = (data) => {
    const datas = { ...loginUser, data };
    console.log(datas);
    const url = `https://warm-beach-20852.herokuapp.com/addPrdReview`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(datas),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input defaultValue="test" {...register("example")} /> */}

        <input
          {...register("myName", { required: true })}
          defaultValue={loginUser.loginuserName}
          className="form-control w-75 mt-5"
          placeholder="Your Name"
        />

        {errors.myName && <span>Name is required</span>}
        <br />
        <input
          type="tex"
          {...register("cName", { required: true })}
          className="form-control w-75"
          placeholder="Company Name, Designation"
          style={{ padding: "26px 10px" }}
        />

        {errors.cName && <span>This field is required</span>}
        <br />
        <input
          type="tex"
          {...register("description", { required: true })}
          className="form-control w-75"
          placeholder="Description"
          style={{
            paddingTop: " 22px",
            paddingBottom: "70px",
            paddingRight: "15px",
          }}
        />

        {errors.description && <span>This field is required</span>}
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default ReviewDetails;
