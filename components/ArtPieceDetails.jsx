import Image from "next/image";

export default function ArtPieceDetails({ piece, onBack }) {
  return (
    <section>
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

      <button onClick={onBack} Zurück zur Galerie></button>
    </section>
  );
}
