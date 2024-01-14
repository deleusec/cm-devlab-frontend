import Job from "@/types/Job";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardApp from "@/components/app/CardApp";

function Job() {
    const { id } = useParams();
    const [job, setJob] = useState({} as Job);

    useEffect(() => {
        axios.get(`http://localhost:3011/jobs/${id}`).then((response) => {
            setJob(response.data);
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
                                    <h2>{job.name}</h2>
                                </div>
                                <div className='flex gap-3'>
                                    <p className='text-gray'>Description :</p>
                                    <p>{job.description}</p>
                                </div>
                                <div className='flex gap-3'>
                                    <p className='text-gray'>Score de pénibilité :</p>
                                    <p>{job.job_score}</p>
                                </div>
                            </div>
                        </CardApp>

                    </div>
                </div>
            </div>
        </>
    );
}


export default Job;