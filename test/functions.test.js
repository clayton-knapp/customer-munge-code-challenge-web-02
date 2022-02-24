// IMPORT MODULES under test here:
import { 
    greetUsers,
    greetUsersOverAge60,
    addAllAges,
    getAverageCoolFactor,
    getTotalOfEachGender,
    getGenderBreakdownOfFordOwners,
    getGenderBreakdownOfEachCar,
    getAllCoolFactorsOfEachCar,
    getAverageCoolFactorOfEachCar,
    makeAgeBrackets,
    getCoolFactorsByAgeBracket,
    getAverageCoolFactorByAgeBracket,
    getAverageCoolFactorOfEachCar2,
    getAverageCoolFactorByAgeBracket2
} from '../functions.js';
import customers from './data.js';

const { test, skip } = QUnit;

test('greetUsers', (expect) => {
    const expected = [
        'Hello Suzi Summerson!',
        'Hello Boot Penton!',
        'Hello Cacilia Caramuscia!',
        'Hello Mattie Mungane!',
        'Hello Kathryne Gostling!',
        'Hello Cristal Oakman!',
        'Hello Mahmud Shingler!',
        'Hello Kenny Kepe!',
        'Hello Elena Guisby!',
        'Hello Irene Kynvin!',
        'Hello Debor Lashmar!',
        'Hello Christian Churchill!',
        'Hello Fawnia Cowdroy!',
        'Hello Eli Perigo!',
        'Hello Parker Goodboddy!',
        'Hello Leeland Bonome!',
        'Hello Lowe Driussi!',
        'Hello Tracy Chidlow!',
        'Hello Dimitri Ochiltree!',
        'Hello Sascha Yanin!',
        'Hello Emmaline Horribine!',
        'Hello Erinna Swires!',
        'Hello Erroll Reade!',
        "Hello Ilaire O'Codihie!",
        'Hello Anatol Gulley!',
        'Hello Celestine Teodori!',
        'Hello Brandi Sawdon!',
        'Hello Atlanta Oneil!',
        'Hello Salomone Merkle!',
        'Hello Alta Sulter!',
        'Hello Marys Allsopp!',
        'Hello Marilin Ellacott!',
        'Hello Alexandros Cornell!',
        'Hello Matti Haller!',
        'Hello Henryetta Cheng!',
        'Hello Gennie Saura!',
        'Hello Sherwynd Wiggans!',
        'Hello Thorn McMeekin!',
        'Hello Esmaria Moukes!',
        'Hello Dietrich Gladebeck!',
        'Hello Karol Rosa!',
        'Hello Manya Fodden!',
        'Hello Casi Waterland!',
        'Hello Munroe Walthall!',
        'Hello Tannie Sedman!'
    ];

    const actual = greetUsers(customers);

    expect.deepEqual(actual, expected);
});


test('greetUsersOverAge60', (expect) => {
    const expected = [
        'Hello Suzi Summerson!',
        'Hello Boot Penton!',
        'Hello Cacilia Caramuscia!',
        'Hello Cristal Oakman!',
        'Hello Kenny Kepe!',
        'Hello Dimitri Ochiltree!',
        "Hello Ilaire O'Codihie!",
        'Hello Anatol Gulley!',
        'Hello Salomone Merkle!',
        'Hello Alta Sulter!',
        'Hello Alexandros Cornell!',
        'Hello Thorn McMeekin!',
        'Hello Esmaria Moukes!',
        'Hello Munroe Walthall!',
        'Hello Tannie Sedman!'
    ];

    const actual = greetUsersOverAge60(customers);

    expect.deepEqual(actual, expected);
});

test('addAllAges', (expect) => {
    const expected = 2125;

    const actual = addAllAges(customers);

    expect.equal(actual, expected);
});


test('getAverageCoolFactor', (expect) => {
    const expected = 5.088888888888889;

    const actual = getAverageCoolFactor(customers);

    expect.equal(actual, expected);
});

test('getTotalOfEachGender', (expect) => {
    const expected = {
        'Bigender': 1,
        'Female': 19,
        'Genderqueer': 1,
        'Male': 23,
        'Non-binary': 1
    };

    const actual = getTotalOfEachGender(customers);

    expect.deepEqual(actual, expected);
});

test('getGenderBreakdownOfFordOwners', (expect) => {
    const expected = {
        'Female': 1,
        'Male': 2
    };

    const actual = getGenderBreakdownOfFordOwners(customers);

    expect.deepEqual(actual, expected);
});

