"use client";


import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FieldValues } from "react-hook-form";

const RegisterPage = () => {

      const handleRegister = async (values: FieldValues) => {
        console.log(values);
        
  };

  return (
    <>
       <div className="min-h-screen flex items-center justify-center bg-gray-700 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-4">
          Create an Account
        </h2>

        <Form onSubmit={handleRegister}>
          <Input
            name="name"
            label="Name"
            placeholder="John"
            rules={{ required: "Name is required" }}
          />
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            rules={{ required: "Email is required" }}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            rules={{ required: "Password is required" }}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-3"
          > <FcGoogle className="size-5" />

            SignUp With Google
          </button>

          <div className="text-center mt-4 text-sm text-gray-600">
            <span>Already have an account?</span>
            <Link href="/login" className="text-blue-600 hover:underline ml-1">
              Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
    </>
  );
};

export default RegisterPage;