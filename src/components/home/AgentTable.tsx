import { GridColDef } from "@mui/x-data-grid";
import Agent from '@/types/Agent';
import DataTable from "@/components/app/DataTable";
import SearchInputApp from "@/components/app/SearchInputApp";
import { useEffect, useState } from "react";
import colorScore from "@/utils/colorScore";


export default function AgentTable({ agents }: { agents: Agent[] }) {
    const [filteredAgents, setFilteredAgents] = useState<Agent[]>([])
    const [searchAgent, setSearchAgent] = useState('');
    const [scores, setScores] = useState<number[]>([]);

    const handleSearch = async (value: string) => {
        setSearchAgent(value);
    }

    useEffect(() => {
        const filteredAgents = agents.filter((agent: Agent) => {
            //filter by fullname, jobname, and wear_score
            return agent.fullname?.toLowerCase().includes(searchAgent.toLowerCase()) || agent.jobname?.toLowerCase().includes(searchAgent.toLowerCase()) || agent.wear_score?.toString().toLowerCase().includes(searchAgent.toLowerCase());
        });
        setFilteredAgents(filteredAgents.sort((a, b) => a.wear_score - b.wear_score).reverse())
        setScores(agents.map((agent: Agent) => agent.wear_score));
    }, [agents, searchAgent])

    const columns: GridColDef[] = [
        { field: 'fullname', headerName: 'Nom de l\'agent', flex: 1, minWidth: 150, editable: false, headerClassName: 'bg-secondary text-white' },
        { field: 'jobname', headerName: 'Poste', flex: 1, minWidth: 150, editable: false, headerClassName: 'bg-secondary text-white' },
        {
            field: 'wear_score', headerName: 'Score usure', flex: 1, minWidth: 150, maxWidth: 100, align: 'center', editable: false, headerClassName: 'bg-secondary text-white', valueFormatter: (params) => params.value.toFixed(2), renderCell(params) {
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
            <div className="flex justify-between mb-6">
                <h3>Liste des agents</h3>
                <div>
                    <SearchInputApp onChange={(e) => handleSearch(e.target.value)} value={searchAgent} />
                </div>
            </div>
            <DataTable rows={filteredAgents} columns={columns} redirectPath="agents" hideFooter height="70%" />
        </>
    )
}
