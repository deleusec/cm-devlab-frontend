import { useState } from 'react';
import axios from 'axios';

import CardApp from "@/components/app/CardApp";
import FormInput from "@/components/form/FormInput";
import FormLabel from "@/components/form/FormLabel";
import FormTextArea from "@/components/form/FormTextArea";
import FormCheckbox from '@/components/form/FormCheckbox';

function JobsCreate() {
    const [jobName, setJobName] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    const [jobFactors, setJobFactors] = useState({
        physical: false,
        night_shift: false,
    });

    const handleSubmit = () => {
        axios.post('http://localhost:3011/jobs', {
            "name": jobName,
            "description": jobDescription,
            "job_field": null,
            "physical": jobFactors.physical,
            "night_shift": jobFactors.night_shift
        }).then((res) => {
            console.log(res);
        });
    }

    return (
        <div className="bg-light-gray min-h-body flex w-full justify-center py-[50px]">
            <CardApp title="Nouveau Job">
                <div className='space-y-6 lg:w-1/2 min-w-[300px] mb-20'>
                    <FormLabel title='Nom' for="jobName">
                        <FormInput type="text" name="jobName" id="jobName" value={jobName} onChange={(e) => setJobName(e.target.value)} />
                    </FormLabel>
                    <FormLabel title='Description' for="jobDescription">
                        <FormTextArea rows={6} name="jobDescription" id="jobDescription" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
                    </FormLabel>
                    <div>
                        <label htmlFor="nightShift" className="flex items-center mb-2 cursor-pointer w-fit" onClick={() => setJobFactors({ ...jobFactors, night_shift: !jobFactors.night_shift })}>
                            <FormCheckbox name="nightShift" id="nightShift" checked={jobFactors.night_shift}  />
                            <span className="mr-2">Travail de nuit</span>
                        </label>

                        <label htmlFor="physicalFactor" className="flex items-center mb-2 cursor-pointer w-fit" onClick={() => setJobFactors({ ...jobFactors, physical: !jobFactors.physical })}>
                            <FormCheckbox name="physicalFactor" id="physicalFactor" checked={jobFactors.physical}  />
                            <span className="mr-2">Travail physique</span>
                        </label>
                    </div>

                    <div className='flex justify-end'>
                        <button className='bg-secondary hover:bg-secondary-light active:bg-secondary text-white px-4 py-2 rounded-md' onClick={handleSubmit}>Créer</button>
                    </div>
                </div>
            </CardApp>
        </div>
    );
}

export default JobsCreate;