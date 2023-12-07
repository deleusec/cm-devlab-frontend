import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'

// React Router
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);
  
  return (
    <>
      <Header />

      <main className='w-full min-h-body'>
          <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App
