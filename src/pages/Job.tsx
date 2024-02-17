import Job from "@/types/Job";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardApp from "@/components/app/CardApp";
import { TrashIcon } from "@heroicons/react/24/outline";
import OverlayApp from "@components/app/OverlayApp.tsx";
import FormButton from "@components/form/FormButton.tsx";

function Job(){
    const { id } = useParams();
    const [job, setJob] = useState({} as Job);
    const [overlayDelete, setOverlayDelete] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3011/jobs/${id}`).then((response) => {
            setJob(response.data);
        });
    }, [id]);


    return (
        <>
            <div className='flex flex-col gap-3 p-[50px]'>
                <div className='flex flex-col gap-3 relative'>
                    <div className={"flex absolute right-4 top-4 rounded-full p-2 space-x-2"}>
                        <button onClick={() => setOverlayDelete(true)} title="Supprimer">
                            <TrashIcon className='h-6 w-6 text-secondary' />
                        </button>
                    </div>
                    <div className="flex gap-3">    
                        <CardApp>
                            <div className='flex flex-col gap-3'>
                                <div className='flex gap-3'>
                                    <h2>{job.name}</h2>
                                </div>
                                <div className='flex gap-3'>
                                        <p className='text-gray font-thin'>{job.description}</p>

                                </div>
                                <div className='flex gap-3'>
                                    <p className='text-gray font-semibold'>Score de pénibilité :</p>
                                    <p className={'text-secondary font-bold'}>{job.job_score}</p>
                                </div>
                            </div>
                        </CardApp>
                    </div>
                </div>
            </div>
            <OverlayApp size={"small"} show={overlayDelete} setShow={setOverlayDelete} title="Supprimer le métier">
                <div>
                    <p>Êtes-vous sûr de vouloir supprimer ce métier ?</p>
                    <div className='flex justify-end gap-3 mt-6 py-5'>
                        <FormButton width={"full"} onClick={() => setOverlayDelete(false)} color="secondary">Annuler</FormButton>
                        <FormButton width={"full"} onClick={() => {
                            axios.delete(`http://localhost:3011/jobs/${id}`).then(() => {
                                window.location.href = '/metiers';
                            });
                        } } color="red">Supprimer</FormButton>
                    </div>
                </div>
            </OverlayApp>
        </>
    );
}


export default Job;