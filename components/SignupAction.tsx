import Link from "next/link";

export default function SignupAction() {
	return (
		<div className="flex space-x-2">
			<p>New user?</p>
			<Link
				href="/sign-up"
				className="text-emerald-700">Open an account</Link>
		</div>
	);
}
