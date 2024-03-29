import { useState, useEffect } from 'react';
import ButtonApp from '@/components/app/ButtonApp';
import CardApp from '@/components/app/CardApp';
import { BriefcaseIcon, ChartBarIcon, ListBulletIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '@/components/app/DataTable';
import axios from 'axios';
import SearchInputApp from '@/components/app/SearchInputApp';
import Job from '@/types/Job';
import colorScore from '@/utils/colorScore';

function Jobs() {
    const [content, setContent] = useState<'list' | 'stats'>('list');
    const [jobs, setJobs] = useState([]);
    const [searchJob, setSearchJob] = useState('');
    const [scores, setScores] = useState<number[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3011/jobs').then((res) => {
            setJobs(res.data.sort((a: Job, b: Job) => a.job_score - b.job_score).reverse());
            setScores(res.data.map((job: Job) => job.job_score));
        });
    }, []);

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Nom du métier', flex: 1, minWidth: 150, editable: false, headerClassName: 'bg-secondary text-white' },
        { field: 'description', headerName: 'Description', flex: 2, minWidth: 150, editable: false, headerClassName: 'bg-secondary text-white' },
        {
            field: 'job_score', headerName: 'Score de pénibilité', type: 'number', minWidth: 150, headerAlign:'center', editable: false, headerClassName: 'bg-secondary text-white', renderCell(params) {
                const color = colorScore(params.value, scores);
                return (
                    <div className='flex justify-center items-center h-full w-full'>
                        <div className=' text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-opacity-10' style={{ backgroundColor: color.backgroundColor + "22", border: "1px solid " + color.textColor }}>
                            <span style={{ color: color.textColor }}>{params.value}</span>
                        </div>
                    </div>
                )

            },
        },
    ];

    const handleSearch = async (value: string) => {
        setSearchJob(value);
        await axios.get('http://localhost:3011/jobs').then((res) => {
            const filteredJobs = res.data.filter((job: Job) => {
                return job.name.toLowerCase().includes(value.toLowerCase());
            });
            setJobs(filteredJobs.sort((a: Job, b: Job) => a.job_score - b.job_score).reverse());
        });
    }

    return (
        <>
            <div className='flex flex-col gap-3 p-[50px]'>
                <div className='flex gap-3'>
                    <BriefcaseIcon className='w-5 stroke-2' />
                    <h2>Métiers</h2>
                </div>
            </div>
            <div className='min-h-full pb-[50px]'>
                <div className='flex gap-4 px-[50px] pb-[50px]'>
                    <ButtonApp theme={'light'} active={content === 'list' && true} text={"Liste"} onClick={() => setContent('list')}>
                        <ListBulletIcon className='w-4 stroke-2' />
                    </ButtonApp>
                    <ButtonApp theme={'light'} active={content === 'stats' && true} text="Stats" onClick={() => setContent('stats')}>
                        <ChartBarIcon className='w-4 stroke-[1.5]' />
                    </ButtonApp>
                </div>

                {content === 'list' && <div className=" min-h-[425px] px-[50px]">
                    <CardApp title="Liste des métiers">
                        <div className='flex gap-4 mb-[50px]'>
                            <SearchInputApp onChange={(e) => handleSearch(e.target.value)} value={searchJob} />
                            <div className='flex-1'></div>
                            <Link to={'/metiers/create'}>
                                <ButtonApp theme="light" text="Ajouter un métier">
                                    <PlusIcon className='w-4 stroke-2' />
                                </ButtonApp>
                            </Link>
                        </div>
                        <DataTable rows={jobs} columns={columns} redirectPath="metiers" />
                    </CardApp>
                </div>}
                {content === 'stats' && <div className=" h-[425px] px-[50px]">
                    <CardApp title='Statistiques'>
                        Statistiques
                    </CardApp>
                </div>}
            </div>
        </>
    );
}

export default Jobs;