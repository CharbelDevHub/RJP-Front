export interface Customer {
    id : number;
    name : string;
    surname : string;
}

export interface CustomerDetails {
    name : string;
    surname : string;
    accounts : Account[];
}

export interface Account {
    id : number;
    amount : number;
    transactions : Transaction[];
}

export interface Transaction {
    amount : number;
    date : string;
}

export interface OpenAccountRequest {
    customerId : number;
    initialCredit: number;
}