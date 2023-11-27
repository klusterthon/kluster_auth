"use client";

import { useState } from "react";

import { phone } from "phone";
import { object, string } from "yup";

import { Form, Formik } from "formik";

import { GENDER } from "@/lib/api/models/patient.model";

import DefaultInput from "@/components/DefaultInput";
import DefaultSelectInput from "@/components/DefaultSelectInput";

import type { TFormData } from "./Tabs";

type TValues = {
  full_name: string,
  email: string,
  phone: string,
  gender: keyof typeof GENDER,
}

type PersonalInformationStepProps = {
  values: Partial<TFormData>,
  onSubmit: (values: TValues) => void,
}

export default function PersonalInformationStep({ values, onSubmit }: PersonalInformationStepProps) {
  return (
    <Formik
      initialValues={{
        full_name: values.full_name ?? "",
        email: values.email ?? "",
        gender: values.gender ?? "MALE",
        phone: values.phone ?? "",
      }}
      validationSchema={object().shape({
        full_name: string().label("Full name").trim().required(),
        email: string().email().required(),
        phone: string().test(
          "phone validation",
          "Enter a valid phone number",
          (value) => phone(value!).isValid).required(),
      })}
      onSubmit={onSubmit}>
      {
        ({ values, setFieldValue }) => (
          <Form className="flex flex-col border rounded-xl bg-white px-4 py-8 shadow space-y-8">
            <div className="flex flex-col space-y-4">
              <DefaultInput
                name="full_name"
                label="Full legal name"
                placeholder="Enter your legal name"
                icon="mdi:account-outline" />
              <DefaultInput
                name="email"
                type="email"
                label="Email address"
                placeholder="Enter your email address"
                icon="mdi:email-outline" />
              <DefaultSelectInput
                label="Gender"
                selected={values.gender}
                onSelect={(gender) => setFieldValue("gender", gender.toUpperCase())}
                options={Object.values(GENDER)}
                getDisplayName={gender => gender.toLowerCase()}
                getText={gender => (<span className="flex-1 capitalize">{gender}</span>)} />
              <DefaultInput
                name="phone"
                type="tel"
                label="Phone"
                placeholder="Enter phone number"
                icon="mdi:phone-outline" />
            </div>
            <button className="rounded-lg bg-emerald-700 p-3 text-white">Next</button>
          </Form>
        )
      }
    </Formik>
  );
}
