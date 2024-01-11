import { Agent } from "@/types/Agent";
import { useEffect, useState } from "react";

interface AgentStats {
    min: string,
    max: string,
    avg: string
}

export default function AgentCard({ agents }: { agents: Agent[] }) {
    const [stats, setStats] = useState<AgentStats>()

    useEffect(() => {
        const stats = AgentScoreStats(agents)
        setStats(stats)
    }, [agents])

    return stats && (
        <div className="bg-white p-6 rounded-xl w-1/2 space-y-6">
            <div>
                <h4 className="mb-6">Moyenne des score agent :</h4>
                <span className="font-semibold text-5xl">{stats.avg}</span>
            </div>
            <div className="w-full border border-gray-200"></div>
            <div className="flex">
                <div className="w-full">
                    <h4 className="mb-4">Score agent min :</h4>
                    <span className="font-semibold text-4xl">{stats.min}</span>
                </div>
                <div className="w-full">
                    <h4 className="mb-4">Score agent max :</h4>
                    <span className="font-semibold text-4xl">{stats.max}</span>
                </div>
            </div>
        </div>
    )
}

const AgentScoreStats = (agents: Agent[]): AgentStats => {
    const wearScores: number[] = agents.map((agent: Agent) => {
        return agent.wear_score
    })
    const min: string = Math.min.apply(null, wearScores).toFixed(2)
    const max: string = Math.max.apply(null, wearScores).toFixed(2)
    const sum: number = wearScores.reduce((total, value) => (total + value), 0)
    const avg: string = (sum / wearScores.length).toFixed(2)

    return { min, max, avg }
}