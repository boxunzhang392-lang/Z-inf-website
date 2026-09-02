import { notFound } from "next/navigation";

const audienceSlugs = ["students", "schools", "partners"] as const;

export function generateStaticParams() {
  return audienceSlugs.map((audience) => ({ audience }));
}

export default async function EntryPlaceholderPage({
  params,
}: {
  params: Promise<{ audience: string }>;
}) {
  const { audience } = await params;

  if (!audienceSlugs.includes(audience as (typeof audienceSlugs)[number])) {
    notFound();
  }

  return <main className="entry-placeholder" aria-label="Zinf 参与入口页面，内容待补充" />;
}
