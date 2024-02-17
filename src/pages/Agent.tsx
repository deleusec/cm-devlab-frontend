import Agent from "@/types/Agent";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CardApp from "@/components/app/CardApp";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import OverlayApp from "@/components/app/OverlayApp";
import FormLabel from "@/components/form/FormLabel";
import FormButton from "@/components/form/FormButton";
import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import BackLinkApp from "@/components/app/BackLinkApp";

function Agent() {
    const { id } = useParams();
    const [agent, setAgent] = useState({} as Agent);
    const [overlay, setOverlay] = useState(false);
    const [overlayDelete, setOverlayDelete] = useState(false);

    const [agentName, setAgentName] = useState('');
    const [agentLastName, setAgentLastName] = useState('');
    const [agentBirthdate, setAgentBirthdate] = useState('');
    const [agentEmail, setAgentEmail] = useState('');
    const [agentPhone, setAgentPhone] = useState('');
    const [contractType, setContractType] = useState<"CDI" | "CDD" | "Stage/Alternance">('CDI');
    const [jobStartDate, setJobStartDate] = useState('');
    const [jobEndDate, setJobEndDate] = useState('');
    const [agentExperience, setAgentExperience] = useState('');
    const [jobs, setJobs] = useState([]);
    const [jobId, setJobId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3011/agents/${id}`).then((response) => {
            const age = new Date().getFullYear() - new Date(response.data.birthdate).getFullYear();
            response.data.age = age;
            setAgentBirthdate(new Date(response.data.birthdate).toISOString().split('T')[0]);
            response.data.birthdate = new Date(response.data.birthdate).toLocaleDateString('fr-FR');
            setJobStartDate(new Date(response.data.contract_start).toISOString().split('T')[0]);
            response.data.contract_start = new Date(response.data.contract_start).toLocaleDateString('fr-FR');
            setJobEndDate(new Date(response.data.contract_end).toISOString().split('T')[0]);
            if (response.data.contract_end) {
                response.data.contract_end = new Date(response.data.contract_end).toLocaleDateString('fr-FR');
            } else {
                response.data.contract_end = 'Indéterminé';
            }

            setAgent(response.data);
            setAgentName(response.data.firstname);
            setAgentLastName(response.data.lastname);
            setAgentEmail(response.data.email);
            setAgentPhone(response.data.phone);
            setContractType(response.data.contract_type);
            setAgentExperience(response.data.job_seniority);
            setJobId(response.data.JobId.toString());
        });
    }, [id]);

    useEffect(() => {
        axios.get('http://localhost:3011/jobs').then((res) => {
            setJobs(res.data);
        });
    }, []);


    const handleSubmit = () => {
        console.log(agentName, agentLastName, agentBirthdate, agentEmail, agentPhone, contractType, jobStartDate, jobEndDate, agentExperience, jobId);

        axios.put(`http://localhost:3011/agents/${id}`, {
            firstname: agentName,
            lastname: agentLastName,
            birthdate: agentBirthdate,
            email: agentEmail,
            phone: agentPhone,
            contract_type: contractType,
            contract_start: jobStartDate,
            contract_end: jobEndDate,
            job_seniority: agentExperience,
            JobId: jobId
        }).then(() => {
            navigate('/agents');
        }).catch((err) => {
            console.log(err);
        });

    }
    const formatPhone = (phone: string) => {
        // Remplacer +33 par 0
        let formatted = phone.replace(/^\+33/, '0');

        // Supprimer tous les caractères non numériques
        formatted = formatted.replace(/\D/g, '');

        // Appliquer le formatage
        return formatted.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5').trim();
    }


    return (
        <>
            <div className='flex flex-col gap-3 p-[50px]'>
                <div className='flex flex-col gap-3 '>
                    <div className='mb-[20px]'>
                        <BackLinkApp />
                    </div>
                    <div className="flex gap-3 relative">
                        <CardApp>
                            <div className={"flex absolute right-4 top-4 rounded-full p-2 space-x-2"}>
                                <button onClick={() => setOverlay(true)} title="Modifier">
                                    <PencilSquareIcon className='h-6 w-6 text-secondary' />
                                </button>
                                <button onClick={() => setOverlayDelete(true)} title="Supprimer">
                                    <TrashIcon className='h-6 w-6 text-secondary' />
                                </button>
                            </div>
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
            <OverlayApp show={overlayDelete} setShow={setOverlayDelete} title="Supprimer l'Agent" size="small">
                <div className='space-y-6 min-w-[300px]'>
                    <p>Voulez-vous vraiment supprimer cet agent ?</p>
                    <div className='flex justify-center gap-2 py-5'>
                        <FormButton width={"full"} theme="light" onClick={() => setOverlayDelete(false)}>Annuler</FormButton>
                        <FormButton width={"full"} color={"red"} onClick={() => {
                            axios.delete(`http://localhost:3011/agents/${id}`).then(() => {
                                navigate('/agents');
                            });
                        }}>Supprimer</FormButton>
                    </div>
                </div>
            </OverlayApp>
            <OverlayApp show={overlay} setShow={setOverlay} title="Modifier l'Agent" >
                <div className='space-y-6 min-w-[300px] mb-20 '>
                    <div className='flex flex-wrap w-full gap-6'>
                        <FormLabel title='Prénom' for="agentName">
                            <FormInput type="text" name="agentName" id="agentName" value={agentName} onChange={(e) => setAgentName(e.target.value)} />
                        </FormLabel>
                        <FormLabel title='Nom' for="agentLastName">
                            <FormInput type="text" name="agentLastName" id="agentLastName" value={agentLastName} onChange={(e) => setAgentLastName(e.target.value)} />
                        </FormLabel>
                    </div>

                    <FormLabel title='Date de naissance' for="agentBirthdate">
                        <FormInput type="date" name="agentBirthdate" id="agentBirthdate" value={agentBirthdate} onChange={(e) => setAgentBirthdate(e.target.value)} />
                    </FormLabel>

                    <FormLabel title='Email' for="agentEmail">
                        <FormInput type="email" name="agentEmail" id="agentEmail" value={agentEmail} onChange={(e) => setAgentEmail(e.target.value)} />
                    </FormLabel>

                    <FormLabel title='Téléphone' for="agentPhone">
                        <FormInput type="tel" name="agentPhone" id="agentPhone" value={agentPhone} onChange={(e) => setAgentPhone(e.target.value)} onBlur={(e) => setAgentPhone(formatPhone(e.target.value))} />
                    </FormLabel>
                </div>
                <div className='space-y-6 min-w-[300px]'>

                    <FormLabel title='Poste' for="jobId">
                        <select id="jobId" name="jobId" value={jobId} onChange={(e) => setJobId(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-secondary focus:border-secondary block w-full p-2.5 capitalize">
                            <option value="">-- Choisir --</option>
                            {jobs.map((job: { name: string, id: string }) => (
                                <option key={job.id} value={job.id}>{job.name}</option>
                            ))}
                        </select>
                    </FormLabel>


                    <div className='flex flex-wrap gap-6'>
                        <FormLabel title="Années d'expérience" for="agentExperience">
                            <FormInput type="number" name="agentExperience" id="agentExperience" value={agentExperience} onChange={(e) => setAgentExperience(e.target.value)} />
                        </FormLabel>

                        <FormLabel title='Type de contrat' for="contractType">
                            <FormSelect options={["CDI", "CDD", "Stage/Alternance"]} name="contractType" id="contractType" value={contractType} onChange={(e) => setContractType(e.target.value as "CDI" | "CDD" | "Stage/Alternance")} />
                        </FormLabel>
                    </div>

                    <div className='flex flex-wrap gap-6'>
                        <FormLabel title='Date de début' for="jobStartDate">
                            <FormInput type="date" name="jobStartDate" id="jobStartDate" value={jobStartDate} onChange={(e) => setJobStartDate(e.target.value)} />
                        </FormLabel>

                        {contractType === "CDD" || contractType === "Stage/Alternance" ? <FormLabel title='Date de fin' for="jobEndDate">
                            <FormInput type="date" name="jobEndDate" id="jobEndDate" value={jobEndDate} onChange={(e) => setJobEndDate(e.target.value)} />
                        </FormLabel> : null}
                    </div>

                    <div className='flex justify-end'>
                        <FormButton onClick={handleSubmit}>Modifier</FormButton>
                    </div>

                </div>
            </OverlayApp>
        </>
    );
}


export default Agent;