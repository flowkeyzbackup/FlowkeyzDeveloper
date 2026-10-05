import CopyEmail from "./components/CopyEmail"
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Reveal from "./components/Reveal";
import ScrollProgress from "./components/ScrollProgress";
import ThemeToggle from "./components/ThemeToggle";
import { mentoring, profile, projects, stack, teaches } from "./lib/data";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Mentoring", href: "#mentoring" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const allTech = Array.from(new Set(stack.flatMap((s) => s.items)));

const hint =
  "inline-block rounded-md border border-dashed border-line px-3 py-2 text-sm text-muted";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <div className="mx-auto max-w-4xl px-5 pb-16">
        <header className="flex items-center justify-between gap-4 border-b border-line py-5">
          <span className="font-mono text-[13px]">{profile.handle}</span>
          <nav aria-label="Sections" className="flex flex-wrap items-center gap-5 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-muted transition hover:text-fg">
                {n.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </header>

        <main>
          <Hero />

          <Reveal>
            <Marquee items={allTech} />
          </Reveal>

          {/* Work */}
          <section id="work" className="scroll-mt-6 py-14 sm:py-16">
            <Reveal>
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.3rem)] font-bold leading-tight tracking-tight text-balance">
                Selected work
              </h2>
              <p className="mb-8 mt-2 max-w-[60ch] text-muted">
                Products I have contributed to, grouped by the problem they solve.
              </p>
            </Reveal>

            <div>
              {projects.map((p) => (
                <Reveal key={p.name}>
                  <article className="group grid gap-2 border-t border-line py-6 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-x-8">
                    <p className="pt-1.5 font-mono text-xs uppercase tracking-wider text-muted">
                      {p.domain}
                    </p>
                    <div className="min-w-0 transition-transform duration-300 group-hover:translate-x-1.5">
                      <h3 className="font-display text-2xl font-bold leading-tight tracking-tight">
                        {p.href ? (
                          <a href={p.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                            {p.name} <span aria-hidden="true">↗</span>
                          </a>
                        ) : (
                          p.name
                        )}
                      </h3>
                      <p className="mb-3 mt-1.5 max-w-[60ch]">{p.description}</p>

                      {p.role || p.stack || p.result ? (
                        <div className="grid gap-2">
                          {p.role && <p className="text-sm text-muted">Role: {p.role}</p>}
                          {p.result && <p className="text-sm">{p.result}</p>}
                          {p.stack && (
                            <ul className="flex flex-wrap gap-1.5">
                              {p.stack.map((s) => (
                                <li key={s} className="rounded bg-surface px-2 py-0.5 font-mono text-xs">
                                  {s}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <span className={hint}>Add your role, stack and one result in lib/data.ts</span>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Mentoring */}
          <section id="mentoring" className="scroll-mt-6 border-t border-line py-14 sm:py-16">
            <Reveal>
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.3rem)] font-bold leading-tight tracking-tight text-balance">
                Mentoring and teaching
              </h2>
              <p className="mb-8 mt-2 max-w-[60ch] text-muted">
                I mentor and teach because explaining a system is the fastest way to find out whether you understand it.
              </p>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {mentoring.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.1}>
                  <div className="h-full rounded-xl bg-surface p-6 transition duration-300 hover:-translate-y-1">
                    <h3 className="font-display text-xl font-bold tracking-tight">{m.name}</h3>
                    <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">{m.role}</p>
                    <p className="text-muted">{m.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8 grid gap-3">
              <h3 className="font-display text-lg font-bold">What I teach</h3>
              <ul className="flex flex-wrap gap-1.5">
                {teaches.map((t) => (
                  <li key={t} className="rounded bg-surface px-2.5 py-1 font-mono text-xs">
                    {t}
                  </li>
                ))}
              </ul>
              <span className={`${hint} w-fit`}>Add how many people you have mentored and one outcome</span>
              {profile.bookingHref && (
                <a
                  href={profile.bookingHref}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit rounded-md border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition hover:brightness-110"
                >
                  Book a session
                </a>
              )}
            </Reveal>
          </section>

          {/* Stack */}
          <section id="stack" className="scroll-mt-6 border-t border-line py-14 sm:py-16">
            <Reveal>
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.3rem)] font-bold leading-tight tracking-tight">
                Stack
              </h2>
              <p className="mb-8 mt-2 text-muted">Grouped by the job I use each tool for.</p>
            </Reveal>

            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {stack.map((s, i) => (
                <Reveal key={s.group} delay={i * 0.08}>
                  <h3 className="mb-2.5 font-mono text-xs font-medium uppercase tracking-widest text-accent">
                    {s.group}
                  </h3>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="border-b border-line py-0.5 text-[15px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-6 border-t border-line py-14 sm:py-16">
            <Reveal className="grid gap-5">
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.3rem)] font-bold leading-tight tracking-tight">
                Let&apos;s talk
              </h2>
              <p className="max-w-[60ch] text-muted">
                Open to product engineering work, short contracts and mentoring sessions.
              </p>
              <CopyEmail email={profile.email} />
             <ul className="flex flex-wrap gap-5 text-sm">
  <li>
    <a
      href="https://github.com/your-username"
      target="_blank"
      rel="noreferrer"
      className="underline underline-offset-4 hover:text-accent"
    >
      GitHub
    </a>
  </li>
  <li>
    <a
      href="https://www.linkedin.com/in/your-name"
      target="_blank"
      rel="noreferrer"
      className="underline underline-offset-4 hover:text-accent"
    >
      LinkedIn
    </a>
  </li>
</ul>
            </Reveal>
          </section>
        </main>

        <footer className="flex flex-wrap justify-between gap-3 border-t border-line pt-8 font-mono text-xs text-muted">
          <span>{profile.name}</span>
          <span>Software engineer and mentor</span>
        </footer>
      </div>
    </>
  );
}