export function CredentialsStrip() {
  const items = [
    { name: "UTKAL Hospital, Bhubaneswar", role: "Current practice" },
    { name: "Elite Ortho Care & Rehab, Bhubaneswar", role: "Current practice" },
    { name: "Apollo Hospital, Chennai", role: "Trained at" },
    { name: "NHS Hospital, UK (Fellowship)", role: "Robotic surgery fellow" },
    { name: "MKCG Medical College, Berhampur", role: "MBBS" },
  ];

  return (
    <section
      className="border-y border-border bg-surface"
      aria-labelledby="trust-heading"
    >
      <div className="container-page py-8 md:py-10">
        <h2
          id="trust-heading"
          className="text-caption uppercase tracking-[0.14em] text-text-muted text-center mb-6"
        >
          Trained &amp; trusted at
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center text-center gap-1"
            >
              <p className="text-body-sm font-medium text-text-primary leading-tight">
                {item.name}
              </p>
              <p className="text-caption text-text-muted">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
