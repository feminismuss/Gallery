import useSWR from "swr";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FavouritesPage({
  favourites,
  toggleFavourite,
  isFavourite,
}) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (isLoading) return <p>Lade Lieblingskunstwerke...</p>;
  if (error) return <p>Fehler: {error.message}</p>;
  if (!data) return null;

  const favouritePieces = data.filter((piece) =>
    favourites.includes(piece.slug)
  );
  return (
    <main>
      <h1>Meine Lieblingskunstwerke</h1>
      <FlexContainer>
        {favouritePieces.length === 0 && <p>Du hast noch keine Favouriten.</p>}
        {favouritePieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            isFavourite={isFavourite(piece.slug)}
            onToggleFavourite={toggleFavourite}
          />
        ))}
      </FlexContainer>
    </main>
  );
}
