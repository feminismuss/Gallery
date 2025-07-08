import Image from "next/image";
import Link from "next/link";
import FavouriteButton from "./FavouriteButton.jsx";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavourite,
  onToggleFavourite,
}) {
  return (
    <Card>
      <article style={{ position: "relative" }}>
        <h2>{title}</h2>
        <Link href={`/artpieces/${slug}`}>
          <Image src={image} alt={title} width={400} height={300} />

          <p>{artist}</p>
        </Link>
        <div
          style={{ position: "absolute", bottom: "0.5rem", right: "0.5rem" }}
        >
          <FavouriteButton
            isFavourite={isFavourite}
            onToggle={() => onToggleFavourite(slug)}
          />
        </div>
      </article>
    </Card>
  );
}
