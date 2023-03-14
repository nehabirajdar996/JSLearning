function Bank(bankName,location,ifscCode,branchCode) {
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;

    this.show=function(){
        console.log(`* Bank Details is :"${bankName}","${location}","${ifscCode}","${branchCode}"`);
    }
}
 Bank.prototype.openTime = "9 AM IST";
 Bank.prototype.closeTime="6 PM IST";

const yesBank = new Bank("YES Bank","Mumbai","YES00001245","12456");
yesBank.show();

const sbiBank = new Bank("SBI Bank","Pune","SBI00001245","25423");
sbiBank.show();
console.log(`   1.openTime of object sbiBank is: "${sbiBank.openTime}"`)
console.log(`   2.closeTime of object sbiBank is: "${sbiBank.closeTime}"`)

const mhaBank = new Bank("MHA Bank","Nashik","MHA00001245","24685");
mhaBank.show();
console.log(`   1.openTime of object mhaBank is: "${mhaBank.openTime}"`)
console.log(`   2.closeTime of object mhaBank is: "${mhaBank.closeTime}"`)

const axisBank = new Bank("AXIS Bank","Sangli","AXIS00001245","995");
axisBank.show();
console.log(`   1.openTime of object axisBank is: "${axisBank.openTime}"`)
console.log(`   2.closeTime of object axisBank is: "${axisBank.closeTime}"`)
