class Bank{
    constructor(bankName,location,accountNo,ifsc,intrestRate)
    {
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc=ifsc;
        this.intrestRate=intrestRate;
    }
}
const axis_bank= new Bank("Axis Bank","Pune","12345","AXIS00221234","8%");
const sbi_bank = new Bank("SBI Bank","Mumbai","23456","SBIB00221234","7%");
const icici_bank =new Bank("ICICI Bank","Nashi","34567","ICICI0022123","7.5%");
const kotak_bank = new Bank("Kotak Bank","Sangli","45678","KOTAK002212","7.2%");
const hdfc_bank = new Bank("HDFC Bank","Satara","56789","HDFC002212","8%")
const panjab_bank = new Bank("Panjab Bank","Solpaur","67890","PANJAB002212","9%");

const mapOfBank = new Map();
mapOfBank.set("12345",axis_bank);
mapOfBank.set("23456",sbi_bank);
mapOfBank.set("34567",icici_bank);
mapOfBank.set("45678",kotak_bank);
mapOfBank.set("56789",hdfc_bank);
mapOfBank.set("67890",panjab_bank);
// console.table(mapOfBank);
// console.log(mapOfBank.get("12345"));
// console.table((mapOfBank.values()));
const allValues= mapOfBank.values();


for (const key of allValues) {
    console.log(`BankName:${key.bankName}  AccountNo :${key.accountNo}  Rate : ${key.intrestRate}`);
    
}
