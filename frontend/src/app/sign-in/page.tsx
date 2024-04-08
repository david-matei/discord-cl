"use client";
import React, { useEffect, useState } from "react";
import Input, { InputType } from "@/components/InputV1";
import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "@/utils/supabase";
import { AuthError } from "@supabase/supabase-js";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorField from "@/components/ErrorField";
import { Button } from "@/components/Button";
import AuthFormHeader from "@/components/AuthFormHeader";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FormValues = {
  Email: string;
  Password: string;
};

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "all" });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async ({ Email, Password }) => {
    try {
      setLoading(true);
      const { data, error: fault } = await supabase.auth.signInWithPassword({
        email: Email,
        password: Password,
      });
      console.log(fault);
      if (fault) {
        setError(fault.message);
        setSuccess(false);
      } else {
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      router.push("/");
    }
  }, [success]);

  return (
    <>
      <AuthFormHeader title="Sign in to your account" />
      <Link
        href="/sign-up"
        className="font-medium text-sm text-theme-primary hover:text-theme-secondary max-w-fit"
      >
        Don&lsquo;t have an account? Sign Up!
      </Link>
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
        {error && <ErrorField mainError={error} />}
      </form>
    </>
  );
};

export default Page;
