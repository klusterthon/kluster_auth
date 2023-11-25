import { forwardRef } from "react";
import { Icon } from "@iconify/react";

import { join } from "@/lib/string";

type DefaultInputProps = {
  icon?: string,
  label?: string,
  placeholder?: string,
  className?: string,
} & React.HTMLAttributes<HTMLInputElement>;

export default forwardRef<HTMLInputElement, DefaultInputProps>(
  function DefaultInput({ icon, label, className, ...props }, ref) {
    return (
      <div className={join("flex flex-col space-y-2", className)}>
        {label && <label>{label}</label>}
        <div className="input flex items-center border rounded-md px-2">
          <input
            ref={ref}
            className="flex-1 py-2"
            {...props} />
          {icon && <Icon
            icon={icon}
            className="text-xl text-stone-500" />}
        </div>
      </div>
    );
  }
)
