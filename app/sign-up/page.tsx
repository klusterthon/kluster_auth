"use client";

import Link from "next/link";
import Image from "next/image";

import {Icon} from "@iconify/react";

import LayoutHeader from "@/components/LayoutHeader";
import LoginAction from "@/components/LoginAction";

export default function SignupPage() {
	return (
		<section className="bg-background flex flex-1">
			<main className="flex flex-1 flex-col gap-16">
				<LayoutHeader>
					<LoginAction />
				</LayoutHeader>
				<section className="flex flex-1 flex-col items-center">
					<section className="max-w-sm flex flex-col p-4 space-y-4">
						<header className="text-center">
							<h1 className="text-2xl font-extrabold">How would you like to use DoseMate?</h1>
							<p className="text-stone-500">Please select an option below</p>
						</header>
						<div className="grid grid-cols-3 place-items-center rounded-full bg-emerald-50 p-2">
							<div className="flex-1 rounded-full bg-white px-4 py-2 font-semibold text-emerald-900 shadow">Individual</div>
							<div className="flex-1">Practitioner</div>
							<div className="flex-1">CareGiver</div>
						</div>
					</section>
				</section>
				<div className="flex justify-end p-4 md:sticky md:bottom-0">
					<Link 
						href="/sign-up/steps/"
						className="w-40 flex items-center rounded-lg bg-emerald-700 px-4 py-3 text-white space-x-2">
						<span className="flex-1">Continue</span>
						<Icon 
							icon="mdi:arrow-right"
							className="text-xl" />
					</Link>
				</div>
			</main>
			<Image
				alt="Leaves Background"
				src="/background_leaves.svg"
				className="hidden w-1/3 object-cover lg:block lg:w-1/3"
				width={100}
				height={100} />
		</section>
	);
}