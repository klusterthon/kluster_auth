"use client";
import { useRouter } from 'next/navigation';
import { useRef, useState, Fragment } from "react";

import { Icon } from "@iconify/react";
import { Tab } from "@headlessui/react";


import StepProgress from "@/components/StepProgress";
import LayoutHeader from "@/components/LayoutHeader";
import LoginAction from "@/components/LoginAction";

import { TFormData, getFormStepTabs } from "./components/Tabs";

export default function SignupPage() {
  const router = useRouter();

  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [formData, setFormData] = useState<Partial<TFormData>>({});

  const stepTabs = useRef(getFormStepTabs(formData, setFormData, setCurrentTabIndex));

  return (
    <div className="flex flex-1 overflow-scroll">
      <div className="bg-background flex flex-1 flex-col overflow-scroll">
        <LayoutHeader>
          <LoginAction />
        </LayoutHeader>
        <main className="flex flex-1 flex-col items-center justify-center py-8">
          <div className="w-[88%] flex flex-col md:w-md space-y-8">
            <header className="flex">
              <button 
                className="flex items-center p-2 space-x-2"
                onClick={router.back}>
                <Icon icon="mdi:arrow-left text-xl" />
                <p className="font-medium">Go back</p>
              </button>
            </header>
            <Tab.Group
              selectedIndex={currentTabIndex}
              onChange={setCurrentTabIndex}>
              <Tab.List className="flex items-center border rounded-lg bg-white p-4">
                {
                  stepTabs.current.map((tab, index) => (
                    <Fragment key={index}>
                      <Tab disabled={index > currentTabIndex}>
                        <div className={"rounded-full p-1 ".concat(index < currentTabIndex ? "bg-emerald-700 text-white" : "bg-stone-200 text-stone-500")}>
                          {
                            index < currentTabIndex ?
                              <Icon icon="mdi-check" /> :
                              tab.icon
                          }
                        </div>
                      </Tab>
                      {
                        index < stepTabs.current.length - 1 &&
                        <div className="flex-1 bg-stone-200 p-0.4" />
                      }
                    </Fragment>
                  ))
                }
              </Tab.List>
              <Tab.Panels>
                {
                  stepTabs.current.map((tab, index) => (
                    <Tab.Panel key={index}>{tab.tab}</Tab.Panel>
                  ))
                }
              </Tab.Panels>
            </Tab.Group>
          </div>
        </main>
      </div>
      <div className="hidden w-4/11 flex-col items-center justify-center bg-emerald-700 text-white md:flex">
        <header></header>
        <div className="flex-1"></div>
        <div className="flex flex-col px-4 pb-16 space-y-8">
          <div>
            <h1 className="text-2xl font-semibold">Adherence is need for positive</h1>
            <p className="text-emerald-100">Learn how we help patients with terminal need</p>
          </div>
          <StepProgress
            progress={1}
            maxValue={3} />
        </div>
      </div>
    </div>
  );
}
