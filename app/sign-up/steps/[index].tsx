import LayoutHeader from "@/components/LayoutHeader";
import LoginAction from "@/components/LoginAction";

export default function SignupPage() {
  return (
    <main>
      <LayoutHeader>
        <LoginAction />
      </LayoutHeader>
      <section>
        <section>
          <header>
            <h1 className="text-2xl font-bold">How would you like to use DoseMate?</h1>
            <p className="text-stone-500">Please select an option below</p>
          </header>
          <div className="bg-stone-200">
            <div className="rounded-full bg-white p-2">As an individual</div>
            <div>As an practitioner</div>
            <div>As a care giver</div>
          </div>
        </section>
      </section>
    </main>
  );
}