import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dialogs from './components/Layout/Outlet/Dialogs/Dialogs';
import News from "./components/Layout/Outlet/News/News";
import People from './components/Layout/Outlet/People/People';
import NotFoundPage from "./components/Layout/Outlet/NotFoundPage/NotFoundPage";
import PersonPage from "./components/Layout/Outlet/People/PersonPage/PersonPage";
import Profile from "./components/Layout/Outlet/Profile/Profile";
import {useState} from "react";
import RegPage from "./components/Layout/AuthPages/Registration/RegPage";
import {useAuth} from "./hooks/use-auth";
import { useAppSelector} from "./hooks/rtk-ts";
import LoginPage from "./components/Layout/AuthPages/Login/LoginPage";
import Login from "./components/Layout/AuthPages/Login/Login/Login";
import Dialog from "./components/Layout/Outlet/Dialogs/Dialog/Dialog";
import Community from "./components/Layout/Outlet/FooterPages/Community";
import Confidential from "./components/Layout/Outlet/FooterPages/Confidential";
import Diversity from "./components/Layout/Outlet/FooterPages/Diversity";
import Innovation from "./components/Layout/Outlet/FooterPages/Innovation";
import Policies from "./components/Layout/Outlet/FooterPages/Policies";
import Transparency from "./components/Layout/Outlet/FooterPages/Transparency";

function App() {
    const [main, setMain] = useState(true)
    const {isAuth, email}= useAuth()
    const [userObj, setUserObj] = useState({})


    const mainPages = useAppSelector(state => state?.auth.id)



  return (
      <div  className="App">
          {isAuth
              ?
              <Routes >
                  <Route path='/' element= {<Layout/> }>
                      <Route index element= {<Profile />}/>
                      <Route path='register' element= {<RegPage/>}/>
                      <Route path='login' element= {<Login/>}/>
                      <Route path='profile' element= {<Profile />}/>
                      <Route path='dialogs' element= {<Dialogs />}>
                          <Route path=':id' element={<Dialog />}/>
                      </ Route >
                      <Route path='news' element= {<News />}/>
                      <Route path='people' element= {<People />}/>
                      <Route path='people/:id' element= {<PersonPage main={null} />}/>
                      <Route path='*' element= {<NotFoundPage />}/>


                      <Route path='community' element={<Community />}/>
                      <Route path='confidential' element={<Confidential />}/>
                      <Route path='diversity' element={<Diversity />}/>
                      <Route path='innovation' element={<Innovation />}/>
                      <Route path='policies' element={<Policies />}/>
                      <Route path='transparency' element={<Transparency />}/>
                  </Route>
              </Routes>
              :
              <Routes>
                  <Route path='/' element= {<Layout/> }>
                      <Route path='register' element= {<RegPage/>}/>
                      <Route  path='login' element= {<LoginPage/>}/>
                      <Route  index element= {<LoginPage/>}/>
                      <Route path='*' element= {<Navigate to={'/'} />}/>
                  </Route>
              </Routes>

          }

      </div>
  );
}

export default App;
