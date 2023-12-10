import ButtonApp from '@/components/ButtonApp';
import { HomeIcon, ClockIcon, ListBulletIcon, BookmarkIcon, ChartBarIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/outline';
import CardListing from '@/components/CardListing';


function Agents() {
    return (
        <>
            <div className='flex flex-col gap-3 p-[50px]'>
                <h1>Bonjour Corentin !</h1>
                <div className='flex gap-3'>
                    <HomeIcon className='w-5 stroke-2' />
                    <h2>Accueil</h2>
                </div>
            </div>
            <div className='min-h-full bg-light-gray '>
                <div className='flex gap-4 p-[50px]'>
                    <ButtonApp text="Liste">
                        <ListBulletIcon className='w-4 stroke-2' />
                    </ButtonApp>
                    <ButtonApp text="Stats">
                        <ChartBarIcon className='w-4 stroke-[1.5]' />
                    </ButtonApp>
                    <ButtonApp theme="dark" text="Archivés">
                        <BookmarkIcon className='w-4 stroke-2' />
                    </ButtonApp>
                </div>

                <CardListing title="Liste des agents">
                    <div className='flex gap-4' id="sort">
                        <ButtonApp theme="dark" text="Filtres">
                            <ClockIcon className='w-4 stroke-2' />
                        </ButtonApp>
                        <ButtonApp theme="light" text="Trier par">
                            <AdjustmentsVerticalIcon className='w-4 stroke-2' />
                        </ButtonApp>
                    </div>
                </CardListing>
            </div>
        </>
    );
}

export default Agents;