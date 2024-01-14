import Agent from "@/types/Agent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardApp from "@/components/app/CardApp";

function Agent() {
    const { id } = useParams();
    const [agent, setAgent] = useState({} as Agent);

    useEffect(() => {
        axios.get(`http://localhost:3011/agents/${id}`).then((response) => {
            const age = new Date().getFullYear() - new Date(response.data.birthdate).getFullYear();
            response.data.age = age;
            response.data.birthdate = new Date(response.data.birthdate).toLocaleDateString('fr-FR');
            response.data.contract_start = new Date(response.data.contract_start).toLocaleDateString('fr-FR');
            response.data.contract_end = new Date(response.data.contract_end).toLocaleDateString('fr-FR');
            
            setAgent(response.data);
        });
    }, [id]);


    return (
        <>
            <div className='flex flex-col gap-3 p-[50px]'>
                <div className='flex flex-col gap-3'>
                    <div className="flex gap-3">    
                        <CardApp>
                            <div className='flex flex-col gap-3'>
                                <div className='flex gap-3'>
                                    <h2>{agent.firstname} {agent.lastname}</h2>
                                </div>
                                <div className='flex gap-3'>
                                    <p className='text-gray'>Email :</p>
                                    <p>{agent.email}</p>
                                </div>
                                <div className='flex gap-3'>
                                    <p className='text-gray'>Téléphone :</p>
                                    <p>{agent.phone}</p>
                                </div>
                                <div className='flex gap-3'>
                                    <p className='text-gray'>Date de naissance :</p>
                                    <p>{agent.birthdate}</p>
                                </div>
                                <div className='flex gap-3'>
                                    <p className='text-gray'>Age :</p>
                                    <p>{agent.age} ans</p>
                                </div>
                                <div className='flex gap-3'>
                                    <p className='text-gray'>Type de contrat :</p>
                                    <p>{agent.contract_type}</p>
                                </div>
                                <div className='flex gap-3'>
                                    <p className='text-gray'>Début du contrat :</p>
                                    <p>{agent.contract_start}</p>
                                </div>
                                <div className='flex gap-3'>
                                    <p className='text-gray'>Fin du contrat :</p>
                                    <p>{agent.contract_end}</p>
                                </div>
                                <div className='flex gap-3'>
                                    <p className='text-gray'>Ancienneté :</p>
                                    <p>{agent.job_seniority} ans</p>
                                </div>
                            </div>
                        </CardApp>

                    </div>
                </div>
            </div>
        </>
    );
}


export default Agent;