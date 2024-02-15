import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DataTable from "@/components/app/DataTable";
import SearchInputApp from "@/components/app/SearchInputApp";
import Job from "@/types/Job";
import colorScore from "@/utils/colorScore";


export default function JobTable({ jobs }: { jobs: Job[] }) {
    const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [scores, setScores] = useState<number[]>([]);

    const handleSearch = async (value: string) => {
        setSearchValue(value);
    }

    useEffect(() => {
        const filteredJobs = jobs.filter((job: Job) => {
            // filter by job name and job score
            return job.name?.toLowerCase().includes(searchValue.toLowerCase()) || job.job_score?.toString().includes(searchValue.toLowerCase());
        });
        setFilteredJobs(filteredJobs.sort((a, b) => a.job_score - b.job_score).reverse());
        setScores(jobs.map((job: Job) => job.job_score));
    }, [jobs, searchValue]);

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Nom du métier', flex: 1, minWidth: 150, editable: false, headerClassName: 'bg-secondary text-white' },
        { field: 'job_score', headerName: 'Score job', flex: 1, minWidth: 150, editable: false, headerClassName: 'bg-secondary text-white', valueFormatter: (params) => params.value.toFixed(2), maxWidth: 100, align:'center', renderCell(params) {
            const color = colorScore(params.value, scores);
            return (
                <div className='flex justify-center items-center h-full w-full'>
                    <div className=' text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-opacity-10' style={{ backgroundColor: color.backgroundColor + "22", border: "1px solid " + color.textColor }}>
                        <span style={{ color: color.textColor }}>{params.value}</span>
                    </div>
                </div>
            )

        },
    },
    ];

    return (
        <>
            <div className="flex justify-between mb-6">
                <h3>Liste des métiers</h3>
                <div>
                    <SearchInputApp onChange={(e) => handleSearch(e.target.value)} value={searchValue} />
                </div>
            </div>
            <DataTable rows={filteredJobs} columns={columns} redirectPath="metiers" hideFooter height="70%" />
        </>
    )
}
