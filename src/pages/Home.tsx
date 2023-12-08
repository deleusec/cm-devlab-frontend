import ButtonApp from '@/components/ButtonApp';
import { HomeIcon, ClockIcon, BoltIcon, StarIcon, ChartBarIcon } from '@heroicons/react/24/outline';



function Home() {
    return (
        <>
            <div className='flex flex-col gap-3 p-[50px]'>
                <h1>Bonjour Corentin !</h1>
                <div className='flex gap-3'>
                    <HomeIcon className='w-5 stroke-2' />
                    <h2>Home page</h2>
                </div>
            </div>
            <div className='min-h-full bg-light-gray '>
                <div className='flex gap-4 p-[50px]'>
                    <ButtonApp theme="dark" text="Filtres">
                        <ClockIcon className='w-4 stroke-2' />
                    </ButtonApp>
                    <ButtonApp text="Suggestions">
                        <BoltIcon className='w-4 stroke-2' />
                    </ButtonApp>
                    <ButtonApp text="Stats">
                        <ChartBarIcon className='w-4 stroke-[1.5]' />
                    </ButtonApp>
                    <ButtonApp theme="dark" text="Favoris">
                        <StarIcon className='w-4 stroke-2' />
                    </ButtonApp>
                </div>

                <div className='px-[50px]'>
                    <div className='w-full px-[50px] py-[45px] bg-white rounded-xl shadow-card'>
                        <h3 className='mb-16'>Liste des agents</h3>
                        <div className='flex gap-4'>
                            <ButtonApp theme="dark" text="Filtres">
                                <ClockIcon className='w-4 stroke-2' />
                            </ButtonApp>
                            <ButtonApp text="Suggestions">
                                <BoltIcon className='w-4 stroke-2' />
                            </ButtonApp>
                            <ButtonApp text="Stats">
                                <ChartBarIcon className='w-4 stroke-[1.5]' />
                            </ButtonApp>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;