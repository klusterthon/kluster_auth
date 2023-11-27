import { forwardRef, useState } from "react";
import { Icon } from "@iconify/react";

import { Combobox } from "@headlessui/react";

type DefaultSelectInputProps<T> = {
  autoComplete: "off" | "on",
  label: string,
  options: T[],
  selected: T,
  getDisplayName: (value: T) => string,
  getText: (value: T) => React.ReactNode,
  onSelect: (value: T) => void,
} & React.HTMLAttributes<HTMLInputElement>;

export default forwardRef<HTMLInputElement, DefaultSelectInputProps<any>>(function DefaultSelectInput({ label, selected, options, getText, getDisplayName, onSelect, onChange, ...props }, ref) {
  const [hasQuery, setHasQuery] = useState(false);

  return (
    <div className="flex flex-col space-y-2">
      <label>{label}</label>
      <Combobox
        value={selected}
        onChange={onSelect}>
        <div className="relative">
          <div className="flex border rounded-md px-2">
            <Combobox.Input
              className="flex-1 p-2"
              onChange={(event) => {
                setHasQuery(event.target.value.trim().length > 0);
                if (onChange)
                  onChange(event);
              }}
              displayValue={getDisplayName}
              {...props} />
            <Combobox.Button>
              <Icon
                icon="mdi:chevron-down"
                className="text-xl text-stone-700" />
            </Combobox.Button>
          </div>
          <Combobox.Options
            className="absolute max-h-60 w-full overflow-y-scroll border-x border-b rounded-b-md bg-white py-4 shadow focus:outline-none">
            {
              options.length > 0 ? options.map(option => (
                <Combobox.Option
                  key={option.name}
                  value={option}
                  className={({ selected, active }) => 'flex space-x-2 p-2 cursor-pointer '.concat(active ? 'bg-emerald-700 text-white font-medium' : selected ? 'text-emerald-700' : '')}>
                  {
                    (({ selected }) => (
                      <>
                        {getText(option)}
                        {selected && <Icon icon="mdi:check" />}
                      </>
                    ))
                  }
                </Combobox.Option>
              )) :
                <div className="m-auto w-full p-4 text-center">
                  <p>Nothing found</p>
                </div>
            }
          </Combobox.Options>
        </div>
      </Combobox >
    </div >
  );
});
