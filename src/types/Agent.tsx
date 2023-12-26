
export interface Agent {
    id: number;
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    age: number;
    birthday: string;
    contract_type: string;
    contract_start: string;
    contract_end: string;
    job_seniority: number;
    job: object;
    agent_score: number;
    weakening_score: number;
}