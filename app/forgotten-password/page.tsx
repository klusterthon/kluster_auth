"use client";

import Link from "next/link";

import DefaultInput from "@/components/DefaultInput";
import LayoutHeader from "@/components/LayoutHeader";
import SignupAction from "@/components/SignupAction";

export default function ForgottenPassword() {
  return (
    <main className="bg-background flex flex-1 flex-col">
      <LayoutHeader>
        <SignupAction />
      </LayoutHeader>
      <section className="flex flex-1 flex-col items-center justify-center">
        <section className="flex flex-col space-y-6">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <form className="w-88 flex flex-col rounded-xl bg-white px-4 pb-8 pt-4 shadow md:w-md space-y-8">
            <p>Enter your email address and we&apos;ll send you a link to reset your password.</p>
            <div className="flex flex-col space-y-2">
              <DefaultInput
                label="Email"
                placeholder="Enter email address"
                icon="mdi:email-outline" />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-emerald-700 p-3 text-white">
              Reset password
            </button>
          </form>
          <Link
            href="/"
            className="text-center text-emerald-700">Go back to login</Link>
        </section>
      </section>
    </main >
  );
}
