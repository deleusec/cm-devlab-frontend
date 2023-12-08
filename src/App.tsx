
import Layout from '@components/layouts/Layout'

// React Router
import { Outlet } from "react-router-dom";
import Sidebar from '@components/layouts/Sidebar';

// Overlayscrollbars
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

function App() {

  return (
    <Layout>
      <div className='flex h-body'>
        <Sidebar />
        <OverlayScrollbarsComponent element='div' options={{ scrollbars : { autoHide: 'scroll'}}} defer className='flex-1'>
          <Outlet />
        </OverlayScrollbarsComponent>
      </div>
    </Layout>
  )
}

export default App
