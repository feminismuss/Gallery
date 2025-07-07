import useSWR from "swr";
import ArtPiecePreview from "./ArtPiecePreview";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Gallery() {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (isLoading) return <p>Bilder werden aus dem Keller geholt</p>;
  if (error) return <p>Fehler beim Laden: {error.message}</p>;
  if (!artPieces) return null;

  return (
    <section>
      {artPieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
          slug={piece.slug}
        />
      ))}
    </section>
  );
}
