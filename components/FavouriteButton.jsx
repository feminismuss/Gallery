// components/FavoriteButton.js
import { useFavourites } from "../pages/_app";

export default function FavouriteButton({ artPieceId }) {
  const { isFavourite, toggleFavourite } = useFavourites();

  return (
    <button onClick={() => toggleFavourite(artPieceId)}>
      {isFavourite(artPieceId) ? "❤️" : "🤍"}
    </button>
  );
}
