import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:px-64 p-12">
      <h1 className="font-bold text-3xl pb-16">Guidelines For Application</h1>
      <h2 className="font-bold text-xl text-left w-full pb-2">
        What is a Mix?
      </h2>
      <p className="pb-6">
        In the context of radio shows, a &quot;mix&quot; refers to a curated set
        of tracks, often seamlessly blended together, that are played over the
        course of the show. These mixes are typically crafted by radio show
        curators and can span various genres and styles, depending on the theme
        of the show or the curator&apos;s personal taste.
      </p>
      <h2 className="font-bold text-xl text-left w-full pb-2">Show Format</h2>

      <ul className="list-disc pb-6">
        <li>
          <strong>Curated/organized mix:</strong> A tailored curation that
          speaks for itself and doesn&apos;t need the presenter talking to
          explain its thematic overtures.{" "}
        </li>

        <li>
          <strong>Music + Talking :</strong> The presenter talks after every
          song or every few songs to explain and tell people more about the
          song/curation.{" "}
        </li>

        <li>
          <strong>Talk Shows:</strong> If need be you can talk about music,
          music history, techniques etc. but we still encourage you to play
          during these to illustrate with examples.{" "}
        </li>

        <li>
          <strong>Live performance or improvisation: </strong>Creating or
          performing music during the radio show.{" "}
        </li>

        <li>
          <strong> 30-60 minutes </strong> in duration
        </li>
        <li>
          <strong>Solo or Group</strong>
        </li>
        <li>
          <strong className="font-bold text-left w-full pb-2">
            Example Shows:
          </strong>{" "}
          <a href="https://www.radioalhara.net/">Radio Alhara</a>,{" "}
          <a href="https://www.nts.live/shows/phambinho/episodes/phambinho-26th-december-2023">
            NTS
          </a>
          ,{" "}
          <a href="https://hkcr.live/shows/nu-s3rvo-w-guan-21-03-2024">
            Hong Kong Community Radio
          </a>
        </li>
      </ul>

      <h2 className="font-bold text-xl text-left w-full pb-2">
        General Guidelines
      </h2>

      <ul className="list-disc pb-6">
        <li>
          Radio for remembrance doesn&apos;t necessarily mean music of the old.
          We need to archive things of the present too, so the future
          doesn&apos;t forget them.
        </li>
        <li>
          The best way to go about this is to focus on a specific region and/or
          time. Focus on a region or time you know well or would be down to
          research thoroughly. Regions can be anything from cities, states, and
          countries, to abstract clusters like “Global South.”{" "}
        </li>
        <li>
          The music doesn&apos;t have to be experimental, “boring”, atonal,
          traditional, nationalistic or necessarily political. We need to
          archive pop as much as we need to archive folk songs.
        </li>
        <li>
          If your show doesn&apos;t necessarily fit in with any of the above
          general guidelines, do have a clear rationale, reason, or thematic
          overture/arc still as to why you are playing these specific songs.
          Should these songs be played together in this sequence to illustrate
          your narrative?{" "}
        </li>
        <li>
          Most importantly play music you like and are passionate about.
          Researching and finding new forms of music that you would like to
          preserve/ hold a personal connection. Again, this doesn&apos;t have to
          be music you know perfectly well and everything about. In fact, use
          the platform to learn, research and exhibit/share with others.{" "}
        </li>
        <li>
          This is not merely an academic or political exercise or an
          experimental media practice. In the end, we serve as a platform to
          enjoy music and create a fun, encouraging, nurturing, learning
          communal experience first.{" "}
        </li>
      </ul>
    </main>
  );
}
