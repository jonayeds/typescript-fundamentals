{

    class BankAccount{
        readonly id:number; //can only read this property cant write
        public name:string;
        private _balance:number;
        constructor(id:number,name:string,balance:number){
            this._balance=balance
            this.id=id
            this.name=name
        }
        get balance(){  //getter --> to get an un accessible property   
            return this._balance
        }
        // addDeposit(amount:number){
        //     this._balance += amount 
        // }
        set deposit(amount:number){
            this._balance+=amount
        }
    }

    class StudentAccount extends BankAccount{
        constructor(id:number,name:string,balance:number){super(id,name,balance)}
    }

    const goribManusherAccount = new BankAccount(111, "Gorib", 20)
    // goribManusherAccount.addDeposit(20)
    const myBalance = goribManusherAccount.balance //to use getter --> like a usual property as the getter function name
    
    console.log(myBalance)
    goribManusherAccount.deposit = 30 //using setter --> assigning value as parameter of setter 
    console.log(goribManusherAccount.balance)

}