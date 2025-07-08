// components/FavoriteButton.js

export default function FavouriteButton({ isFavourite, onToggle }) {
  return (
  <button onClick={onToggle}>
    {isFavourite ? "❤️" : "🤍"}
    </button>);
}
