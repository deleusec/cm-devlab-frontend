import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardApp from "@/components/app/CardApp";
import FormInput from "@/components/form/FormInput";
import FormLabel from "@/components/form/FormLabel";
import FormTextArea from "@/components/form/FormTextArea";
import FormCheckbox from '@/components/form/FormCheckbox';
import BackLinkApp from '@/components/app/BackLinkApp';
import FormButton from '@/components/form/FormButton';

function JobsCreate() {
    const [jobName, setJobName] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const navigate = useNavigate();

    const [jobFactors, setJobFactors] = useState({
        manual_handling: false,
        awkward_postures: false,
        mechanical_vibrations: false,
        hazardous_chemicals: false,
        hyperbaric_environment: false,
        extreme_temperatures: false,
        noise: false,
        night_shift: false,
        alternating_shifts: false,
        repetitive_work: false,
    });

    const handleSubmit = async () => {
        await axios.post('http://localhost:3011/jobs', {
            "name": jobName,
            "description": jobDescription,
            "manual_handling": jobFactors.manual_handling,
            "awkward_postures": jobFactors.awkward_postures,
            "mechanical_vibrations": jobFactors.mechanical_vibrations,
            "hazardous_chemicals": jobFactors.hazardous_chemicals,
            "hyperbaric_environment": jobFactors.hyperbaric_environment,
            "extreme_temperatures": jobFactors.extreme_temperatures,
            "noise": jobFactors.noise,
            "night_shift": jobFactors.night_shift,
            "alternating_shifts": jobFactors.alternating_shifts,
            "repetitive_work": jobFactors.repetitive_work,
        }).then((res) => {
            console.log(res);
        });

        navigate("/metiers");

    }

    return (
        <div className="flex flex-col w-full bg-gray-light min-h-body justify-center p-[50px]">
            <div className='mb-[20px]'>
                <BackLinkApp />
            </div>
            <CardApp title="Nouveau Job">
                <div className='space-y-6 lg:w-1/2 min-w-[300px] mb-20'>
                    <FormLabel title='Nom' for="jobName">
                        <FormInput type="text" name="jobName" id="jobName" value={jobName} onChange={(e) => setJobName(e.target.value)} />
                    </FormLabel>
                    <FormLabel title='Description' for="jobDescription">
                        <FormTextArea rows={6} name="jobDescription" id="jobDescription" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
                    </FormLabel>
                    <div>
                        <div className="flex items-center mb-2 cursor-pointer w-fit" onClick={() => setJobFactors({ ...jobFactors, manual_handling: !jobFactors.manual_handling })}>
                            <FormCheckbox name="manualHandling" id="manualHandling" checked={jobFactors.manual_handling} />
                            <span className="mr-2">Port de charges lourdes</span>
                        </div>
                        <div className="flex items-center mb-2 cursor-pointer w-fit" onClick={() => setJobFactors({ ...jobFactors, awkward_postures: !jobFactors.awkward_postures })}>
                            <FormCheckbox name="awkwardPostures" id="awkwardPostures" checked={jobFactors.awkward_postures} />
                            <span className="mr-2">Postures pénibles</span>
                        </div>
                        <div className="flex items-center mb-2 cursor-pointer w-fit" onClick={() => setJobFactors({ ...jobFactors, mechanical_vibrations: !jobFactors.mechanical_vibrations })}>
                            <FormCheckbox name="mechanicalVibrations" id="mechanicalVibrations" checked={jobFactors.mechanical_vibrations} />
                            <span className="mr-2">Vibrations mécaniques</span>
                        </div>
                        <div className="flex items-center mb-2 cursor-pointer w-fit" onClick={() => setJobFactors({ ...jobFactors, hazardous_chemicals: !jobFactors.hazardous_chemicals })}>
                            <FormCheckbox name="hazardousChemicals" id="hazardousChemicals" checked={jobFactors.hazardous_chemicals} />
                            <span className="mr-2">Agents chimiques dangereux</span>
                        </div>
                        <div className="flex items-center mb-2 cursor-pointer w-fit" onClick={() => setJobFactors({ ...jobFactors, hyperbaric_environment: !jobFactors.hyperbaric_environment })}>
                            <FormCheckbox name="hyperbaricEnvironment" id="hyperbaricEnvironment" checked={jobFactors.hyperbaric_environment} />
                            <span className="mr-2">Travail en milieu hyperbare</span>
                        </div>
                        <div className="flex items-center mb-2 cursor-pointer w-fit" onClick={() => setJobFactors({ ...jobFactors, extreme_temperatures: !jobFactors.extreme_temperatures })}>
                            <FormCheckbox name="extremeTemperatures" id="extremeTemperatures" checked={jobFactors.extreme_temperatures} />
                            <span className="mr-2">Températures extrêmes</span>
                        </div>
                        <div className="flex items-center mb-2 cursor-pointer w-fit" onClick={() => setJobFactors({ ...jobFactors, noise: !jobFactors.noise })}>
                            <FormCheckbox name="noise" id="noise" checked={jobFactors.noise} />
                            <span className="mr-2">Bruit</span>
                        </div>
                        <div className="flex items-center mb-2 cursor-pointer w-fit" onClick={() => setJobFactors({ ...jobFactors, night_shift: !jobFactors.night_shift })}>
                            <FormCheckbox name="nightShift" id="nightShift" checked={jobFactors.night_shift} />
                            <span className="mr-2">Travail de nuit</span>
                        </div>
                        <div className="flex items-center mb-2 cursor-pointer w-fit" onClick={() => setJobFactors({ ...jobFactors, alternating_shifts: !jobFactors.alternating_shifts })}>
                            <FormCheckbox name="alternatingShifts" id="alternatingShifts" checked={jobFactors.alternating_shifts} />
                            <span className="mr-2">Travail en équipes successives alternantes</span>
                        </div>
                        <div className="flex items-center mb-2 cursor-pointer w-fit" onClick={() => setJobFactors({ ...jobFactors, repetitive_work: !jobFactors.repetitive_work })}>
                            <FormCheckbox name="repetitiveWork" id="repetitiveWork" checked={jobFactors.repetitive_work} />
                            <span className="mr-2">Travail répétitif</span>
                        </div>

                    </div>

                    <div className='flex justify-end'>
                        <FormButton onClick={handleSubmit}>Créer</FormButton>
                    </div>
                </div>
            </CardApp>
        </div>
    );
}

export default JobsCreate;