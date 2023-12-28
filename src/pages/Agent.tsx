import { Agent } from "@/types/Agent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardApp from "@/components/app/CardApp";

function Agent() {
    const { id } = useParams();
    const [agent, setAgent] = useState({} as Agent);

    useEffect(() => {
        axios.get(`http://localhost:3011/agents/${id}`).then((response) => {
            setAgent(response.data);
        });
    }, [id]);


    return (
        <>
            <div className='flex flex-col gap-3 p-[50px]'>
                <div className='flex flex-col gap-3'>
                    <CardApp >
                        <div className="space-y-2">
                            <h3>Agent</h3>
                            <p>{agent.firstname} {agent.lastname}</p>
                            <p>{agent.email}</p>
                            <p>{agent.phone}</p>
                            <p>{agent.age}</p>
                            <p>{agent.birthdate}</p>
                        </div>
                    </CardApp>
                    <CardApp >
                        <div className="space-y-2">
                            <h3>Contract</h3>
                            <p>{agent.contract_type}</p>
                            <p>{agent.contract_start}</p>
                            <p>{agent.contract_end}</p>
                        </div>
                    </CardApp>
                    <CardApp >
                        <div className="space-y-2">
                            <h3>Job</h3>
                            <p>{agent.job_seniority}</p>
                            <p></p>
                        </div>
                    </CardApp>
                    <CardApp >
                        <div className="space-y-2">
                            <h3>Score</h3>
                            <p>{agent.agent_score}</p>
                            <p>{agent.wear_score}</p>
                        </div>
                    </CardApp>
                </div>
            </div>
        </>
    );
}

export default Agent;