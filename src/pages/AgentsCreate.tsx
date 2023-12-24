import { useEffect, useState } from 'react';
import axios from 'axios';

import CardApp from "@/components/app/CardApp";
import FormInput from "@/components/form/FormInput";
// import FormTextArea from "@/components/form/FormTextArea";
import FormLabel from '@/components/form/FormLabel';
import FormSelect from '@/components/form/FormSelect';

function AgentsCreate() {
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

    useEffect( () => {
        axios.get('http://localhost:3011/jobs').then((res) => {
            setJobs(res.data);
            console.log(res.data);

        });

    }, []);

    return (
        <div className="bg-light-gray min-h-body flex w-full justify-center py-[50px]">
            <CardApp title="Nouvel Agent">
                <div className='space-y-6 lg:w-1/2 min-w-[300px] mb-20'>
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
                        <FormInput type="tel" name="agentPhone" id="agentPhone" value={agentPhone} onChange={(e) => setAgentPhone(e.target.value)} />
                    </FormLabel>
                </div>
                <div className='space-y-6 lg:w-1/2 min-w-[300px]'>

                    <FormLabel title='Emploi' for="jobId">
                        <FormSelect options={jobs.map((job: any) => job.name)} defaultEmpty={true} name="jobId" id="jobId" value={jobId} onChange={(e) => setJobId(e.target.value)} />
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
                </div>
            </CardApp>
        </div>
    );
}

export default AgentsCreate;