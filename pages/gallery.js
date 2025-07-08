import Gallery from "../components/Gallery.jsx";

export default function GalleryPage({
  favourites,
  toggleFavourite,
  isFavourite,
}) {
  return (
    <main>
      <h1>Galerie</h1>
      <Gallery
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        isFavourite={isFavourite}
      />
    </main>
  );
}
