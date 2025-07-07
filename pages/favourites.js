import useSWR from "swr";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import { useFavourites } from "./_app";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FavouritesPage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const { favourites } = useFavourites();

  if (isLoading) return <p>Lade Lieblingskunstwerke...</p>;
  if (error) return <p>Fehler: {error.message}</p>;
  if (!data) return null;

  const favouritePieces = data.filter((piece) =>
    favourites.includes(piece.slug)
  );
  return (
    <section>
      <h1>Meine Lieblingskunstwerke</h1>
      {favouritePieces.length === 0 && <p>Du hast noch keine Favouriten.</p>}
      {favouritePieces.map((piece) => (
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
