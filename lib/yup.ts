import { string, addMethod } from "yup";
import YupPassword from "yup-password";

/// manual support tree shake
export const yupPasswordExtension = {
  string,
  addMethod,
} as any;

YupPassword(yupPasswordExtension as any);
