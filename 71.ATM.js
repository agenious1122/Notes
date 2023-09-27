"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
class ATM {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    checkBalance() {
        console.log(`Your current balance is $${this.balance.toFixed(2)}`);
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount.toFixed(2)}`);
            this.checkBalance();
        }
        else {
            console.log('Invalid deposit amount.');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount.toFixed(2)}`);
            this.checkBalance();
        }
        else {
            console.log('Invalid withdrawal amount or insufficient balance.');
        }
    }
}
function main() {
    const initialBalance = 1000; // Set an initial balance for the ATM
    const atm = new ATM(initialBalance);
    while (true) {
        console.log('\nATM Menu:');
        console.log('1. Check Balance');
        console.log('2. Deposit');
        console.log('3. Withdraw');
        console.log('4. Exit');
        const choice = prompt('Enter your choice: ');
        switch (choice) {
            case '1':
                atm.checkBalance();
                break;
            case '2':
                const depositAmount = parseFloat(prompt('Enter the deposit amount: '));
                atm.deposit(depositAmount);
                break;
            case '3':
                const withdrawalAmount = parseFloat(prompt('Enter the withdrawal amount: '));
                atm.withdraw(withdrawalAmount);
                break;
            case '4':
                console.log('Thank you for using the ATM. Goodbye!');
                return;
            default:
                console.log('Invalid choice. Please select a valid option.');
        }
    }
}
main();
