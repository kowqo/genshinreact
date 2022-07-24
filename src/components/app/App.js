import AppHeader from "../appHeader/appHeader";
import CharList from "../charList/charList";
import "../../styles/style.scss";
import ArtifactsList from "../artifactsList/artifactsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<CharList />} />
            <Route path="/artifacts" element={<ArtifactsList />} />
						<Route path='*'element={<h1 >Такой страницы нет</h1>}/>
          </Routes>
          {/* <CharList /> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
