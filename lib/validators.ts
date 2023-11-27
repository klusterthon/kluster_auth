import { yupPasswordExtension as yup } from "./yup";

export const PasswordValidators = [
  {
    name: "Lower character",
    validator: yup.string().minLowercase(1),
  },
  {
    name: "Special character",
    validator: yup.string().minSymbols(1),
  },
  {
    name: "Uppercase character",
    validator: yup.string().minUppercase(1),
  },
  {
    name: "Minium of 8 character",
    validator: yup.string().min(8),
  },
];
