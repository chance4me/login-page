import { User, Link, TrendingUp, FileText, Upload, Shield, ChevronRight } from "lucide-react"

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-[#151721] pt-5 pb-5 from-black via-slate-900 to-black flex items-center justify-center px-4">
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
      <div className="mx-auto mb-4 p-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
        <TrendingUp className="h-5 w-5 text-white" />
      </div>

      <h1 className="text-2xl font-semibold text-white">
        Welcome to <span className="text-blue-600">SignalPro</span>
      </h1>

      <p className="text-sm text-slate-400">
        Let’s get your trader account set up
      </p>
    </div>
  )
}



function Stepper() {
  const steps = [
    { label: "Identity", icon: User },
    { label: "Broker", icon: Link },
    { label: "Performance", icon: TrendingUp },
    { label: "Strategy", icon: FileText },
  ]
  return (
    <div className="mb-6 flex items-center justify-between">
      {steps.map((step, index) => {
        const Icon = step.icon
        const isActive = index === 0
        const isLast = index === steps.length - 1

        return (
          <div
            key={step.label}
            className="relative flex flex-1 flex-col items-center"
          >
            {/* Circle */}
            <div
              className={`z-10 flex h-9 w-9 items-center justify-center rounded-full
                ${isActive ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"}`}
            >
              <Icon className="h-4 w-4" />
            </div>

            {/* Label */}
            <span
              className={`mt-1 text-xs ${
                isActive ? "text-white" : "text-slate-400"
              }`}
            >
              {step.label}
            </span>

            {/* Connector */}
            {!isLast && (
              <div
                className="absolute top-[18px] left-[67%] h-[2px] w-[70%] bg-blue-500/10"
              />
            )}
          </div>
        )
      })}
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
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input label="First Name*" placeholder="John" />
        <Input label="Last Name*" placeholder="Doe" />
      </div>
      <div className="mt-3">
        <Input label="Email Address*" placeholder="john@example.com" />
      </div>
      <div className="mt-3">
        <Input label="Country of Residence*" placeholder="United States" />
      </div>
      <div className="grid mt-3 grid-cols-1 gap-4 md:grid-cols-2">
        <FileBox label="Government ID*" file_label="Upload ID"/>
        <FileBox label="Selfie with ID*" file_label="Upload selfie"/>
      </div>
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

function FileBox({ label, file_label }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-slate-400">{label}</label>
      <div className="flex h-28 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-700 bg-slate-900 text-slate-400 hover:border-blue-600">
        <Upload />
        <span className="text-xs">{file_label}</span>
      </div>
    </div>
  )
}

function InfoBanner() {
  return (
    <div className="mt-6 flex items-center gap-2 rounded-lg bg-blue-600/10 px-4 py-3 text-xs text-blue-400">
      <Shield className="h-4 w-4" /> Your information is encrypted and securely stored.  
      We comply with KYC and AML regulations.
    </div>
  )
}


function ContinueButton() {
  return (
    <button className="mt-6 flex w-full items-center justify-center gap-1 rounded-lg bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
      Continue <ChevronRight className="h-4 w-4" />
    </button>
  )
}