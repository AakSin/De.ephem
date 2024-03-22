import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Guidelines For Application</h1>
      <ul className="list-disc">
        <li>
          This doesn’t necessarily mean music of the old. We need to archive
          things of the present too, so the future doesn’t forget them.
        </li>
        <li>
          The best way to go about: focus on a specific region and/or time.
          Focus on a region or time you know well or would be down to research
          thoroughly. Regions can be anything from cities, states, and
          countries, to abstract clusters like “Global South”
        </li>
        <li>
          The music doesn’t have to be experimental, “boring”, atonal,
          traditional, nationalistic or necessarily political. We need to
          archive pop as much as we need to archive folk songs.
        </li>
        <li>
          If you resonate with none of the above (AND in general), do have a
          clear rationale, reason, or thematic overture/arc as to why you are
          playing these specific songs. Would these songs still survive time if
          you never played or archived them in a digital format today or would
          they be forgotten?
        </li>
      </ul>
    </main>
  );
}
