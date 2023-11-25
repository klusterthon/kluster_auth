import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function PasswordReset() {
	return (
		<main className="bg-background fixed inset-0 flex">
			<div className="flex flex-1 flex-col items-center justify-center space-y-4">
				<div className="max-w-md flex flex-col space-y-6">
					<div className="flex flex-col items-center space-y-2">
						<div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-200">
							<Icon
								icon="mdi:email-outline"
								className="text-xl text-emerald-700" />
						</div>
						<h1 className="text-xl font-bold">Email on the way!</h1>
						<p className="text-center text-stone-500">
							We sent you password reset instructions. if it doesn&apos;t show up soon, check your spam folder.
							We sent it from the email address noreply@dosemate.com
						</p>
					</div>
					<Link
						href="/"
						className="flex justify-center rounded-lg bg-emerald-700 p-3 text-white">
						Go back to login
					</Link>
				</div>
			</div>
			<Image
				alt="Leaves Background"
				src="/background_leaves.svg"
				className="w-1/3 object-cover lg:w-1/3"
				width={100}
				height={100} />
		</main>
	);
}