const items = ["Brand Strategy", "Corporate Communications", "Digital Experience", "B2B Storytelling", "Reputation", "Marketing Operations", "Business Systems", "Content"];
export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee mask-fade-r overflow-hidden border-y border-line py-5">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="flex items-center whitespace-nowrap font-serif text-2xl text-muted md:text-3xl">
            <span className="px-8">{t}</span>
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
