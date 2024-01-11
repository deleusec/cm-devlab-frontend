import Job from "@/types/Job";
import { useEffect, useState } from "react";

interface JobStats {
    min: string,
    max: string,
    avg: string
}

export default function JobCard({ jobs }: { jobs: Job[] }) {
    const [stats, setStats] = useState<JobStats>()

    useEffect(() => {
        const stats = JobScoreStats(jobs)
        setStats(stats)
    }, [jobs])

    return stats && (
        <div className="bg-white p-6 rounded-xl w-1/2 space-y-6">
            <div>
                <h4 className="mb-6">Moyenne des score métier :</h4>
                <span className="font-semibold text-5xl">{stats.avg}</span>
            </div>
            <div className="w-full border border-gray-200"></div>
            <div className="flex">
                <div className="w-full">
                    <h4 className="mb-4">Score métier min :</h4>
                    <span className="font-semibold text-4xl">{stats.min}</span>
                </div>
                <div className="w-full">
                    <h4 className="mb-4">Score métier max :</h4>
                    <span className="font-semibold text-4xl">{stats.max}</span>
                </div>
            </div>
        </div>
    )
}

const JobScoreStats = (jobs: Job[]): JobStats => {
    const jobScores: number[] = jobs.map((job: Job) => {
        return job.job_score
    })
    const min: string = Math.min.apply(null, jobScores).toFixed(2)
    const max: string = Math.max.apply(null, jobScores).toFixed(2)
    const sum: number = jobScores.reduce((total, value) => (total + value), 0)
    const avg: string = (sum / jobScores.length).toFixed(2)

    return { min, max, avg }
}