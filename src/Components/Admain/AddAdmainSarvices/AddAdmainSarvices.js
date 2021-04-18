import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddAdmainSarvices = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imgUrl, setImgUrl] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      image: imgUrl,
      email: data.email,
      price: data.price,
    };
    console.log(eventData);
    const url = `https://warm-beach-20852.herokuapp.com/addEvent`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  ////////
  const handelImgUpload = (e) => {
    console.log(e.target.files[0]);
    const imgData = new FormData();
    imgData.set("key", "fa57141f3cf543cf23e02eea346a0c1c");
    imgData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImgUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="admain-form">
        {/* <input defaultValue="test" {...register("example")} /> */}
        <input
          {...register("email", { required: true })}
          placeholder="Your Email Address"
          className="form-control"
        />

        {errors.email && <span>Email is required</span>}
        <br />

        <input
          {...register("name", { required: true })}
          placeholder="Product name"
          className="form-control"
        />

        {errors.name && <span>Name is required</span>}
        <br />

        <input
          {...register("price", { required: true })}
          placeholder="Product price"
          className="form-control"
        />

        {errors.price && <span>Price is required</span>}
        <br />
        <input
          type="file"
          {...register("image", { required: true })}
          onChange={handelImgUpload}
          className="form-control w-25"
        />
        {errors.image && <span>Price is required</span>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddAdmainSarvices;
