import Image from "next/image";
import Link from "next/link";
import FavouriteButton from "./FavouriteButton.jsx";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavourite,
  onToggleFavourite,
}) {
  return (
    <article style={{ position: "relative" }}>
      <Link href={`/artpieces/${slug}`}>
        <Image src={image} alt={title} width={400} height={300} />
        <h2>{title}</h2>
        <p>{artist}</p>
      </Link>
      <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
        <FavouriteButton
          isFavourite={isFavourite}
          onToggle={() => onToggleFavourite(slug)}
        />
      </div>
    </article>
  );
}
