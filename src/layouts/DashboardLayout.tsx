import Sidebar from "@/components/app/Sidebar";
import Header from "@/components/app/Header";
import { Outlet } from "react-router-dom";

// Scrollbar overlay
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

function DashboardLayout() {
    return (
        <>
            <Header />
            <main className='flex w-full' >
                <Sidebar />
                <OverlayScrollbarsComponent element='div' options={{ scrollbars: { autoHide: 'scroll' } }} defer className='flex-1 h-body bg-light-background'>
                    <Outlet />
                </OverlayScrollbarsComponent>
            </main>
        </>
    );
}

export default DashboardLayout;