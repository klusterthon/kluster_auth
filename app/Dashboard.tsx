"use client";
import Link from "next/link";
import DefaultInput from "@/components/DefaultInput";
import LayoutHeader from "@/components/LayoutHeader";
import SignupAction from "@/components/SignupAction";
import PasswordReset from "@/components/PasswordReset";


export default function Dashboard() {
return (
<main className="bg-background flex flex-1 flex-col">
<LayoutHeader>
<SignupAction />
</LayoutHeader>
<section className="flex flex-1 flex-col items-center justify-center">
<section className="flex flex-col space-y-4">
<h1 className="text-2xl font-bold">Welcome Back!</h1>
<form className="w-md flex flex-col rounded bg-white p-4 space-y-8">
<div className="flex flex-col space-y-2">
<DefaultInput
label="Email"
placeholder="Enter email address"
icon="mdi:email-outline" />
<DefaultInput
label="Password"
placeholder="Enter password"
icon="mdi:eye-outline" />
<Link
className="text-emerald-700"
href="/forgotten-password">Forgotten password?</Link>
</div>
<button
type="submit"
className="rounded-lg bg-emerald-700 p-3 text-white">
Login
</button>
</form>
</section>
</section>
<PasswordReset />
</main>
);
}
