import useSWR from "swr";
import ArtPiecePreview from "./ArtPiecePreview";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Gallery() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (isLoading) return <p>Bilder werden aus dem Keller geholt</p>;
  if (error) return <p>Fehler beim Laden: {error.message}</p>;
  if (!data) return null;

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomPiece = data[randomIndex];

  return (
    <section>
      <ArtPiecePreview
        key={randomPiece.slug}
        image={randomPiece.imageSource}
        title={randomPiece.name}
        artist={randomPiece.artist}
      />
    </section>
  );
}
