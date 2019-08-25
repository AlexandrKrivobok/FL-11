/* ----------------------- task1 ----------------------- */

function maxElement(arr) {
    return Math.max(...arr);
}

/* ----------------------- task2 ----------------------- */

function copyArray(arr) {
    return [...arr];
}

/* ----------------------- task3 ----------------------- */

function addUniqueId(obj) {
    let result = {};
    Object.assign(result, obj);
    let id = Symbol('id');
    result[id] = 'uniqueId';
    return result;
}

/* ----------------------- task4 ----------------------- */

function regroupObject(obj) {
    let {name,
        details: {   
                    id,
                    age,
                    university
                }
        } = obj;
    
    let result = {};
    result.university = university;
    result.user = {age: age, firstName: name, id: id};

    return result;
}

const oldObj = {name:       'Someone',
                details:    {   
                                id: 1,
                                age: 11,
                                university: 'UNI'
                            }
                };

/* ----------------------- task5 ----------------------- */

function findUniqueElements(arr) {
    return new Set(arr);
}

/* ----------------------- task6 ----------------------- */

const hideNumber = (num) => num.slice(-4, num.length).padStart(num.length, '*');

/* ----------------------- task7 ----------------------- */

const missingParameter = () => { throw new Error('Missing parameter') }

const add = (a = missingParameter(), b = missingParameter()) => a + b;

/* ----------------------- task8 ----------------------- */

function fetchJson(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const names = data.map(human => human.name).sort();

            console.log(names);
        })
        .catch(error => console.log(error.stack));
}

/* ----------------------- task9 ----------------------- */

async function anotherFetchJson(url) {
    try {
        const response = await fetch(url);
        const arr = await response.json()
        const names = await arr.map(human => human.name).sort();
        console.log(names);
    }
    catch(error) {
        console.log(error.stack);
    }
}