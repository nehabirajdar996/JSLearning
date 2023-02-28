function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`Name of the month ${monthNumber} is "JANUARY" `);
            break;
        case 2:
            console.log(`Name of the month ${monthNumber} is "FEBRUARY" `);
            break;
        case 3:
            console.log(`Name of the month ${monthNumber} is "MARCH" `);
            break;
        case 4:
            console.log(`Name of the month ${monthNumber} is "APRIL" `);
            break;
        case 5:
            console.log(`Name of the month ${monthNumber} is "MAY" `);
            break;
        case 6:
            console.log(`Name of the month ${monthNumber} is "JUNE" `);
            break;
        case 7:
            console.log(`Name of the month ${monthNumber} is "JULY" `);
            break;
        case 8:
            console.log(`Name of the month ${monthNumber} is "AUGUST" `);
            break;
        case 9:
            console.log(`Name of the month ${monthNumber} is "SEPTEMBER" `);
            break;
        case 10:
            console.log(`Name of the month ${monthNumber} is "OCTOMBER" `);
            break;
        case 11:
            console.log(`Name of the month ${monthNumber} is "NOVEMBER" `);
            break;
        case 12:
            console.log(`Name of the month ${monthNumber} is "DECEMBER" `);
            break;
        default:
            console.log(`"${monthNumber}" IS 'INVALID' Month Number`);
            break;
    }


}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);

