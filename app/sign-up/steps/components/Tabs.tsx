import { Icon } from "@iconify/react";

import { GENDER } from "@/lib/api/models/patient.model";

import CountryStep from "./CountryStep";
import PasswordStep from "./PasswordStep";
import PersonalInformationStep from "./PersonalInformationStep";


export type TFormData = {
  country: any,
  full_name: string,
  email: string,
  phone: string,
  password: string,
  gender: keyof typeof GENDER,
}

export const getFormStepTabs = (
  formData: Partial<TFormData>,
  setFormData: (value: Partial<TFormData>) => void,
  setTabIndex: (index: number) => void
) => {

  const onSubmit = (index: number) => (values: Partial<TFormData>) => {
    setFormData(Object.assign(formData, values));
    setTabIndex(index + 1);
  }

  return [
    {
      icon: <Icon icon="mdi-flag" />,
      tab: <CountryStep
        values={formData}
        onSubmit={onSubmit(0)} />,
    },
    {
      icon: <Icon icon="mdi:information" />,
      tab: <PersonalInformationStep
        values={formData}
        onSubmit={onSubmit(1)} />,
    },
    {
      icon: <Icon icon="mdi-lock" />,
      tab: <PasswordStep
        values={formData}
        onSubmit={onSubmit(2)} />,
    },
  ];
}
