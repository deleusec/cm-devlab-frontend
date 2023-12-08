
import Layout from '@components/layouts/Layout'

// React Router
import { Outlet } from "react-router-dom";
import Sidebar from './components/Sidebar';

function App() {

  return (
    <Layout>
      <div className='flex h-body'>
        <Sidebar />
        <div className="flex-1 h-body overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </Layout>
  )
}

export default App
