import { lazy, Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import Header from './components/Header';
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/contact'));

function App() {


  return (
    <>
      <Router>
      <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Suspense>

      </Router>
    </>
  )
}

export default App
