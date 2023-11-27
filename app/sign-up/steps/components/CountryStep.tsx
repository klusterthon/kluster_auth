import { useState } from "react";

import { object, string } from "yup";
import { Form, Formik, FormikValues } from "formik";

import type { ICountry } from 'countries-list';
import { countries as countryMap, getEmojiFlag } from 'countries-list'

import DefaultFilterInput from "@/components/DefaultFilterInput";

import type { TFormData } from "./Tabs";

type Country = (ICountry & { code: string });

type CountryStepTabProps = {
  values: Partial<TFormData>,
  onSubmit: (values: { country: ICountry | undefined }) => void,
}

const getCountryList = () => {
  const results: Country[] = [];

  for (const code in countryMap) {
    results.push({
      code,
      ...(countryMap as any)[code],
    } as Country)
  }

  return results;
}

const countryList = getCountryList();

export default function CountryStepTab({ values, onSubmit }: CountryStepTabProps) {
  const [countries, setCountries] = useState<ICountry[]>(Object.values(countryList));

  return (
    <Formik
      validationSchema={
        object().shape({
          country: object().shape({
            name: string(),
            code: string(),
          }),
        })
      }
      initialValues={{
        country: values.country as ICountry | undefined,
      }}
      onSubmit={onSubmit}>
      {
        ({ values, setFieldValue }) => (
          <Form className="flex flex-col border rounded-xl bg-white px-4 py-8 shadow space-y-8">
            <DefaultFilterInput
              autoComplete="off"
              label="Select country"
              placeholder="Country of resident"
              options={countries}
              selected={values.country}
              onSelect={(country) => setFieldValue("country", country)}
              getDisplayName={country => country?.name}
              onChange={(event) => {
                const value = (event.currentTarget as HTMLInputElement).value;

                if (value.trim().length === 0) return setCountries(countryList);

                setCountries(() => {
                  return countryList.filter(country => country.name.toLowerCase().includes(value.toLowerCase()))
                })
              }}
              getText={(country) => (
                <>
                  <span>{getEmojiFlag(country.code)}</span>
                  <span className="flex-1">{country.name}</span>
                </>
              )} />
            <button
              type="submit"
              className="rounded-lg bg-emerald-700 p-3 text-white">Next</button>
          </Form>
        )
      }
    </Formik>
  );
}
