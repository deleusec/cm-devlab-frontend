import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'

// React Router
import { RouterProvider } from "react-router-dom";
import router from './router'

function App() {

  return (
    <>
      <Header />

      <main className='w-full min-h-body'>
        <RouterProvider router={router} />
      </main>

      <Footer />
    </>
  )
}

export default App
