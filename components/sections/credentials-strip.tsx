export function CredentialsStrip() {
  const items = [
    { name: "Apollo Hospital, Chennai", role: "DNB Orthopaedics" },
    { name: "NHS, United Kingdom", role: "Robotic joint replacement fellow" },
    { name: "MKCG Medical College", role: "MBBS" },
    { name: "AO Foundation", role: "Trauma management" },
    { name: "FIFA Sports Medicine", role: "Diploma" },
  ];

  return (
    <section
      className="border-y border-border bg-surface"
      aria-labelledby="trust-heading"
    >
      <div className="container-page py-10 md:py-12">
        <h2
          id="trust-heading"
          className="text-caption uppercase tracking-[0.14em] text-text-muted text-center mb-8"
        >
          Trained &amp; certified at
        </h2>
        <ul className="flex flex-wrap justify-center gap-3 md:gap-4">
          {items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col rounded-lg border border-border bg-surface-elevated/50 px-4 py-3 md:px-5 md:py-4 min-w-[170px] md:min-w-[200px] text-center"
            >
              <span className="text-body-sm font-semibold text-text-primary leading-tight">
                {item.name}
              </span>
              <span className="text-caption text-text-muted mt-1 uppercase tracking-[0.08em]">
                {item.role}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
