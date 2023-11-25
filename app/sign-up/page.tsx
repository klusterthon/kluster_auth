import Image from "next/image";
import LayoutHeader from "@/components/LayoutHeader";
import LoginAction from "@/components/LoginAction";

export default function SignupPage() {
	return (
		<section className="bg-background flex flex-1">
			<main className="flex flex-1 flex-col">
				<LayoutHeader>
					<LoginAction />
				</LayoutHeader>
				<section className="flex flex-1 flex-col items-center justify-center">
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