import {Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { AboutPage } from './Pages/AboutPage'
import { LoginPage } from './Pages/loginPage'
import { NotFound404 } from './Pages/NotFound404'
import { NavBar } from './Pages/NavBar'

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />

            <NavBar/>
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                 {/* Rutas no validas */}
                 <Route path="error404" element={<NotFound404/>} /> 
                 <Route path="/*" element={<Navigate to='/error404' />} />
            </Routes>
           

        </>
    )
}
