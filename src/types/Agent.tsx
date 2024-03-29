import Job from "./Job";

export default interface Agent {
    id: number;
    fullname?: string;
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
    Job: Job; 
    jobname?: string;
    agent_score: number;
    wear_score: number;
}