import GlobalStyle from "../styles";
import { createContext, useContext, useState } from "react";

const FavouritesContext = createContext();
export function useFavourites() {
  return useContext(FavouritesContext);
}

export default function App({ Component, pageProps }) {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const isFavourite = (id) => favourites.includes(id);

  return (
    <>
      <GlobalStyle />
      <FavouritesContext.Provider
        value={{ favourites, toggleFavourite, isFavourite }}
      >
        <Component {...pageProps} />
      </FavouritesContext.Provider>
    </>
  );
}
