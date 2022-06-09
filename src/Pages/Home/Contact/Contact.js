import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="my-12" id="contact">
      <div className="flex justify-center items-center">
        <div className="card w-80 lg:w-1/2 bg-base-100 shadow-xl">
          <div className="card-body p-2">
            <h2 className="text-4xl text-center font-bold text-primary">
              Contact
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* name here  */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered input-primary w-full"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div>

              {/* email here  */}
              <div className=" my-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="input input-bordered input-primary w-full "
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Enter a valid email</p>
                )}
              </div>

              {/* subject here  */}
              <div>
                <input
                  type="text"
                  placeholder="Email Subject"
                  className="input input-bordered input-primary w-full"
                  {...register("subject", { required: true })}
                />
                {errors.subject?.type === "required" && (
                  <p className="text-red-500">Subject is required</p>
                )}
              </div>

              {/* your message  */}
              <div className="my-3">
                <textarea
                  placeholder="Your Message"
                  id=""
                  cols="30"
                  rows="7"
                  className="input input-bordered h-full input-primary w-full "
                  {...register("message", { required: true })}
                />
                {errors.message?.type === "required" && (
                  <p className="text-red-500">Message is required</p>
                )}
              </div>
              <input
                className="btn w-full text-white"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
