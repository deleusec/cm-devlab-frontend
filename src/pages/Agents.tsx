import { useState } from 'react';
import ButtonApp from '@/components/ButtonApp';
import { HomeIcon, ClockIcon, BoltIcon, StarIcon, ChartBarIcon, EyeIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/outline';
import CardListing from '@/components/CardListing';
// React Router
import { Link } from 'react-router-dom';


function Agents() {
    const [toggleSort, setToggleSort] = useState(false);
    addEventListener('click', (e) => {
        if (toggleSort && !(e.target as Element)?.closest('#sort')) {
            setToggleSort(false);
        }
    });
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
                        <ButtonApp theme="light" text="Trier par" onClick={()=>setToggleSort(!toggleSort)}>
                            <AdjustmentsVerticalIcon className='w-4 stroke-2' />
                        </ButtonApp>
                        {toggleSort &&<div className='absolute top-full left-0 w-[200px] bg-white shadow-lg rounded-md'>
                            <ul className='flex flex-col gap-2'>
                                <li className='px-4 py-2 hover:bg-gray-100'>Nom</li>
                                <li className='px-4 py-2 hover:bg-gray-100'>Prénom</li>
                                <li className='px-4 py-2 hover:bg-gray-100'>Date d'embauche</li>
                                <li className='px-4 py-2 hover:bg-gray-100'>Poste</li>
                                <li className='px-4 py-2 hover:bg-gray-100'>Risques d'usure</li>
                            </ul>
                        </div>}

                    </div>

                    <table className='w-full mt-[45px]'>
                        <thead>
                            <tr className='border-b-[1px] border-[#E5E5E5]'>
                                <th></th>
                                <th className='font-semibold py-4 text-left text-gray'>Nom</th>
                                <th className='font-semibold py-4 text-left text-gray'>Prénom</th>
                                <th className='font-semibold py-4 text-left text-gray'>Email</th>
                                <th className='font-semibold py-4 text-left text-gray'>Téléphone</th>
                                <th className='font-semibold py-4 text-left text-gray'>Date de naissance</th>
                                <th className='font-semibold py-4 text-left text-gray'>Date d'embauche</th>
                                <th className='font-semibold py-4 text-left text-gray'>Poste</th>
                                <th className='font-semibold py-4 text-left text-gray'>Risques d'usure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b-[1px] border-[#E5E5E5]'>
                                <td className='py-4 text-left'><Link className='text-secondary' to={'agent/1'}><EyeIcon className='w-5 stroke-2' /></Link></td>
                                <td className='py-4 text-left'>Doe</td>
                                <td className='py-4 text-left'>John</td>
                                <td className='py-4 text-left'>
                                    <a href="mailto:johndoe@test.fr">johndoe@test.fr</a>
                                </td>
                                <td className='py-4 text-left'>06 12 34 56 78</td>
                                <td className='py-4 text-left'>01/01/1990</td>
                                <td className='py-4 text-left'>01/01/2021</td>
                                <td className='py-4 text-left'>Développeur</td>
                                <td className='py-4 text-left'>0%</td>
                            </tr>
                            <tr className='border-b-[1px] border-[#E5E5E5]'>
                                <td className='py-4 text-left'><Link className='text-secondary' to={'agent/1'}><EyeIcon className='w-5 stroke-2' /></Link></td>
                                <td className='py-4 text-left'>Doe</td>
                                <td className='py-4 text-left'>John</td>
                                <td className='py-4 text-left'>
                                    <a href="mailto:johndoe@test.fr">johndoe@test.fr</a>
                                </td>
                                <td className='py-4 text-left'>06 12 34 56 78</td>
                                <td className='py-4 text-left'>01/01/1990</td>
                                <td className='py-4 text-left'>01/01/2021</td>
                                <td className='py-4 text-left'>Développeur</td>
                                <td className='py-4 text-left'>0%</td>
                            </tr>
                            <tr className='border-b-[1px] border-[#E5E5E5]'>
                                <td className='py-4 text-left'><Link className='text-secondary' to={'agent/1'}><EyeIcon className='w-5 stroke-2' /></Link></td>
                                <td className='py-4 text-left'>Doe</td>
                                <td className='py-4 text-left'>John</td>
                                <td className='py-4 text-left'>
                                    <a href="mailto:johndoe@test.fr">johndoe@test.fr</a>
                                </td>
                                <td className='py-4 text-left'>06 12 34 56 78</td>
                                <td className='py-4 text-left'>01/01/1990</td>
                                <td className='py-4 text-left'>01/01/2021</td>
                                <td className='py-4 text-left'>Développeur</td>
                                <td className='py-4 text-left'>0%</td>
                            </tr>
                        </tbody>
                    </table>
                </CardListing>
            </div>
        </>
    );
}

export default Agents;