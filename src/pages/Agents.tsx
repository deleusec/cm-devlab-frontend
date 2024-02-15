import { useEffect, useState } from 'react';
import ButtonApp from '@/components/app/ButtonApp';
import CardApp from '@/components/app/CardApp';
import { ListBulletIcon, BookmarkIcon, ChartBarIcon, PlusIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import SearchInputApp from '@/components/app/SearchInputApp';
import DataTable from '@/components/app/DataTable';
import axios from 'axios';
import { GridColDef } from '@mui/x-data-grid';
import Agent from '@/types/Agent';
import formatDate from '@/utils/formatDate';
import colorScore from '@/utils/colorScore';

function Agents() {
    const [content, setContent] = useState<'list' | 'stats' | 'bookmarks'>('list');
    const [searchAgent, setSearchAgent] = useState('');
    const [agents, setAgents] = useState<Agent[]>([]);
    const [scores, setScores] = useState<number[]>([]);

    const handleSearch = async (value: string) => {
        setSearchAgent(value);
        await axios.get(`http://localhost:3011/agents`).then(res => res.data).then((res) => {
            const filteredAgents = res.filter((agent: Agent) => {
                // filter by name and lastname and email and phone  and birthdate
                const birthdate = new Date(agent.birthdate);
                const contract_start = new Date(agent.contract_start);
                const contract_end = new Date(agent.contract_end);
                const age = new Date().getFullYear() - birthdate.getFullYear();
                agent.age = age;
                agent.birthdate = formatDate(birthdate);
                agent.contract_start = formatDate(contract_start);
                if (agent.contract_end) {
                    agent.contract_end = formatDate(contract_end);
                }
                const fullName = `${agent.firstname} ${agent.lastname}`;
                return fullName.toLowerCase().includes(value.toLowerCase()) || agent.email?.toLowerCase().includes(value.toLowerCase()) || agent.phone?.toLowerCase().includes(value.toLowerCase()) || agent.birthdate.toLowerCase().includes(value.toLowerCase());
            });
            setAgents(filteredAgents.sort((a: Agent, b: Agent) => a.wear_score - b.wear_score).reverse());
        });
    }

    useEffect(() => {
        axios.get('http://localhost:3011/agents').then((res) => {
            res.data.forEach((agent: Agent) => {
                const birthdate = new Date(agent.birthdate);
                const contract_start = new Date(agent.contract_start);
                const contract_end = new Date(agent.contract_end);
                const age = new Date().getFullYear() - birthdate.getFullYear();
                agent.age = age;
                agent.birthdate = formatDate(birthdate);
                agent.contract_start = formatDate(contract_start);
                if (agent.contract_end) {
                    agent.contract_end = formatDate(contract_end);
                }

            }
            );
            setAgents(res.data.sort((a: Agent, b: Agent) => a.wear_score - b.wear_score).reverse());
            setScores(res.data.map((agent: Agent) => agent.wear_score));
        });
    }, []);

    const columns: GridColDef[] = [
        { field: 'firstname', headerName: 'Prénom', flex: 1, minWidth: 100, maxWidth: 200, editable: false, headerClassName: 'bg-secondary text-white' },
        { field: 'lastname', headerName: 'Nom', flex: 1, minWidth: 100, maxWidth: 200, editable: false, headerClassName: 'bg-secondary text-white' },
        { field: 'birthdate', headerName: 'Date de naissance', flex: 1, minWidth: 200, editable: false, headerClassName: 'bg-secondary text-white', valueGetter: (params) => params.row.birthdate + ' (' + params.row.age + 'ans)' },
        { field: 'email', headerName: 'Email', flex: 1, minWidth: 200, editable: false, headerClassName: 'bg-secondary text-white' },
        { field: 'phone', headerName: 'Téléphone', flex: 1, minWidth: 200, editable: false, headerClassName: 'bg-secondary text-white' },
        {
            field: 'wear_score', headerName: 'Score usure', minWidth: 100, editable: false, headerClassName: 'bg-secondary text-white', valueFormatter: (params) => params.value.toFixed(2), align: 'center', renderCell(params) {
                const color = colorScore(params.value, scores);
                return (
                    <div className='flex justify-center items-center h-full w-full'>
                        <div className=' text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-opacity-10' style={{ backgroundColor: color.backgroundColor + "22", border: "1px solid " + color.textColor }}>
                            <span style={{ color: color.textColor }}>{params.value.toFixed(1)}</span>
                        </div>
                    </div>
                )

            },
        },
    ];

    return (
        <>
            <div className='flex flex-col gap-3 p-[50px] '>
                <div className='flex gap-3'>
                    <UsersIcon className='w-5 stroke-2' />
                    <h2>Agents</h2>
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
                    <ButtonApp theme={'light'} active={content === 'bookmarks' && true} text="Archivés" onClick={() => setContent('bookmarks')}>
                        <BookmarkIcon className='w-4 stroke-2' />
                    </ButtonApp>
                </div>
                {content === 'list' && <div className="min-h-[425px] px-[50px]">
                    <CardApp title='Liste des agents'>
                        <div className='flex gap-4 pb-[50px]'>
                            <SearchInputApp onChange={(e) => handleSearch(e.target.value)} value={searchAgent} />
                            <div className='flex-1'></div>
                            <Link to={'/agents/create'}>
                                <ButtonApp theme="light" text="Ajouter un agent">
                                    <PlusIcon className='w-4 stroke-2' />
                                </ButtonApp>
                            </Link>
                        </div>

                        <DataTable rows={agents} columns={columns} redirectPath='agents' />
                    </CardApp>
                </div>}
                {content === 'stats' && <div className="h-[425px]">
                    Stats des agents
                </div>}
                {content === 'bookmarks' && <div className="h-[425px]">
                    Agents archivés
                </div>}

            </div>
        </>
    );
}

export default Agents;