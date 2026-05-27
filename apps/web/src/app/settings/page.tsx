export default function SettingsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl p-6">
      <h1 className="text-3xl font-semibold">Settings</h1>
      <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
        <p className="text-zinc-300">Authentication providers:</p>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-zinc-400">
          <li>Google OAuth (planned)</li>
          <li>Magic links (starter endpoint ready)</li>
          <li>JWT sessions</li>
        </ul>
      </div>
    </main>
  );
}
