import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer/Footer";
import Navbar from "./components/layouts/Navbar/Navbar";
import GlobalContextProvider from "./context/GlobalContext";
import ProfessionalsContainer from "./components/pages/Professionals/ProfessionalsContainer";
import Home from "./components/pages/Home/Home";
import ProfessionalSelectedContainer from "./components/pages/ProfessionalSelected/ProfessionalSelectedContainer.jsx";
import FavoritesContainer from "./components/pages/Favorites/FavoritesContainer";
import Contacto from "./components/pages/Contacto/Contacto";

function App() {

  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Footer />}>
              <Route path="/" element={<Home />}/>
              <Route path="/dentistas" element={ <ProfessionalsContainer /> }/>
              <Route path="/dentista/:id" element={<ProfessionalSelectedContainer />}/>
              <Route path="/contacto" element={<Contacto />}/>
              <Route path="/favs" element={<FavoritesContainer />}/>
            </Route>
          </Route>
          <Route path="*" element={ <h1>Pagina No Encontrada</h1> } />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  )

}

export default App
