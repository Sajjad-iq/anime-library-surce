import { AnimeList } from "./pages/AnimeList";
import { Home } from "./pages/Home";
import { Nav } from "./layout/Nav";
import { SearchField } from "./layout/SearchField";
import React from 'react';
import { ErrorPage } from "./pages/ErrorPage";
import { WelcomePage } from "./pages/WelcomePage";
import { Footer } from "./layout/Footer";


const App = () => {

  return (
    <section className="App">
      <WelcomePage />
      <ErrorPage />
      <SearchField />
      <Nav />
      <Home />
      <AnimeList />
      <Footer />
    </section>
  );
}

export default App;





