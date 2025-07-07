import Image from "next/image";
import FavouriteButton from "./FavouriteButton";

export default function ArtPieceDetails({ piece, onBack }) {
  return (
    <section style={{ position: "relative" }}>
      <Image
        src={piece.imageSource}
        alt={piece.title}
        width={400}
        height={300}
      />
      <h1>{piece.name}</h1>
      <p>Künstler: {piece.artist}</p>
      <p>Jahr: {piece.year}</p>
      <p>Genre: {piece.genre}</p>
      <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
        <FavouriteButton artPieceId={piece.slug} />
      </div>
      <button onClick={onBack}>Zurück zur Galerie</button>
    </section>
  );
}
