"use client";

import { object, ref } from "yup";
import { Formik, Form } from "formik";

import { Icon } from "@iconify/react";

import { PasswordValidators } from "@/lib/validators";
import { yupPasswordExtension as yup } from "@/lib/yup";

import DefaultInput, { PasswordInput } from "@/components/DefaultInput";

import type { TFormData } from "./Tabs";

type PasswordStepProps = {
  values: Partial<TFormData>,
  onSubmit: (values: { password: string }) => void,
}

export default function PasswordStep({ values, onSubmit }: PasswordStepProps) {

  return (
    <Formik
      validationSchema={
        object().shape({
          password: yup.string().password().required(),
          passwordConfirmation: yup.string()
            .oneOf([ref('password'), null], 'Passwords must match').required("This is required")
        })
      }
      initialValues={{
        password: values.password ?? "",
        passwordConfirmation: values.password ?? "",
      }}
      onSubmit={onSubmit}>
      {({ values }) => (
        <Form className="flex flex-col border rounded-xl bg-white px-4 py-8 shadow space-y-8">
          <div className="flex flex-col space-y-2">
            <PasswordInput
              name="password"
              label="New password"
              placeholder="Enter new password" />
            <div className="flex flex-col space-y-4">
              <PasswordInput
                name="passwordConfirmation"
                label="Confirm Password"
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
            className="rounded-lg bg-emerald-700 p-3 text-white">Create account</button>
        </Form>
      )}
    </Formik>
  );
}
