import Spotlight from "../components/Spotlight.jsx";
import styled from "styled-components";

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
