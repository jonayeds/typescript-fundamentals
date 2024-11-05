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
        addDeposit(amount:number){
            this._balance += amount 
        }
        private getBalance(){
            return this._balance
        }
        get hiddenMethod(){
            return this.getBalance
        }
    }

    class StudentAccount extends BankAccount{
        constructor(id:number,name:string,balance:number){super(id,name,balance)}
        test(){
            this.addDeposit(20)
        }
    }

    const goribManusherAccount = new BankAccount(111, "Gorib", 20)
    goribManusherAccount.addDeposit(20)
    console.log(goribManusherAccount.hiddenMethod())















}