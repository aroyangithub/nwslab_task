import { Link } from "react-router-dom"
import { Boxes } from "../component/Boxes"
import { Clothes } from "../component/Clothes"
import { Hats } from "../component/Hats"
import { Sinks } from "../component/Sinks"
import { Space } from "../component/Space"
import { Sunglasses } from "../component/Sunglasses"
import { Ties } from "../component/Ties"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import '../App.css'
export const MyRouter = () => {
    return (<>
        <BrowserRouter>
            <header>  <nav>
                <ul>

                    <li><Link to='/boxes'>Boxes</Link></li>
                    <li><Link to='/clothes'>Clothes</Link></li>
                    <li><Link to='/hats'>Hats</Link></li>
                    <li><Link to='/sinks'>Sinks</Link></li>
                    <li><Link to='/space'>Space</Link></li>
                    <li><Link to='/sunglasses'>Sunglasses</Link></li>
                    <li><Link to='/ties'>Ties</Link></li>
                </ul>

            </nav></header>

            <Routes>
                <Route path='/boxes' element={<Boxes />} />
                <Route path='/clothes' element={<Clothes />} />
                <Route path='/hats' element={<Hats />} />
                <Route path='/sinks' element={<Sinks />} />
                <Route path='/sunglasses' element={<Sunglasses />} />
                <Route path='/ties' element={<Ties />} />
                <Route path='/space' element={<Space />} />


            </Routes>


        </BrowserRouter>
    </>)
}