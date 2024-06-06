export interface UserDetails {
    accountNumber: string;
    amount: number;
}

export abstract class Account {
    protected userDetails: UserDetails[];

    constructor() {
        this.userDetails = [];
    }

    abstract deposit(amount: number, accountNumber: string): UserDetails | undefined;
    abstract withdraw(amount: number, accountNumber: string): UserDetails | undefined;
}
