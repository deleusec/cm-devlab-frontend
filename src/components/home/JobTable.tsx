import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DataTable from "@/components/app/DataTable";
import SearchInputApp from "@/components/app/SearchInputApp";
import Job from "@/types/Job";


export default function JobTable({ jobs }: { jobs: Job[] }) {
    const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = async (value: string) => {
        setSearchValue(value);
    }

    useEffect(() => {
        const filteredJobs = jobs.filter((job: Job) => {
            // filter by job name and job score
            return job.name?.toLowerCase().includes(searchValue.toLowerCase()) || job.job_score?.toString().includes(searchValue.toLowerCase());
        });
        setFilteredJobs(filteredJobs)
    }, [jobs, searchValue]);

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Nom du métier', flex: 1, minWidth: 150, editable: false, headerClassName: 'bg-secondary text-white' },
        { field: 'job_score', headerName: 'Score job', flex: 1, minWidth: 150, editable: false, headerClassName: 'bg-secondary text-white', valueFormatter: (params) => params.value.toFixed(2) },
    ];

    return (
        <>
            <div className="flex justify-between mb-6">
                <h3>Liste des métiers</h3>
                <div>
                    <SearchInputApp onChange={(e) => handleSearch(e.target.value)} value={searchValue} />
                </div>
            </div>
            <DataTable rows={filteredJobs} columns={columns} redirectPath="jobs" hideFooter height="70%" />
        </>
    )
}
