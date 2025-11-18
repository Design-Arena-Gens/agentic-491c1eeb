"use client";

import { useMemo, useState } from "react";

type ScenarioKey = "exploration" | "modeling" | "deployment";

const scenarios: Record<
  ScenarioKey,
  {
    title: string;
    description: string;
    metrics: Array<{ label: string; value: string }>;
    snippet: string;
    insight: string;
  }
> = {
  exploration: {
    title: "Exploratory Analysis",
    description:
      "Interrogate raw data to uncover relationships worth modeling. Pinpoint quality issues early.",
    metrics: [
      { label: "Rows Profiled", value: "2.3M" },
      { label: "Missing Values", value: "1.7%" },
      { label: "Feature Drift", value: "Stable" },
    ],
    snippet: `(
    df
      .assign(age_bucket=lambda x: pd.cut(x.age, bins=[18, 29, 39, 55, 80]))
      .groupby("age_bucket")
      .agg({"churned": "mean", "spend": "median"})
      .sort_values("churned", ascending=False)
)`,
    insight:
      "You have a clean segment around customers aged 30-39 with the highest retention and premium spend.",
  },
  modeling: {
    title: "Model Experimentation",
    description:
      "Compare experiments objectively. Capture signals, variance, and operational constraints.",
    metrics: [
      { label: "ROC AUC", value: "0.921" },
      { label: "Training Time", value: "3m 14s" },
      { label: "Feature Count", value: "48 → 18" },
    ],
    snippet: `model = lgb.LGBMClassifier(
    learning_rate=0.05,
    max_depth=-1,
    n_estimators=800,
    subsample=0.6,
)
model.fit(train_X, train_y, eval_set=[(valid_X, valid_y)])`,
    insight:
      "Feature pruning removed 30 redundant attributes while increasing AUC by 0.02 across folds.",
  },
  deployment: {
    title: "Production Monitoring",
    description:
      "Track the real-world pulse of your model. Discover regressions before they hurt users.",
    metrics: [
      { label: "Latency (P95)", value: "124ms" },
      { label: "Prediction Drift", value: "+3.6%" },
      { label: "Alerts Fired", value: "2 (last 24h)" },
    ],
    snippet: `drift = evidently.ColumnDriftCalculator(
    column_name="churn_probability",
    threshold=0.05,
)
drift.run(reference_df, production_df)
report.store(metrics_store)`,
    insight:
      "Predictions have drifted 3.6%. Schedule a backfill retraining job to realign with field data.",
  },
};

const stageLabels: Array<{ key: ScenarioKey; label: string }> = [
  { key: "exploration", label: "Explore" },
  { key: "modeling", label: "Model" },
  { key: "deployment", label: "Deploy" },
];

export function DataPlayground() {
  const [stage, setStage] = useState<ScenarioKey>("exploration");
  const scenario = scenarios[stage];

  const gradientClass = useMemo(() => {
    switch (stage) {
      case "exploration":
        return "from-sky-500 to-violet-500";
      case "modeling":
        return "from-emerald-500 to-blue-500";
      case "deployment":
        return "from-orange-500 to-pink-500";
      default:
        return "from-zinc-500 to-zinc-700";
    }
  }, [stage]);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/60 p-10 shadow-xl shadow-slate-900/5 backdrop-blur dark:bg-zinc-950/70">
      <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr opacity-40 blur-3xl" />
      <div
        className={`absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-gradient-to-br ${gradientClass} opacity-30 blur-3xl`}
      />

      <div className="relative flex flex-col gap-8 lg:flex-row">
        <div className="flex-1 space-y-6">
          <div className="flex gap-2 rounded-full border border-slate-200/60 bg-white/70 p-1 text-sm font-medium text-slate-600 dark:border-slate-800 dark:bg-zinc-900/80 dark:text-slate-300">
            {stageLabels.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setStage(key)}
                className={`flex-1 rounded-full px-4 py-2 transition ${
                  key === stage
                    ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow"
                    : "hover:bg-slate-200/60 hover:text-slate-900 dark:hover:bg-zinc-800/80"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {scenario.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {scenario.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {scenario.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-slate-900 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-slate-100"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
              </div>
            ))}
          </div>
          <p className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-slate-200">
            {scenario.insight}
          </p>
        </div>

        <div className="relative flex flex-1 flex-col gap-4 rounded-2xl border border-slate-200/70 bg-slate-950 p-6 shadow-inner shadow-slate-900/50 dark:border-zinc-800">
          <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Notebook Snapshot
          </span>
          <pre className="flex-1 overflow-x-auto text-emerald-200">
            <code>{scenario.snippet}</code>
          </pre>
          <div className="grid grid-cols-3 gap-2 text-xs text-slate-200">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="flex h-16 items-end justify-center overflow-hidden rounded-xl bg-slate-900"
              >
                <div
                  className={`w-full rounded-t-xl bg-gradient-to-t ${gradientClass}`}
                  style={{
                    height: `${45 + ((index * 53) % 35)}%`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
