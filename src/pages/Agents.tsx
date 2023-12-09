import ButtonApp from '@/components/ButtonApp';
import { HomeIcon, ClockIcon, BoltIcon, StarIcon, ChartBarIcon, EyeIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/outline';
import CardListing from '@/components/CardListing';
// React Router
import { Link } from 'react-router-dom';


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

                <CardListing title="Liste des agents">
                    <div className='relative' id="sort">
                        <ButtonApp theme="light" text="Trier par">
                            <AdjustmentsVerticalIcon className='w-4 stroke-2' />
                        </ButtonApp>
                    </div>

                    <table className='w-full mt-[45px]'>
                        <thead>
                            <tr className='border-b-[1px] border-[#E5E5E5]'>
                                <th></th>
                                <th className='font-semibold py-6 text-left text-secondary'>Nom</th>
                                <th className='font-semibold py-6 text-left text-secondary'>Prénom</th>
                                <th className='font-semibold py-6 text-left text-secondary'>Email</th>
                                <th className='font-semibold py-6 text-left text-secondary'>Téléphone</th>
                                <th className='font-semibold py-6 text-left text-secondary'>Date de naissance</th>
                                <th className='font-semibold py-6 text-left text-secondary'>Date d'embauche</th>
                                <th className='font-semibold py-6 text-left text-secondary'>Poste</th>
                                <th className='font-semibold py-6 text-left text-secondary'>Risques d'usure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b-[1px] border-gray-200'>
                                <td className='text-sm text-dark-gray py-6 text-left'><Link className='text-secondary' to={'agent/1'}><EyeIcon className='w-5 stroke-2' /></Link></td>
                                <td className='text-sm text-dark-gray py-6 text-left'>Doe</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>John</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>johndoe@test.fr</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>06 12 34 56 78</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>01/01/1990</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>01/01/2021</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>Développeur</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>0%</td>
                            </tr>
                            <tr className='border-b-[1px] border-gray-200'>
                                <td className='text-sm text-dark-gray py-6 text-left'><Link className='text-secondary' to={'agent/1'}><EyeIcon className='w-5 stroke-2' /></Link></td>
                                <td className='text-sm text-dark-gray py-6 text-left'>Deleuse</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>Corentin</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>johndoe@test.fr</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>06 12 34 56 78</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>01/01/1990</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>01/01/2021</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>Développeur</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>0%</td>
                            </tr>
                            <tr className='border-b-[1px] border-gray-200'>
                                <td className='text-sm text-dark-gray py-6 text-left'><Link className='text-secondary' to={'agent/1'}><EyeIcon className='w-5 stroke-2' /></Link></td>
                                <td className='text-sm text-dark-gray py-6 text-left'>Doe</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>John</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>johndoe@test.fr</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>06 12 34 56 78</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>01/01/1990</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>01/01/2021</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>Développeur</td>
                                <td className='text-sm text-dark-gray py-6 text-left'>0%</td>
                            </tr>
                        </tbody>
                    </table>
                </CardListing>
            </div>
        </>
    );
}

export default Agents;