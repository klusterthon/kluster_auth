"use client";

import Link from "next/link";

import { Icon } from "@iconify/react";

import { object, ref } from "yup";
import { Formik, Form } from "formik";

import { PasswordValidators } from "@/lib/validators";
import { yupPasswordExtension as yup } from "@/lib/yup";

import LayoutHeader from "@/components/LayoutHeader";
import SignupAction from "@/components/SignupAction";
import { PasswordInput } from "@/components/DefaultInput";

export default function PasswordReset() {
  return (
    <main className="bg-background flex flex-1 flex-col">
      <LayoutHeader>
        <SignupAction />
      </LayoutHeader>
      <section className="flex flex-1 flex-col items-center justify-center">
        <section className="flex flex-col px-4 space-y-4">
          <h1 className="text-2xl font-bold">Reset password</h1>
          <Formik
            validationSchema={
              object().shape({
                password: yup.string().password().required(),
                passwordConfirmation: yup.string()
                  .oneOf([ref('password'), null], 'Passwords must match').required("This is required")
              })
            }
            initialValues={{
              password: "",
              passwordConfirmation: "",
            }}
            onSubmit={(values) => {

            }}>
            {
              ({ values }) => (
                <form className="w-lg flex flex-col rounded-xl bg-white px-4 pb-8 pt-4 shadow space-y-8">
                  <div className="flex flex-col space-y-2">
                    <PasswordInput
                      name="password"
                      label="New password"
                      placeholder="Enter new password" />
                    <div className="flex flex-col space-y-4">
                      <PasswordInput
                        name="passwordConfirmation"
                        label="Password"
                        placeholder="Re-type password" />
                      <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        {
                          PasswordValidators.map(({ name, validator }, index) => (
                            <div
                              key={index}
                              className="flex space-x-2">
                              {
                                validator.isValidSync(values.password) ?
                                  <Icon
                                    icon="mdi:check-circle"
                                    className="text-xl text-emerald-700" /> :
                                  <Icon
                                    icon="mdi:circle-outline"
                                    className="text-xl text-emerald-700" />
                              }
                              <p>{name}</p>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="rounded-lg bg-emerald-700 p-3 text-white">
                    Reset password
                  </button>
                </form>
              )
            }
          </Formik>
          <Link
            href="/"
            className="text-center text-emerald-700">Go back to login</Link>
        </section>
      </section>
    </main>
  );
}
