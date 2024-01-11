import AgentCard from "@/components/home/AgentCard";
import AgentTable from "@/components/home/AgentTable";
import JobCard from "@/components/home/JobCard";
import JobTable from "@/components/home/JobTable";
import { Agent } from "@/types/Agent";
import Job from "@/types/Job";
import formatDate from "@/utils/formatDate";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
    const [agents, setAgents] = useState<Agent[]>([]);
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        const fetchAgent = async () => {
            await axios.get(`http://localhost:3011/agents`).then(res => res.data).then((res) => {
                const allAgents: Agent[] = res.map(responseTraitement)
                setAgents(allAgents);
            });
        }
        fetchAgent()
    }, []);

    useEffect(() => {
        const fetchjob = async () => {
            await axios.get(`http://localhost:3011/jobs`).then(res => res.data).then((res) => {
                setJobs(res);
            });
        }
        fetchjob()
    })

    return (
        <div className="p-12 space-y-9 text-secondary">
            <h1>Bienvenue sur <span className=" font-bold">Bridge</span></h1>
            <div className="flex h-2/6 space-x-6">
                <AgentCard agents={agents} />
                <JobCard jobs={jobs} />
                <div className="bg-white p-6 rounded-xl w-2/6 space-y-6">
                    <div>
                        <h4 className="mb-6">Agent ajoutés :</h4>
                        <span className="font-semibold text-5xl">{agents.length}</span>
                    </div>
                    <div>
                        <h4 className="mb-6">Métier ajoutés :</h4>
                        <span className="font-semibold text-5xl">{jobs.length}</span>
                    </div>
                </div>
            </div>
            <div className="flex w-full space-x-6 h-[350px]">
                <div className="bg-white p-6 rounded-xl w-3/5">
                    <AgentTable agents={agents}></AgentTable>
                </div>
                <div className="bg-white p-6 rounded-xl w-2/5">
                    <JobTable jobs={jobs}></JobTable>
                </div>
            </div>
        </div>
    );
}

const responseTraitement = (agent: Agent) => {
    //Add age, birthdate, contract_start, contract_end?, fullname, jobname to agent
    const birthdate = new Date(agent.birthdate);
    const contract_start = new Date(agent.contract_start);
    const contract_end = new Date(agent.contract_end);
    const age = new Date().getFullYear() - birthdate.getFullYear();

    if (agent.contract_end) {
        agent.contract_end = formatDate(contract_end);
    }

    return { ...agent, age: age, birthdate: formatDate(birthdate), contract_start: formatDate(contract_start), contract_end: contract_end ? formatDate(contract_end) : null, fullname: `${agent.firstname} ${agent.lastname}`, jobname: agent.Job.name }
}

export default Home;