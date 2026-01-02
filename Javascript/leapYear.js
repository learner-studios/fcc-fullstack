function isLeapYear(year){
    if ((year % 400 === 0)){
        return `${year} is a leap year.`;
    }
    else if ((year % 100 === 0)){
        return `${year} is not a leap year.`;
    }
    else if  ((year %4 === 0)){
        return `${year} is a leap year.`;
    }
    else {
        return `${year} is not a leap year.`;   
    }
}

let year = 2024;
let result = isLeapYear(year);
console.log(result);


let year2 = 2000;   
let result2 = isLeapYear(year2);    
console.log(result2);   

let year3 = 1900;   
let result3 = isLeapYear(year3);    
console.log(result3);   