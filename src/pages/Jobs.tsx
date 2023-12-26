import { useState } from 'react';
import ButtonApp from '@/components/app/ButtonApp';
import CardApp from '@/components/app/CardApp';
import { BriefcaseIcon, ChartBarIcon, AdjustmentsVerticalIcon, ArrowsUpDownIcon, BookmarkIcon, ListBulletIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function Jobs() {
    const [content, setContent] = useState<'list' | 'stats' | 'bookmarks'>('list');

    return (
        <>
            <div className='flex flex-col gap-3 p-[50px]'>
                <div className='flex gap-3'>
                    <BriefcaseIcon className='w-5 stroke-2' />
                    <h2>Métiers</h2>
                </div>
            </div>
            <div className='min-h-full'>
                <div className='flex gap-4 px-[50px] pb-[50px]'>
                    <ButtonApp theme={'light'} active={content === 'list' && true} text={"Liste"} onClick={() => setContent('list')}>
                        <ListBulletIcon className='w-4 stroke-2' />
                    </ButtonApp>
                    <ButtonApp theme={'light'} active={content === 'stats' && true} text="Stats" onClick={() => setContent('stats')}>
                        <ChartBarIcon className='w-4 stroke-[1.5]' />
                    </ButtonApp>
                    <ButtonApp theme={'light'} active={content === 'bookmarks' && true} text="Archivés" onClick={() => setContent('bookmarks')}>
                        <BookmarkIcon className='w-4 stroke-2' />
                    </ButtonApp>
                </div>

                <CardApp title="Liste des métiers">
                    <div className='flex gap-4' id="sort">
                        <ButtonApp theme={"dark"} text="Filtres">
                            <AdjustmentsVerticalIcon className='w-4 stroke-2' />
                        </ButtonApp>
                        <ButtonApp theme="light" text="Trier par">
                            <ArrowsUpDownIcon className='w-4 stroke-2' />
                        </ButtonApp>

                        <div className='flex-1'></div>
                        <Link to={'/metiers/create'}>
                            <ButtonApp theme="light" text="Ajouter un métier">
                                <PlusIcon className='w-4 stroke-2' />
                            </ButtonApp>
                        </Link>
                    </div>
                    {content === 'list' && <div className="pt-[50px] h-[425px]">
                        Liste des métiers
                    </div>}
                    {content === 'stats' && <div className="pt-[50px] h-[425px]">
                        Stats des agents
                    </div>}
                    {content === 'bookmarks' && <div className="pt-[50px] h-[425px]">
                        Agents archivés
                    </div>}
                </CardApp>
            </div>
        </>
    );
}

export default Jobs;