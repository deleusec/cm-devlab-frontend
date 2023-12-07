import Layout from './components/layouts/Layout'

// React Router
import { Outlet } from "react-router-dom";

function App() {

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App
