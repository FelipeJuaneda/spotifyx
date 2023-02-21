import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Search from "./components/Pages/Search/Search";
import Sidebar from "./components/SideBar/SideBar";
import PlayList from "./components/Pages/PlayList/PlayList";
import Favorites from "./components/Pages/Favorites/Favorites";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/playlist" element={<PlayList />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
