import { Profile } from "./Profile";

export interface Profiles {
    admin: Array<Profile>;
    guardian: Array<Profile>;
    school_admin: Array<Profile>;
    student: Array<Profile>;
    teacher: Array<Profile>;
    bank_admin: Array<Profile>
}