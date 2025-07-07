import Image from "next/image";
import Link from "next/link";
import FavouriteButton from "./FavouriteButton.jsx";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <article style={{ position: "relative" }}>
      <Link href={`/artpieces/${slug}`}>
        <Image src={image} alt={title} width={400} height={300} />
        <h2>{title}</h2>
        <p>{artist}</p>
      </Link>
      <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
        <FavouriteButton artPieceId={slug} />
      </div>
    </article>
  );
}
