"use client";
import React, { useState } from "react";
import Input, { InputType } from "@/components/InputV1";
import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "@/utils/supabase";
import { AuthError } from "@supabase/supabase-js";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorField from "@/components/ErrorField";
import { Button } from "@/components/Button";
import AuthFormHeader from "@/components/AuthFormHeader";

type FormValues = {
  Email: string;
  Password: string;
};

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "all" });

  const onSubmit: SubmitHandler<FormValues> = async ({ Email, Password }) => {
    try {
      setLoading(true);
      const { data, error: fault } = await supabase.auth.signUp({
        email: Email,
        password: Password,
      });
      setSuccess(true);
      setError(fault);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthFormHeader title="Sign in to your account" />
      <form
        className="flex flex-col gap-4 mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          register={register("Email", {
            required: "Email Address is required",
            pattern: {
              value:
                /^(?=.{1,256})(?=.{1,64}@.{1,255}$)(?=.{1,64}\.[a-zA-Z]{2,}$)[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
          required={true}
          type={InputType.EMAIL}
          label="Email"
          errors={errors}
        />
        <Input
          register={register("Password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
            maxLength: {
              value: 20,
              message: "Password must have max 20 characters",
            },
          })}
          required={true}
          type={InputType.PASSWORD}
          label="Password"
          errors={errors}
        />
        {!loading && !success && (
          <Button
            type="submit"
            className="mt-3 w-full"
            text="Sign In"
            isDisabled={!!errors.Email || !!errors.Password}
          />
        )}
        {(loading || success) && <LoadingSpinner className="mt-3" />}
        {error && <ErrorField mainError={error as unknown as string} />}
      </form>
    </>
  );
};

export default Page;
