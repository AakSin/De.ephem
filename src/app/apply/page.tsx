import Image from "next/image";

export default function Apply() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 p-md-24">
      <iframe
        data-tally-src="https://tally.so/r/wLbX4j?transparentBackground=1"
        width="100%"
        height="100%"
        className="h-screen"
        title="De.ephem Application"
      ></iframe>
      <script async src="https://tally.so/widgets/embed.js"></script>
    </main>
  );
}
