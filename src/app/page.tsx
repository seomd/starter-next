export default function Home() {
  const seomdApiUrl = process.env.SEOMD_API_URL ?? "";
  const seomdApiKey = process.env.SEOMD_API_KEY ?? "";
  const seomdPaymentToken = process.env.SEOMD_PAYMENT_TOKEN ?? "";

  const isConfigured = Boolean(seomdApiKey || seomdPaymentToken);
  const readinessLabel = isConfigured ? "Connected" : "Setup required";
  const readinessCopy = isConfigured
    ? "Your starter is wired up. Finish the content config and validate locally."
    : "Add your credentials, redeploy, and then tune SEO.md for your domain.";

  const envItems = [
    {
      label: "SEOMD_API_KEY",
      value: seomdApiKey ? "Set" : "Missing",
      tone: seomdApiKey ? "text-emerald-600" : "text-zinc-500",
    },
    {
      label: "SEOMD_PAYMENT_TOKEN",
      value: seomdPaymentToken ? "Set" : "Missing",
      tone: seomdPaymentToken ? "text-emerald-600" : "text-zinc-500",
    },
    {
      label: "SEOMD_API_URL",
      value: seomdApiUrl ? "Custom" : "Default",
      tone: seomdApiUrl ? "text-sky-600" : "text-zinc-500",
    },
  ];

  const nextSteps = isConfigured
    ? [
        "Edit SEO.md with your domain, intent queries, and brand voice.",
        "Run npm i -g seomd-cli and then seomd validate before shipping.",
        "Deploy with confidence once your content and env setup look correct.",
      ]
    : [
        "Add SEOMD_API_KEY or SEOMD_PAYMENT_TOKEN in your deployment dashboard.",
        "Trigger a fresh deploy so the starter can read the new environment values.",
        "Update SEO.md for your brand and validate locally before launch.",
      ];

  return (
    <div className="relative flex min-h-screen flex-1 items-center justify-center overflow-hidden bg-[#fcfcfd] px-6 py-10 text-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.10),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#f6f7fb_100%)]" />
      <div className="pointer-events-none absolute left-[-10%] top-[-12%] h-[32rem] w-[32rem] rounded-full bg-indigo-200/45 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-18%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-100/60 blur-3xl" />

      <main className="relative z-10 w-full max-w-xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/80 shadow-[0_40px_120px_-32px_rgba(15,23,42,0.18)] backdrop-blur-xl">
          <div className="relative overflow-hidden border-b border-zinc-200/80 bg-[linear-gradient(135deg,_#fafafa_0%,_#f2f4f8_48%,_#fcfcff_100%)] px-8 py-7">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,_transparent_0%,_rgba(255,255,255,0.9)_42%,_rgba(255,255,255,0.9)_58%,_transparent_100%)] opacity-80" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">
                    Activation Panel
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                    {readinessLabel}
                  </h2>
                </div>
                <span
                  className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                    isConfigured
                      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                      : "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
                  }`}
                >
                  {isConfigured ? "Ready to validate" : "Needs credentials"}
                </span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-600">
                {readinessCopy}
              </p>
            </div>
          </div>

          <div className="space-y-8 px-8 py-7">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-zinc-900">
                  Environment status
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Live snapshot
                </p>
              </div>

              <div className="space-y-2 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-4">
                {envItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 rounded-xl bg-white/80 px-4 py-3"
                  >
                    <code className="font-mono text-sm font-medium text-zinc-900">
                      {item.label}
                    </code>
                    <span className={`text-sm font-semibold ${item.tone}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-zinc-900">
                  Next steps
                </p>
                <p className="font-mono text-xs text-zinc-400">
                  npm i -g seomd-cli
                </p>
              </div>

              <ol className="space-y-3">
                {nextSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-4 rounded-2xl border border-zinc-200/80 bg-white/80 px-4 py-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-7 text-zinc-600">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
