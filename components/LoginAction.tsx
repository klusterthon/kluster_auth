import Link from "next/link";

export default function LoginAction() {
	return (
		<div className="flex space-x-2">
			<p>Already have an account?</p>
			<Link
				href="/"
				className="text-emerald-700">Login</Link>
		</div>
	);
}
