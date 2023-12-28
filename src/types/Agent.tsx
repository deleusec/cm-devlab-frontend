
export interface Agent {
    id: number;
    firstname: string;
    lastname: string;
    email?: string;
    phone?: string;
    age: number;
    birthdate: string;
    contract_type: string;
    contract_start: string;
    contract_end: string;
    job_seniority: number;
    job: object;
    agent_score: number;
    wear_score: number;
}