// ! THIS ONE IS FRIGGIN HARD!!!!!!!!!! - Do we want it as a giant object?
test('getGenderBreakdownOfEachCar', (expect) => {
    const expected = [
        {
            'Lexus': {
                'Male': 1
            }
        },
        {
            'Volvo': {
                'Female': 1,
                'Male': 1
            }
        },
        {
            'Mitsubishi': {
                'Male': 1
            }
        },
        {
            'Chrysler': {
                'Female': 1,
                'Genderqueer': 1
            }
        },
        {
            'Alfa Romeo': {
                'Male': 1
            }
        },
        {
            'Subaru': {
                'Female': 1
            }
        },
        {
            'Chevrolet': {
                'Female': 1,
                'Male': 3
            }
        },
        {
            'Mercury': {
                'Male': 1
            }
        },
        {
            'Scion': {
                'Female': 1
            }
        },
        {
            'Oldsmobile': {
                'Male': 1
            }
        },
        {
            'Toyota': {
                'Bigender': 1,
                'Female': 1,
                'Male': 2
            }
        },
        {
            'Buick': {
                'Female': 1,
                'Male': 1
            }
        },
        {
            'GMC': {
                'Female': 2,
                'Male': 2
            }
        },
        {
            'Dodge': {
                'Female': 2,
                'Male': 1
            }
        },
        {
            'Mercedes-Benz': {
                'Female': 1
            }
        },
        {
            'Cadillac': {
                'Male': 1,
                'Non-binary': 1
            }
        },
        {
            'Pontiac': {
                'Female': 1
            }
        },
        {
            'Eagle': {
                'Male': 1
            }
        },
        {
            'Ford': {
                'Female': 1,
                'Male': 2
            }
        },
        {
            'Mazda': {
                'Male': 1
            }
        },
        {
            'Audi': {
                'Female': 1
            }
        },
        {
            'BMW': {
                'Male': 1
            }
        },
        {
            'Peugeot': {
                'Female': 1
            }
        },
        {
            'Porsche': {
                'Female': 1,
                'Male': 1
            }
        },
        {
            'Jeep': {
                'Female': 1
            }
        },
        {
            'Infiniti': {
                'Female': 1
            }
        },
        {
            'Kia': {
                'Male': 1
            }
        }
    ];

    const actual = getGenderBreakdownOfEachCar(customers);

    expect.deepEqual(actual, expected);
});

test('getAllCoolFactorsOfEachCar', (expect) => {
    const expected = {
        'Alfa Romeo': [
            6
        ],
        'Audi': [
            1
        ],
        'BMW': [
            5
        ],
        'Buick': [
            4,
            3
        ],
        'Cadillac': [
            7,
            1
        ],
        'Chevrolet': [
            8,
            9,
            2,
            1
        ],
        'Chrysler': [
            4,
            9
        ],
        'Dodge': [
            10,
            8,
            10
        ],
        'Eagle': [
            9
        ],
        'Ford': [
            5,
            2,
            10
        ],
        'GMC': [
            6,
            6,
            10,
            8
        ],
        'Infiniti': [
            2
        ],
        'Jeep': [
            5
        ],
        'Kia': [
            2
        ],
        'Lexus': [
            4
        ],
        'Mazda': [
            3
        ],
        'Mercedes-Benz': [
            3
        ],
        'Mercury': [
            2
        ],
        'Mitsubishi': [
            4
        ],
        'Oldsmobile': [
            5
        ],
        'Peugeot': [
            1
        ],
        'Pontiac': [
            8
        ],
        'Porsche': [
            8,
            7
        ],
        'Scion': [
            2
        ],
        'Subaru': [
            2
        ],
        'Toyota': [
            1,
            8,
            2,
            3
        ],
        'Volvo': [
            9,
            4
        ]
    };

    const actual = getAllCoolFactorsOfEachCar(customers);

    expect.deepEqual(actual, expected);
});

