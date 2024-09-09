interface IOutput {
    highest: number;
    lowest: number;
    average: number;
}

interface Student {
    nama: string;
    email: string;
    age: Date;
    score: number;
}

const students: Student[] = [
    {nama:'Firhan',email: 'firhan@email.com',age: new Date('1998-01-14'),score: 90},
    {nama:'ujang',email: 'ujang@email.com',age: new Date('1980-06-12'),score: 95},
    {nama:'Sulis',email: 'sulis@email.com',age: new Date('1999-03-20'),score: 80},
    {nama:'Purnama',email: 'purnama@email.com',age: new Date('2002-02-22'),score: 85},
]

function calculateStudentData(std: Student[]){

    let score: IOutput = {
        highest: 0,
        lowest: 0,
        average: 0,
    }

    let age: IOutput = {
        highest: 0,
        lowest: 0,
        average: 0,
    }

    let sumScore: number = 0
    let sumAge: number  = 0

    for(let i: number = 0; i < std.length; i++){
        
        const millsAge = new Date().getTime() - std[i].age.getTime();
        const millsToDay: number = millsAge / (1000*3600*24);
        const ageNow: number = parseInt((millsToDay / 365).toFixed(2));

        if(i === 0){
            // score
            score.lowest = std[i].score;
            score.highest = std[i].score;
            // age
            age.lowest = ageNow;
            age.highest = ageNow;
        }else{
            // score
            if(score.highest < std[i].score) score.highest = std[i].score;
            if(score.lowest > std[i].score) score.lowest = std[i].score;
            // age
            if(age.highest < ageNow) age.highest = ageNow;
            if(age.lowest > ageNow) age.lowest = ageNow;
        }
        sumScore += std[i].score;
        sumAge += ageNow;

    }

    score.average = sumScore/std.length;
    age.average = sumAge/std.length;

    return {
        score,
        age,
    }
}

console.log(calculateStudentData(students));