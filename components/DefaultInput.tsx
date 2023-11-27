import { forwardRef, useState } from "react";
import { Icon } from "@iconify/react";

import { Field, ErrorMessage } from "formik";

import { join } from "@/lib/string";

type DefaultInputProps = {
  icon?: string,
  name: string,
  label?: string,
  type?: "email" | "password" | "tel" | "text",
  placeholder?: string,
  className?: string,
  onIconClick?: () => void,
} & React.HTMLAttributes<HTMLInputElement>;

const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  function DefaultInput({ icon, label, className, name, onIconClick, ...props }, ref) {
    return (
      <div className={join("flex flex-col space-y-2", className)}>
        {label && <label>{label}</label>}
        <div>
          <div className="input flex items-center border rounded-md px-2">
            <Field
              ref={ref}
              name={name}
              className="flex-1 py-2"
              {...props} />
            {
              icon && <button onClick={onIconClick}>
                <Icon
                  icon={icon}
                  className="text-xl text-stone-500" />
              </button>
            }
          </div>
          <div className="capitalize-first text-sm text-red-500">
            <ErrorMessage name={name} />
          </div>
        </div>
      </div>
    );
  }
)

export function PasswordInput(props: Omit<DefaultInputProps, "type" | "icon">) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <DefaultInput
      {...props}
      type={passwordVisible ? "text" : "password"}
      icon={passwordVisible ? "mdi:eye-off" : "mdi:eye-outline"} 
      onIconClick={() => setPasswordVisible(!passwordVisible)}/>
  )
}

export default DefaultInput;