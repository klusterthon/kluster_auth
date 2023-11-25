"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

import DefaultInput from "@/components/DefaultInput";
import LayoutHeader from "@/components/LayoutHeader";
import SignupAction from "@/components/SignupAction";

export default function PasswordReset() {
  return (
    <main className="bg-background flex flex-1 flex-col">
      <LayoutHeader>
        <SignupAction />
      </LayoutHeader>
      <section className="flex flex-1 flex-col items-center justify-center">
        <section className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">Reset password</h1>
          <form className="w-lg flex flex-col rounded-xl bg-white px-4 pb-8 pt-4 shadow space-y-8">
            <div className="flex flex-col space-y-2">
              <DefaultInput
                label="New password"
                placeholder="Enter new password"
                icon="mdi:eye-outline" />
              <div className="flex flex-col space-y-4">
                <DefaultInput
                  label="Password"
                  placeholder="Re-type password"
                  icon="mdi:eye-outline" />
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="flex space-x-2">
                    <Icon
                      icon="mdi:circle-outline"
                      className="text-xl text-emerald-700" />
                    <p>Lower character</p>
                  </div>
                  <div className="flex space-x-2">
                    <Icon
                      icon="mdi:circle-outline"
                      className="text-xl text-emerald-700" />
                    <p>Special character</p>
                  </div>
                  <div className="flex space-x-2">
                    <Icon
                      icon="mdi:circle-outline"
                      className="text-xl text-emerald-700" />
                    <p>Uppercase character</p>
                  </div>
                  <div className="flex space-x-2">
                    <Icon
                      icon="mdi:circle-outline"
                      className="text-xl text-emerald-700" />
                    <p>Minimum of 8 character</p>
                  </div>
                </div>
              </div>
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
    </main>
  );
}
