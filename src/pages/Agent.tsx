import { useParams } from "react-router-dom";

function Agent() {
    const { id } = useParams();
    console.log(id);
    return ( 
        <>
            <div className='flex flex-col gap-3 p-[50px]'>
                <div className='flex gap-3'>
                    <h2>Agent {id}</h2>
                </div>
            </div>
        </>
     );
}

export default Agent;