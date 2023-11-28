'use client'
import _ from "lodash";
import { useEffect, useState } from "react";
import { redirect ,useRouter } from 'next/navigation'

import Link from "next/link";
import { login } from "@/redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import routes from "@/constants/routes";

const Login = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const { isAuth } = useSelector((state) => state.user.isAuth ),
   [formData, updateFormData] = useState({
    email: "",
    password: "",
  }),
    [formErrors, updateFormErrors] = useState({});

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login())
    router.push(routes.HOME)

  };

  const displayError = (key) => {
    if (!_.isEmpty(formErrors[key]))
      return <div className="pt-3 text-red-700">{formErrors[key]}</div>;
  };

    useEffect(() => {
      if (isAuth) return redirect('/dashboard');
    });

  return (
    <div className="flex md:flex-row flex-col-reverse w-screen h-screen bgLinearBlue">
      <div className="md:w-2/3 flex flex-col items-center justify-center bgLogin md:pb-0 pb-16 md:pt-0 pt-10">
        <div className="flex flex-col font-bold items-center md:items-start text-xl md:w-96 w-80">
          <h1>
            Welcome back!
            <br /> Please login to your account.
          </h1>
          <h3 className="font-normal md:pt-8 pt-4 text-sm tracking-wider">
            Don &apos t have an account ?
            <Link href={routes.REGISTER}>
              
              <strong className="text-blue font-semibold">
                Sign up here !
              </strong>
            </Link>
          </h3>
        </div>
        <form className="flex flex-col md:mt-10 mt-5" onSubmit={handleSubmit}>
          <div className="mt-4">
            <div className="outlin relative">
              <label
                htmlFor="email"
                className="text-base bg-transparent font-normal py-2"
              >
                Email
              </label>
              <div className="outlin relative w-full">
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder=" "
                  className="block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium"
                />
                <label
                  htmlFor="email"
                  className="absolute top-0 text-base bg-transparent p-4 duration-300 origin-0 pointer-events-none"
                >
                  Email Address
                </label>
              </div>
              {displayError("email")}
            </div>
          </div>

          <div className="mt-4">
            <div className="outlin relative">
              <label
                htmlFor="password"
                className="text-base bg-transparent font-normal py-2"
              >
                Password
              </label>
              <div className="outlin relative w-full">
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder=" "
                  className="block p-3 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium"
                />
                <label
                  htmlFor="password"
                  className="absolute top-0 text-base bg-transparent p-4 duration-300 origin-0 pointer-events-none"
                >
                  Password
                </label>
              </div>
              {displayError("password")}
            </div>
          </div>



          {displayError("error")}

          <div className="w-full max-w-sm ml-auto mr-auto">
            <button
              className="w-full rounded-2xl btnLogin text-white py-3 tracking-wide mt-10 cursor-pointer"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="md:w-1/3 md:flex hidden flex-col  justify-center text-white px-16">
        <h1 className="text-5xl font-bold">Logo</h1>
        <p className="font-medium leading-7 text-sm pt-10">
          Hello! How can I assist you today?
        </p>
      </div>
      <div className="md:hidden flex items-center justify-center my-auto h-44">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="15" fill="white" />
        </svg>
        <h1 className="text-3xl font-bold text-white ml-3">Logo</h1>
      </div>
    </div>
  );
};
export default Login;
