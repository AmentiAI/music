import { site } from "@/lib/site";

export function ResourceTiles() {
  const tiles = [
    {
      href: site.links.youtube,
      label: "YouTube",
      title: "Tutorials & lessons",
    },
    {
      href: site.links.practiceGuitar,
      label: "PracticeTheGuitar.com",
      title: "Guitar techniques & depth",
    },
    {
      href: site.links.facebook,
      label: "Facebook",
      title: "Updates from the school",
    },
    {
      href: site.links.instagram,
      label: "Instagram",
      title: "Studio life & moments",
    },
  ] as const;

  return (
    <div className="resource-links">
      {tiles.map((t) => (
        <a
          key={t.href}
          className="resource-tile"
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="resource-label">{t.label}</span>
          <span className="resource-title">{t.title}</span>
          <span className="resource-arrow" aria-hidden="true">
            →
          </span>
        </a>
      ))}
    </div>
  );
}
