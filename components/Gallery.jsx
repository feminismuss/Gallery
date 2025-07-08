import { useEffect, useState } from "react";
import useSWR from "swr";
import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Gallery({ favourites, toggleFavourite, isFavourite }) {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (isLoading) return <p>Bilder werden aus dem Keller geholt</p>;
  if (error) return <p>Fehler beim Laden: {error.message}</p>;
  if (!artPieces) return null;

  return (
    <FlexContainer>
      {artPieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
          slug={piece.slug}
          isFavourite={favourites.includes(piece.slug)}
          onToggleFavourite={toggleFavourite}
        />
      ))}
    </FlexContainer>
  );
}
