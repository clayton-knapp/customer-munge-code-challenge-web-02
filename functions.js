// import customers from './data.js';

/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', 'Hello Mattie Mungane' etc]
*/

export function greetUsers(customers) {
  //map through and make an array returning a string with 'Hello first_name last_name!'
    const greetings = customers.map((customer) =>
        `Hello ${customer.first_name} ${customer.last_name}!`
    );
    return greetings;
}



/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', etc]
*/

export function greetUsersOverAge60(customers) {
    const greetingsOver60 = customers
        // first, filter over the user to get the ones over 60
        .filter(customer => customer.age > 60)
        // then map over them to make a greeting
        .map(customer => `Hello ${customer.first_name} ${customer.last_name}!`);

    return greetingsOver60;

}




/* 
Output: 
4532
*/

export function addAllAges(customers) {
    //reduce here to accumulate the sum
    const sum = customers.reduce((acc, customer) => {
        acc = acc + customer.age;

        return acc;
    }, 0);

    return sum;
}




/* 
Output: 
4.5
*/

export function getAverageCoolFactor(customers) {
    const sum = customers.reduce((acc, customer) => {
        acc = acc + customer.cool_factor;

        return acc;
    }, 0);

    const ave = sum / customers.length;

    return ave;
}

/* 
Output: 
{
    female: 4,
    male: 3,
    nonbinary: 2,
    etc . . .
}
*/

export function getTotalOfEachGender(customers) {
    const totalGendersObj = customers.reduce((acc, customer) => {
        //if there is a gender key in the object already that matches increment it
        if(acc[customer.gender]) {
            acc[customer.gender]++;
        } 
        //else if there is not a gender key in the object yet, then create one with a value 1
        else {
            acc[customer.gender] = 1;
        }
        //return the whole object accumulator
        return acc;
    }, {});

    return totalGendersObj;
}

/* 
Output: 
 {
    female: 3,
    male: 2,
    nonbinary: 1,
    etc . . .
 }
*/


export function getGenderBreakdownOfFordOwners(customers) {
    //first filter so we just have the ford users
    //then hashmap reduce to get the gender breakdown object
    const fordCustomers = customers.filter(customer => customer.car_make === 'Ford');
    
    const fordGenderObj = fordCustomers.reduce((acc, customer) => {
        if(acc[customer.gender]) {
            acc[customer.gender]++;
        }
        else {
            acc[customer.gender] = 1;
        }
        // console.log(acc);
        return acc;
    }, {});

    return fordGenderObj;
}

//////////////////////////////////////////////////////////
///////////// STRETCH GOALS /////////////////////////////
/////////////////////////////////////////////////////////

/* 
Output: 
{
    ford: {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    mercedes:  {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    etc . . .
}
*/

export function getGenderBreakdownOfEachCar(customers) {
    return true;
}

/* 
Output: 
{
    ford: [3, 5, 4, 4, 7, 5],
    mercedes: [8, 5, 6, 8, 3, 9],
    honda: [2, 4, 4, 3, 7, 1],
    etc. . .
}
*/


export function getAllCoolFactorsOfEachCar(customers) {
    return true;
}

/* 
Output: 
{
    ford: 5.4
    mercedes:  8.5
    honda: 2.3
}
*/

export function getAverageCoolFactorOfEachCar(customers) {
    return true;
}


/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 55,
    20:  38,
    30: 12,
    40: 31,
    50: 62,
    60: 93,
    70: 45,
    80: 32,
    90: 11,
}
*/

export function makeAgeBrackets(customers) {
    return true;
}

/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: [3, 5, 4, 4, 7, 5],
    20: [8, 5, 6, 8, 3, 9],
    30: [1, 8, 4, 1, 9, 2],
    40: [2, 4, 4, 3, 7, 1],
    etc . . .
}
*/

export function getCoolFactorsByAgeBracket(customers) {
    return true;
}


/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 5.6,
    20: 3.1
    30: 7.8,
    40: 9.5,
    etc . . .
}
*/

export function getAverageCoolFactorByAgeBracket(customers) {
    return true;
}