// RESULT IS AN OBJECT OF KEY/VALUE PAIRS √
test('getAverageCoolFactorOfEachCar', (expect) => {
    const expected = {
        'Alfa Romeo': 6,
        'Audi': 1,
        'BMW': 5,
        'Buick': 3.5,
        'Cadillac': 4,
        'Chevrolet': 5,
        'Chrysler': 6.5,
        'Dodge': 9.333333333333334,
        'Eagle': 9,
        'Ford': 5.666666666666667,
        'GMC': 7.5,
        'Infiniti': 2,
        'Jeep': 5,
        'Kia': 2,
        'Lexus': 4,
        'Mazda': 3,
        'Mercedes-Benz': 3,
        'Mercury': 2,
        'Mitsubishi': 4,
        'Oldsmobile': 5,
        'Peugeot': 1,
        'Pontiac': 8,
        'Porsche': 7.5,
        'Scion': 2,
        'Subaru': 2,
        'Toyota': 3.5,
        'Volvo': 6.5
    };

    const actual = getAverageCoolFactorOfEachCar(customers);

    expect.deepEqual(actual, expected);
});

test('getAverageCoolFactorOfEachCar2', (expect) => {
    const expected = {
        'Alfa Romeo': 6,
        'Audi': 1,
        'BMW': 5,
        'Buick': 3.5,
        'Cadillac': 4,
        'Chevrolet': 5,
        'Chrysler': 6.5,
        'Dodge': 9.333333333333334,
        'Eagle': 9,
        'Ford': 5.666666666666667,
        'GMC': 7.5,
        'Infiniti': 2,
        'Jeep': 5,
        'Kia': 2,
        'Lexus': 4,
        'Mazda': 3,
        'Mercedes-Benz': 3,
        'Mercury': 2,
        'Mitsubishi': 4,
        'Oldsmobile': 5,
        'Peugeot': 1,
        'Pontiac': 8,
        'Porsche': 7.5,
        'Scion': 2,
        'Subaru': 2,
        'Toyota': 3.5,
        'Volvo': 6.5
    };

    const actual = getAverageCoolFactorOfEachCar2(customers);

    expect.deepEqual(actual, expected);
});

test('makeAgeBrackets', (expect) => {
    const expected = {
        '0-9': 6,
        '10-19': 8,
        '100-109': 2,
        '20-29': 2,
        '30-39': 7,
        '40-49': 2,
        '50-59': 5,
        '60-69': 1,
        '70-79': 3,
        '80-89': 2,
        '90-99': 7
    };

    const actual = makeAgeBrackets(customers);

    expect.deepEqual(actual, expected);
});

test('getCoolFactorsByAgeBracket', (expect) => {
    const expected = {
        '0-9': [
            4,
            1,
            3,
            9,
            10,
            8
        ],
        '10-19': [
            6,
            2,
            10,
            7,
            3,
            1,
            8,
            3
        ],
        '100-109': [
            8,
            5
        ],
        '20-29': [
            10,
            5
        ],
        '30-39': [
            4,
            9,
            9,
            8,
            2,
            5,
            2
        ],
        '40-49': [
            2,
            6
        ],
        '50-59': [
            5,
            4,
            6,
            3,
            10
        ],
        '60-69': [
            8
        ],
        '70-79': [
            4,
            4,
            2
        ],
        '80-89': [
            2,
            2
        ],
        '90-99': [
            9,
            2,
            8,
            1,
            1,
            1,
            7
        ]
    };

    const actual = getCoolFactorsByAgeBracket(customers);

    expect.deepEqual(actual, expected);
});

//MADE RESULT AN OBJECT
test('getAverageCoolFactorByAgeBracket', (expect) => {
    const expected = {
        '0-9': 5.833333333333333,
        '10-19': 5,
        '100-109': 6.5,
        '20-29': 7.5,
        '30-39': 5.571428571428571,
        '40-49': 4,
        '50-59': 5.6,
        '60-69': 8,
        '70-79': 3.3333333333333335,
        '80-89': 2,
        '90-99': 4.142857142857143
    };

    const actual = getAverageCoolFactorByAgeBracket(customers);

    expect.deepEqual(actual, expected);
});

test('getAverageCoolFactorByAgeBracket2', (expect) => {
    const expected = {
        '0-9': 5.833333333333333,
        '10-19': 5,
        '100-109': 6.5,
        '20-29': 7.5,
        '30-39': 5.571428571428571,
        '40-49': 4,
        '50-59': 5.6,
        '60-69': 8,
        '70-79': 3.3333333333333335,
        '80-89': 2,
        '90-99': 4.142857142857143
    };

    const actual = getAverageCoolFactorByAgeBracket2(customers);

    expect.deepEqual(actual, expected);
});
