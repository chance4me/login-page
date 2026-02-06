export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-[#151721] from-black via-slate-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-3xl">
        <Header />
        <Stepper />
        <FormCard />
      </div>
    </div>
  )
}

function Header() {
  return (
    <div className="text-center mb-8">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
        📈
      </div>

      <h1 className="text-2xl font-semibold text-white">
        Welcome to SignalPro
      </h1>

      <p className="text-sm text-slate-400">
        Let’s get your trader account set up
      </p>
    </div>
  )
}

function Stepper() {
  const steps = ["Identity", "Broker", "Performance", "Strategy"]

  return (
    <div className="mb-6 flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium
              ${index === 0 ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"}`}
          >
            {index + 1}
          </div>
          <span
            className={`text-sm ${
              index === 0 ? "text-white" : "text-slate-400"
            }`}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  )
}

function FormCard() {
  return (
    <div className="rounded-2xl bg-[#202441] from-slate-900/80 to-slate-800/60 p-6 shadow-2xl backdrop-blur">
      <FormHeader />
      <FormFields />
      <InfoBanner />
      <ContinueButton />
    </div>
  )
}

function FormHeader() {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-white">
        Identity Verification
      </h2>
      <p className="text-sm text-slate-400">
        We need to verify your identity for security and compliance
      </p>
    </div>
  )
}

function FormFields() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Input label="First Name" placeholder="John" />
      <Input label="Last Name" placeholder="Doe" />
      <Input label="Email Address" placeholder="john@example.com" />
      <Input label="Country of Residence" placeholder="United States" />

      <FileBox label="Government ID" />
      <FileBox label="Selfie with ID" />
    </div>
  )
}

function Input({ label, placeholder }: any) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-slate-400">{label}</label>
      <input
        placeholder={placeholder}
        className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  )
}

function FileBox({ label }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-slate-400">{label}</label>
      <div className="flex h-28 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-700 bg-slate-900 text-slate-400 hover:border-blue-600">
        ⬆️
        <span className="text-xs">Upload</span>
      </div>
    </div>
  )
}

function InfoBanner() {
  return (
    <div className="mt-6 flex items-center gap-2 rounded-lg bg-blue-600/10 px-4 py-3 text-xs text-blue-400">
      🔒 Your information is encrypted and securely stored.  
      We comply with KYC and AML regulations.
    </div>
  )
}

function ContinueButton() {
  return (
    <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-700 transition">
      Continue →
    </button>
  )
}
