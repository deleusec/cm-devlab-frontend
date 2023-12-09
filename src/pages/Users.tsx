import { ArchiveBoxIcon } from '@heroicons/react/24/outline';

function Users() {
    return ( 
        <>
            <div className='flex flex-col gap-3 p-[50px]'>
                <div className='flex gap-3'>
                    <ArchiveBoxIcon className='w-5 stroke-2' />
                    <h2>Users</h2>
                </div>
            </div>
        </>
     );
}

export default Users;