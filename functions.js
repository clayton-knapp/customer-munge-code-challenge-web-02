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

    const carBrands = customers.reduce((acc, customer) => {
        if(acc.includes(customer.car_make)) {
            null;
        }
        else {
            acc.push(customer.car_make);
        }
        return acc;
    }, []);

    // we map through our brands
    // for each brand we reduce through the customer data
    // if the brand === customer.car_make
    // then do the stuff we did before to make the gender object
    // then when done mapping through each brand return an object with they brand as the key and the gender breakdown object as the value
    
    const genderBreakdownByMake = carBrands.map(brand => {
        const brandGenderObj = customers.reduce((acc, customer) => {
            if(brand === customer.car_make) {
                if(acc[customer.gender]) {
                    acc[customer.gender]++;
                }
                else {
                    acc[customer.gender] = 1;
                }
            }
        // console.log(acc);
            return acc;
        }, {});

        // return brandGenderObj;
        return {
            [brand]: brandGenderObj
        };
    });
    
    return genderBreakdownByMake;


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
    // get our array of car brands
    //map through the brands
    // for each brand reduce through our customer data
    // if car brand === customer.car_make then push the cool factor into an array
    // (or spread old accumulator out and add the new cool factor value)

    //OR

    //reduce through our customer data
    //for each entry - the accumular returns an array of objects with brand as key and array of cool factors as value
    //needs to be a conditional check to see if that brand as already been made - if not the entry for it gets initialized - if so just push the cool factor into the array

    const object = customers.reduce((acc, customer) => {
        if(acc[customer.car_make]) {
            //if the .brand already exists in our acc object, push the new cool factor in the array of that brands value
            acc[customer.car_make].push(customer.cool_factor);
        }
        else {
            //creates the .brand in our object gives it the value of an array of the first cool factor
            acc[customer.car_make] = [customer.cool_factor];
            
        }

        return acc;
    }, {});


    return object;
}

/* 
Output: 
{
    ford: 5.4
    mercedes:  8.5
    honda: 2.3
}
*/

// in needs to generate an average everytime it goes through
// but to do so we need to know how may items to divide by
// so we could either keep track of a count as another key in our object but our data model doesnt have that
// or we could keep it as an array and divide by length of the array but then we would have to do this after - not after each pass - right?

export function getAverageCoolFactorOfEachCar(customers) {
    const object = customers.reduce((acc, customer) => {
        if(acc[customer.car_make]) {
        //if the .brand already exists in our acc object, push the new cool factor in the array of that brands value
            acc[customer.car_make].push(customer.cool_factor);
            // const sum = acc[customer.car_make].reduce((acc, value)=> {
            //     acc = acc + value;
            //     return acc;
            // }, 0);
            // const ave = sum / acc[customer.car_make].length;
            // console.log(ave);
        }
        else {
        //creates the .brand in our object gives it the value of an array of the first cool factor
            acc[customer.car_make] = [customer.cool_factor];
        
        }

        return acc;
    }, {});


    return object;
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
// bunch of ifs
// if the age is between 0-9 advance that count, if doesnt exist then initialize it at 1


export function makeAgeBrackets(customers) {
    const object = customers.reduce((acc, customer) => {
        if(customer.age >= 0 && customer.age <= 9) {
            const ageRange = '0-9';
            if(acc[ageRange]) {
                acc[ageRange]++;
            }
            else {
                acc[ageRange] = 1;
            }
        }
        if(customer.age >= 10 && customer.age <= 19) {
            const ageRange = '10-19';
            if(acc[ageRange]) {
                acc[ageRange]++;
            }
            else {
                acc[ageRange] = 1;
            }
        }
        if(customer.age >= 20 && customer.age <= 29) {
            const ageRange = '20-29';
            if(acc[ageRange]) {
                acc[ageRange]++;
            }
            else {
                acc[ageRange] = 1;
            }
        }
        if(customer.age >= 30 && customer.age <= 39) {
            const ageRange = '30-39';
            if(acc[ageRange]) {
                acc[ageRange]++;
            }
            else {
                acc[ageRange] = 1;
            }
        }
        if(customer.age >= 40 && customer.age <= 49) {
            const ageRange = '40-49';
            if(acc[ageRange]) {
                acc[ageRange]++;
            }
            else {
                acc[ageRange] = 1;
            }
        }
        if(customer.age >= 50 && customer.age <= 59) {
            const ageRange = '50-59';
            if(acc[ageRange]) {
                acc[ageRange]++;
            }
            else {
                acc[ageRange] = 1;
            }
        }
        if(customer.age >= 60 && customer.age <= 69) {
            const ageRange = '60-69';
            if(acc[ageRange]) {
                acc[ageRange]++;
            }
            else {
                acc[ageRange] = 1;
            }
        }
        if(customer.age >= 70 && customer.age <= 79) {
            const ageRange = '70-79';
            if(acc[ageRange]) {
                acc[ageRange]++;
            }
            else {
                acc[ageRange] = 1;
            }
        }
        if(customer.age >= 80 && customer.age <= 89) {
            const ageRange = '80-89';
            if(acc[ageRange]) {
                acc[ageRange]++;
            }
            else {
                acc[ageRange] = 1;
            }
        }
        if(customer.age >= 90 && customer.age <= 99) {
            const ageRange = '90-99';
            if(acc[ageRange]) {
                acc[ageRange]++;
            }
            else {
                acc[ageRange] = 1;
            }
        }
        if(customer.age >= 100) {
            const ageRange = '100+';
            if(acc[ageRange]) {
                acc[ageRange]++;
            }
            else {
                acc[ageRange] = 1;
            }
        }
        return acc;

    }, {});
    return object;
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

