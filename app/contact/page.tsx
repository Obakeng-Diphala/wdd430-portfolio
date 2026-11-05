export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-50 px-6 py-12 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Contact
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in touch with me.
          </h1>
        </header>

        <section className="mb-10 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          <p>
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out to
            me through the following channels:
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                You can reach me at:{" "}
                <a
                  href="mailto:okdiphala@gmail.com"
                  className="text-emerald-600 hover:underline dark:text-emerald-400"
                >
                  okdiphala@gmail.com
                </a>
              </p>
            </div>

            <div className="rounded-xl border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                You can connect with me on LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/okdiphala"
                  className="text-emerald-600 hover:underline dark:text-emerald-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/okdiphala
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
