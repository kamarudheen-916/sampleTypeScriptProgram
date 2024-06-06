import { Account, UserDetails } from './Account';

export class SavingsAccount extends Account {
    constructor() {
        super();
    }

    getAccount(accountNumber: string): UserDetails | undefined {
        return this.userDetails.find((item) => item.accountNumber === accountNumber);
    }

    createNewAccount(accountNumber: string, amount: number): string {
        const accountExists = this.getAccount(accountNumber);
        if (accountExists) {
            return 'Account with this number already exists';
        }

        this.userDetails.push({ accountNumber, amount });
        return 'Your account has been added successfully. Thank you!';
    }

    deposit(amount: number, accountNumber: string): UserDetails | undefined {
        const acc = this.getAccount(accountNumber);
        if (acc && amount > 0) {
            acc.amount += amount;
            return acc;
        }
        return undefined;
    }

    withdraw(amount: number, accountNumber: string): UserDetails | undefined {
        const acc = this.getAccount(accountNumber);
        if (acc && amount > 0 && amount <= acc.amount) {
            acc.amount -= amount;
            return acc;
        }
        return undefined;
    }
}
