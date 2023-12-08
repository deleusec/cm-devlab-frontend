import { BriefcaseIcon, ClockIcon, ChartBarIcon, StarIcon, BoltIcon } from '@heroicons/react/24/outline';
import ButtonApp from '@/components/ButtonApp';
import CardListing from '@/components/CardListing';

function Jobs() {
    return (
        <>
            <div className='flex flex-col gap-3 p-[50px]'>
                <h1>Bonjour Corentin !</h1>
                <div className='flex gap-3'>
                    <BriefcaseIcon className='w-5 stroke-2' />
                    <h2>Métiers</h2>
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

                <CardListing title="Liste des métiers">
                    <table>
                        <thead>
                            <tr>
                                
                            </tr>
                        </thead>
                    </table>
                </CardListing>
            </div>
        </>
    );
}

export default Jobs;