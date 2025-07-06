import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <article>
      <Image src={image} alt={title} width={400} height={300} />
      <h2>{title}</h2>
      <p>{artist}</p>
    </article>
  );
}
