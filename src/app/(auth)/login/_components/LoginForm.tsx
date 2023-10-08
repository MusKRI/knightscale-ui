"use client";

// **** Library Imports ****
import { z } from "zod";
import { useForm, SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// **** Local Imports *****
import TextInput from "@/core/components/ui/text-input/TextInput";
import Button from "@/core/components/ui/button/Button";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginFormValues = z.infer<typeof FormSchema>;

const LoginForm = () => {
  const router = useRouter();
  const [isLogging, setIsLogging] = useState(false);

  const { handleSubmit, register } = useForm<LoginFormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLogging(true);
    const loading = toast.loading("Checking...");

    const signInData = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!signInData?.ok) {
      setIsLogging(false);
      toast.dismiss(loading);
      return toast.error("Invalid Credentials!");
    }

    setIsLogging(false);

    toast.dismiss(loading);
    toast.success("Logged in!");
    router.push("/browse");
  };

  const onError: SubmitErrorHandler<LoginFormValues> = async (error) => {
    console.log(error);
    if (error.email?.type === "invalid_string") {
      return toast.error("enter valid email!");
    }

    if (error.password?.type === "too_small") {
      return toast.error("password must be at least 6 characters!");
    }
  };

  return (
    <div className="max-w-md w-full flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Log in</h1>
        <p className="flex items-center gap-1 font-normal text-sm">
          <span>New to Knightscale?</span>
          <span className="text-ks-brand cursor-pointer hover:underline transition underline-offset-2">
            Contact
          </span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col gap-6">
          <div className="relative flex flex-col gap-1">
            <label htmlFor="email" className="">
              Email
            </label>
            <TextInput
              id="email"
              placeholder="your@email.com"
              variant="email"
              type="email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="relative flex flex-col gap-1">
            <label htmlFor="password" className="">
              Password
            </label>
            <TextInput
              id="password"
              placeholder="Password"
              variant="password"
              type="password"
              {...register("password", { required: true })}
            />
          </div>

          <Button
            variant="primary"
            className="w-full mt-3"
            type="submit"
            disabled={isLogging}
          >
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
