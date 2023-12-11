import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className='w-full min-h-body'>
                {children}
            </main>
        </>
    );
}

export default Layout;