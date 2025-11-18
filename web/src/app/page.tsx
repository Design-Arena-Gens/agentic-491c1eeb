import Link from "next/link";
import { DataPlayground } from "@/components/DataPlayground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#dbeafe,_#f5f3ff)] pb-24 text-slate-900 dark:bg-[radial-gradient(circle_at_top,_#0f172a,_#111928)] dark:text-white">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-24 md:px-12 lg:px-20">
        <header className="relative flex flex-col gap-14 rounded-3xl border border-white/60 bg-white/80 p-12 shadow-xl shadow-indigo-200/40 backdrop-blur-lg dark:border-white/10 dark:bg-slate-950/60 dark:shadow-slate-900/60">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-4 py-1 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 dark:bg-white/10">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                DS Launchpad
              </span>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl sm:leading-tight dark:text-white">
                Build, ship, and monitor intelligent products with a complete
                data science command center.
              </h1>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                Accelerate experimentation, automate delivery, and align every
                stakeholder with a living source of truth. Launch pipelines in
                hours, not weeks.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#blueprint"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 px-6 py-3 text-sm font-semibold text-white shadow transition hover:scale-[1.01] hover:shadow-lg dark:from-blue-500 dark:via-indigo-500 dark:to-blue-500"
                >
                  Review the blueprint
                </Link>
                <Link
                  href="#playground"
                  className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900/40 hover:bg-slate-100 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Explore the playground
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-3xl border border-indigo-100 bg-white/70 p-6 text-sm text-slate-600 shadow-inner shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  Experiments
                </p>
                <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">
                  143
                </p>
                <p className="mt-1 text-xs text-emerald-500">
                  +12 in the last week
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  Deployment success
                </p>
                <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">
                  99.4%
                </p>
                <p className="mt-1 text-xs text-emerald-500">
                  Auto rollback enabled
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  Time to Notebook
                </p>
                <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">
                  6 min
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  From ingestion to insights
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  Team adoption
                </p>
                <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">
                  68%
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Weekly active analysts
                </p>
              </div>
            </div>
          </div>
        </header>

        <section
          id="blueprint"
          className="grid gap-10 rounded-3xl border border-white/60 bg-white/70 p-12 shadow-lg shadow-indigo-200/30 backdrop-blur dark:border-white/10 dark:bg-slate-950/40 dark:shadow-slate-900/60 lg:grid-cols-[2fr_3fr]"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Data Science Blueprint
            </h2>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              A modular stack that scales with your ambition. Combine governed
              data contracts, experiment observability, and deployment
              automation without losing the human touch that makes insights
              stick.
            </p>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-400" />
                Declarative ingestion pipelines that validate contracts at every
                checkpoint.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-sky-400" />
                Experiment registry with lineage-aware comparisons and champion
                / challenger orchestration.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-indigo-400" />
                Real-time inference layer backed by feature store snapshots and
                drift detection.
              </li>
            </ul>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Source & Trust",
                description:
                  "Automated ingestion using connectors for warehouses, streaming buses, and SaaS APIs. Enforce freshness SLOs with incident routing.",
                color: "from-emerald-400 to-teal-500",
              },
              {
                title: "Explore & Shape",
                description:
                  "Notebook-ready datasets with profiling, semantic tagging, and reproducible transformation history kept in sync.",
                color: "from-sky-400 to-indigo-500",
              },
              {
                title: "Ship & Scale",
                description:
                  "Feature store with versioning, CI for models, canary deployments, and observability hooks for custom alerts.",
                color: "from-indigo-500 to-purple-500",
              },
              {
                title: "Share & Govern",
                description:
                  "Narrative reporting, decision logs, and baked-in review flows to align product, analytics, and leadership.",
                color: "from-pink-500 to-orange-400",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="relative flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-md shadow-indigo-200/20 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-slate-900/40"
              >
                <div
                  className={`absolute -right-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gradient-to-br ${item.color} opacity-40 blur-3xl`}
                />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="playground"
          className="space-y-10 rounded-3xl border border-white/60 bg-white/70 p-12 shadow-lg shadow-indigo-200/30 backdrop-blur dark:border-white/10 dark:bg-slate-950/40 dark:shadow-slate-900/60"
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Decision Studio
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Navigate the lifecycle of a churn prediction initiative from
              notebook to production. Toggle stages to study how metrics,
              insights, and code evolve as the team tightens feedback loops.
            </p>
          </div>
          <DataPlayground />
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/60 bg-white/70 p-12 shadow-lg shadow-indigo-200/30 backdrop-blur dark:border-white/10 dark:bg-slate-950/40 dark:shadow-slate-900/60 lg:grid-cols-[1.8fr_2.2fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Curated Toolkit
            </h2>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Pick the right instruments for each moment. Combine modern Python
              and SQL workflows with governance guardrails to keep everything
              measurable and reproducible.
            </p>
            <ul className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              {[
                "Notebook sandboxes with built-in experiment tracking and dataset diffs.",
                "Feature registry that syncs seamlessly with batch and real-time inference.",
                "Observability mesh aggregating metrics across pipelines, models, and business KPIs.",
                "Secure collaboration spaces with review gates, comments, and delivery timelines.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                  {line}
                </li>
              ))}
            </ul>
            <Link
              href="#learning-path"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-900/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:border-slate-900/30 hover:bg-slate-100 dark:border-white/20 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
            >
              View enablement track
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                name: "Ingestion",
                stack: ["Airbyte", "Fivetran", "dbt"],
                detail: "Diff-based deployments keep lineage continuous.",
              },
              {
                name: "Exploration",
                stack: ["Polars", "DuckDB", "Hex"],
                detail: "Sub-second queries on notebook extracts.",
              },
              {
                name: "Modeling",
                stack: ["scikit-learn", "LightGBM", "Weights & Biases"],
                detail: "Tunable templates with feature importance overlays.",
              },
              {
                name: "Production",
                stack: ["Evidently", "Feast", "Flyte"],
                detail: "Runtime checks alert on drift and performance regressions.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/60 bg-white/90 p-6 text-slate-900 shadow-md shadow-indigo-200/20 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-100 dark:shadow-slate-900/40"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {item.detail}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="learning-path"
          className="space-y-10 rounded-3xl border border-white/60 bg-white/70 p-12 shadow-lg shadow-indigo-200/30 backdrop-blur dark:border-white/10 dark:bg-slate-950/40 dark:shadow-slate-900/60"
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Enablement Path
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Launch cross-functional squads with shared fluency. Each chapter
              blends theory, tooling, and an artifact that proves adoption.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "01 • Discovery",
                focus: "Align on value metrics, surface critical datasets, map governance.",
                artifact: "North-star metric map",
              },
              {
                title: "02 • Ops Ready",
                focus: "Codify ingestion and transformation pipelines with delivery SLAs.",
                artifact: "Data contract registry",
              },
              {
                title: "03 • Launch",
                focus: "Prototype models, automate evaluation, and wire CI/CD guardrails.",
                artifact: "Champion/challenger matrix",
              },
              {
                title: "04 • Scale",
                focus: "Production monitoring, continuous learning loops, sunlight dashboards.",
                artifact: "Operational runbook",
              },
            ].map((phase) => (
              <article
                key={phase.title}
                className="flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/90 p-6 shadow-md shadow-indigo-200/20 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-slate-900/40"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {phase.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {phase.focus}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                  Artifact
                </p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  {phase.artifact}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
