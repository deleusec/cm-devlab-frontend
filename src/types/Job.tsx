export default interface Job {
    id: number;        
    name: string;
    description: string;
    manual_handling: boolean;
    awkward_postures: boolean;
    hazardous_chemicals: boolean;
    hyperbaric_environment: boolean;
    extreme_temperatures: boolean;
    noise: boolean;
    night_shift: boolean;
    alternating_shifts: boolean;
    repetitive_work: boolean;
    job_score: number;
}
