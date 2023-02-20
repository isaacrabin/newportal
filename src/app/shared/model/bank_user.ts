export interface BankUser {
    id: string;
    first_name?: string;
    last_name?: string;
    other_name?: string;
    date_of_being?: string;
    email_address?: string;
    gender?: number;
    identity_type_id?: number;
    image?: string;
    is_enabled?: boolean;
    nationality?: string;
    number?: string;
    phone_number?: string;
}

export interface BankUserPagination {
    first: boolean;
    last: boolean;
    number: number;
    size: number;
    sort: BankUser;
    number_of_elements: number;
    total_pages: number;
    total_elements: number;
}

export interface BankUserSort {
    unsorted: boolean;
    sorted: boolean;
    empty: number;
}
