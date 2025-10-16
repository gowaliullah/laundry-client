"use client";

import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FieldValues } from "react-hook-form";

const LoginPage = () => {
    const handleLogin = async (values: FieldValues) => {
    console.log(values);
    
  };
  return (
    <>
       <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-4">Login Here</h2>

        <Form onSubmit={handleLogin}>
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="Email/Phone"
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
            Login
          </button>

   <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-3"
          > <FcGoogle className="size-5" />

            Login With Google
          </button>

          <div className="text-center mt-4 text-sm text-gray-600">
            <span>Don't have any account?</span>
            <Link
              href="/register"
              className="text-blue-600 hover:underline ml-1"
            >
              Registration
            </Link>
          </div>
        </Form>
      </div>
    </div>
    </>
  );
};

export default LoginPage;