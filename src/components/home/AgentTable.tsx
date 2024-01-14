import { GridColDef } from "@mui/x-data-grid";
import { Agent } from '@/types/Agent';
import DataTable from "@/components/app/DataTable";
import SearchInputApp from "@/components/app/SearchInputApp";
import { useEffect, useState } from "react";


export default function AgentTable({ agents }: { agents: Agent[] }) {
    const [filteredAgents, setFilteredAgents] = useState<Agent[]>([])
    const [searchAgent, setSearchAgent] = useState('');

    const handleSearch = async (value: string) => {
        setSearchAgent(value);
    }

    useEffect(() => {
        const filteredAgents = agents.filter((agent: Agent) => {
            //filter by fullname, jobname, and wear_score
            return agent.fullname?.toLowerCase().includes(searchAgent.toLowerCase()) || agent.jobname?.toLowerCase().includes(searchAgent.toLowerCase()) || agent.wear_score?.toString().toLowerCase().includes(searchAgent.toLowerCase());
        });
        setFilteredAgents(filteredAgents)
    }, [agents, searchAgent])

    const columns: GridColDef[] = [
        { field: 'fullname', headerName: 'Nom de l\'agent', flex: 1, minWidth: 150, editable: false, headerClassName: 'bg-secondary text-white' },
        { field: 'jobname', headerName: 'Poste', flex: 1, minWidth: 150, editable: false, headerClassName: 'bg-secondary text-white' },
        { field: 'wear_score', headerName: 'Score usure', flex: 1, minWidth: 150, editable: false, headerClassName: 'bg-secondary text-white', valueFormatter: (params) => params.value.toFixed(2) },
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
