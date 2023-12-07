import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className='w-full min-h-body'>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;