import Image from "next/image";
import FavouriteButton from "./FavouriteButton";
import { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ArtPieceDetails({
  piece,
  onBack,
  isFavourite,
  onToggleFavourite,
}) {
  return (
    <Card>
      <section style={{ position: "relative" }}>
        <h1>{piece.name}</h1>
        <Image
          src={piece.imageSource}
          alt={piece.title}
          width={400}
          height={300}
        />
        
        <p>Künstler: {piece.artist}</p>
        <p>Jahr: {piece.year}</p>
        <p>Genre: {piece.genre}</p>
        <div
          style={{ position: "absolute", bottom: "0.5rem", right: "0.5rem" }}
        >
          <FavouriteButton
            isFavourite={isFavourite}
            onToggle={onToggleFavourite}
          />
        </div>
        <button onClick={onBack}>Zurück zur Galerie</button>
      </section>
    </Card>
  );
}
