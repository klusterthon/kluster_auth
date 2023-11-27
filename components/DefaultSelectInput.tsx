import { Icon } from "@iconify/react";

import { Listbox, ListboxButtonProps } from "@headlessui/react";

type DefaultListBoxInputProps<T> = {
  label: string,
  options: T[],
  selected: T,
  getDisplayName: (value: T) => string,
  getText: (value: T) => React.ReactNode,
  onSelect: (value: T) => void,
} & ListboxButtonProps<any>;

export default function DefaultSelectInput<T>({ label, selected, options, getText, getDisplayName, onSelect, onChange, ...props }: DefaultListBoxInputProps<T>) {
  return (
    <div className="flex flex-col space-y-2">
      <label>{label}</label>
      <Listbox
        value={selected}
        onChange={onSelect}>
        <div className="relative">
          <div className="flex border rounded-md px-2">
            <Listbox.Button
              as="div"
              className="item-center flex flex-1 p-2"
              {...props} >
              <span className="block flex-1 truncate capitalize">{getDisplayName(selected)}</span>
              <button 
                type="button"
                className="pointer-events-none">
                <Icon
                  icon="mdi:chevron-down"
                  className="text-xl text-stone-700" />
              </button>
            </Listbox.Button>
          </div>
          <Listbox.Options
            className="absolute max-h-60 w-full overflow-y-scroll border-x border-b rounded-b-md bg-white py-4 shadow focus:outline-none">
            {
              options.map((option: any) => (
                <Listbox.Option
                  key={option}
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
                </Listbox.Option>
              ))
            }
          </Listbox.Options>
        </div>
      </Listbox >
    </div >
  );
}