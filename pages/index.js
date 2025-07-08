import Spotlight from "../components/Spotlight.jsx";

export default function HomePage({ favourites, toggleFavourite, isFavourite }) {
  return (
    <main>
      <h1>Spotlight</h1>
      <Spotlight
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        isFavourite={isFavourite}
      />
    </main>
  );
}
