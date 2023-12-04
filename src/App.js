import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Auth/Login'
import Navigation from './components/Navigation'
import AuthProvider from './contexts/AuthContext'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import Categories from './components/Categories/Categories'
import ToDos from './components/ToDo/ToDos'

function App() {
    return (
        <div className='App'>
            {/* We will wrap everything in a AuthProvider function so that we run the function and gain info to help us control what the user will see depending on the status */}
            <AuthProvider>
                <Router>
                    {/* NAV */}
                    <Navigation />
                    <Routes>
                        <Route path='/' element={<Welcome/>} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/categories' element={<Categories/>} />
                        <Route path='/todo' element={<ToDos />} />
                    </Routes>
                    <Footer/>
                </Router>
            </AuthProvider>
        </div>
    )
}

export default App
