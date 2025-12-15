import Link from "next/link";
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Leave Management System
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            A simple and efficient platform to manage student leave requests,
            approvals, and records — all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/signin"
              className="border-2 border-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      {/* WHAT IS THIS WEBSITE */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            What Does This Website Do?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Leave Management System digitizes the entire leave process,
            helping organizations eliminate paperwork, reduce errors, and
            improve productivity.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl  mx-auto">
          <FeatureItem text="Students can apply for leave online anytime" />
          <FeatureItem text="Teachers can approve or reject requests easily" />
          <FeatureItem text="Centralized leave history and records" />
        </div>
      </section>
      {/* WHO IS THIS FOR */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
            Who Is This Platform For?
          </h2>

          <div className="flex flex-wrap justify-center gap-6 w-100 mx-auto">
            <RoleCard
              title="Students"
              description="Apply for leave and check approval status with just a few clicks."
            />
            <RoleCard
              title="Teachers"
              description="Review, approve, or reject leave requests with full visibility and control."
            />
          </div>
        </div>
      </section>
      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Key Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for efficient leave management
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          <FeatureCard title="Easy Leave Application" />
          <FeatureCard title="Quick Approval Workflow" />
          <FeatureCard title="Leave History & Reports" />
          <FeatureCard title="Secure Authentication" />
          <FeatureCard title="User-Friendly Interface" />
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
            <Step number="1" text="Login to your account" />
            <div className="hidden md:block flex items-center justify-center">
              <div className="w-24 h-0.5 bg-gray-300"></div>
            </div>
            <Step number="2" text="Apply for leave with details" />
            <div className="hidden md:block flex items-center justify-center">
              <div className="w-24 h-0.5 bg-gray-300"></div>
            </div>
            <Step number="3" text="Staff reviews and approves" />
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="text-center py-24 bg-black text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Managing Leaves Smarter
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Save time, reduce errors, and simplify leave management today.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-black px-10 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
/* ---------------- COMPONENTS ---------------- */
function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <span className="text-black font-bold text-xl mt-0.5">✔</span>
      <p className="text-gray-700 text-lg">{text}</p>
    </div>
  );
}
function RoleCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
function FeatureCard({ title }: { title: string }) {
  return (
    <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <h3 className="font-bold text-lg text-black">{title}</h3>
    </div>
  );
}
function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-black text-white font-bold text-2xl">
        {number}
      </div>
      <p className="text-gray-700 text-lg font-medium">{text}</p>
    </div>
  );
}