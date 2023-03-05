import './App.css';
import { Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Profile from "./components/Layout/Outlet/Profile/Profile";
import Dialogs from './components/Layout/Outlet/Dialogs/Dialogs';
import News from "./components/Layout/Outlet/News/News";
import Music from './components/Layout/Outlet/Music/Music';
import People from './components/Layout/Outlet/People/People';
import NotFoundPage from "./components/Layout/Outlet/NotFoundPage/NotFoundPage";
import PersonPage from "./components/Layout/Outlet/People/PersonPage/PersonPage";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element= {<Layout/>}>
            <Route index element= {<Profile/>}/>
            <Route path='profile' element= {<Profile/>}/>
            <Route path='dialogs' element= {<Dialogs />}/>
            <Route path='news' element= {<News />}/>
            <Route path='music' element= {<Music />}/>
            <Route path='people' element= {<People />}/>
            <Route path='people/:id' element= {<PersonPage />}/>
            <Route path='*' element= {<NotFoundPage />}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
