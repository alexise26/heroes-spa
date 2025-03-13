import { Navbar } from "../../ui/";
import { DCPage, MarvelPage, HeroPage, SearchPage } from "../pages/";

import {Route, Routes, Navigate} from 'react-router-dom';


export const HeroesRoutes = () => {
  return (
    <div>
      <Navbar/>
        <div className="container">
            <Routes>
                <Route path="marvel" element= {<MarvelPage/>}/>
                <Route path="dc" element= {<DCPage/>}/>
                <Route path="hero/:id" element= {<HeroPage/>}/>
                <Route path="search" element= {<SearchPage/>}/>

                    {/* { Search hero by id} */}

                <Route path="/" element= {<Navigate to="/marvel"/>}/>
            </Routes>
        </div>
    </div>
  )
}

