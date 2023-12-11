import { useState } from 'react';
import ButtonApp from '@/components/app/ButtonApp';
import CardListing from '@/components/app/CardListing';
import { HomeIcon, ArrowsUpDownIcon, ListBulletIcon, BookmarkIcon, ChartBarIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/outline';


function Agents() {
    const [content, setContent] = useState<'list' | 'stats' | 'bookmarks'>('list');
    return (
        <>
            <div className='flex flex-col gap-3 p-[50px]'>
                <h1>Bonjour Corentin !</h1>
                <div className='flex gap-3'>
                    <HomeIcon className='w-5 stroke-2' />
                    <h2>Accueil</h2>
                </div>
            </div>
            <div className='min-h-full bg-light-gray pb-[50px]'>
                <div className='flex gap-4 p-[50px]'>
                    <ButtonApp theme={'light'} active={content === 'list' && true} text={"Liste"} onClick={()=>setContent('list')}>
                        <ListBulletIcon className='w-4 stroke-2'/>
                    </ButtonApp>
                    <ButtonApp theme={'light'} active={content === 'stats' && true} text="Stats" onClick={()=>setContent('stats')}>
                        <ChartBarIcon className='w-4 stroke-[1.5]' />
                    </ButtonApp>
                    <ButtonApp theme={'light'} active={content === 'bookmarks' && true} text="Archivés" onClick={()=>setContent('bookmarks')}>
                        <BookmarkIcon className='w-4 stroke-2' />
                    </ButtonApp>
                </div>

                <CardListing title="Liste des agents">
                    <div className='flex gap-4' id="sort">
                        <ButtonApp theme={"dark"} text="Filtres">
                            <AdjustmentsVerticalIcon className='w-4 stroke-2' />
                        </ButtonApp>
                        <ButtonApp theme="light" text="Trier par">
                            <ArrowsUpDownIcon className='w-4 stroke-2' />
                        </ButtonApp>
                    </div>
                    {content === 'list' && <div className="pt-[50px] h-[425px]">
                        Tableau des agents
                    </div>}
                    {content === 'stats' && <div className="pt-[50px] h-[425px]">
                        Stats des agents
                    </div>}
                    {content === 'bookmarks' && <div className="pt-[50px] h-[425px]">
                        Agents archivés
                    </div>}
                </CardListing>
            </div>
        </>
    );
}

export default Agents;