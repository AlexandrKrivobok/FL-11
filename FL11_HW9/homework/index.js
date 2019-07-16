const theDataForTask8 = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
]

console.log(new Date(theDataForTask8['birthday']));

function getNumbers(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(+str.charAt(i))) {
            result.push(str.charAt(i));
        }
    }
    return result;
}

console.log(getNumbers('1m2m2m3'));

function findTypes(...str) {
    let obj = {};
    let variableType;
    for (let i = 0;i < str.length; i++) {
        variableType = typeof str[i];
        if (obj.hasOwnProperty(variableType)) {
            obj[variableType] += 1;
        } else {
            obj[variableType] = 1;
        }
    }
    return obj;
}

console.log(findTypes(1,'2', null, undefined, null));

function executeForEach(arr, func){
    for (let i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}

executeForEach([1,2,3], function(el) {
    console.log(el) 
}) 

function mapArray (array, func) {
    let newArray = [];
    executeForEach(array, function(el) {
        newArray.push(func(el));
    })
    return newArray;
}

console.log(mapArray([2, 5, 8], function(el) {
    return el + 3;
}))

function filterArray(array, func) {
    const storage = [];
    executeForEach(array, function(el) {
        if (func(el) === true) {
            storage.push(el);
        }
    })
    return storage;
}

console.log(filterArray([2, 5, 8], function(el) {
    return el > 3;
}))  

function showFormattedDate(dateStr) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = dateStr.getFullYear();
    let month = monthNames[dateStr.getMonth()];
    let day = dateStr.getDate();

    return `Date: ${month} ${day} ${year}`;
} 

console.log(showFormattedDate(new Date('2019-13-27T01:10:00'))) ;

function canConvertToDate(dateStr) {
    return !!new Date(dateStr).getMonth();
}

console.log(canConvertToDate('2016-13-18T00:00:00'));

function daysBetween(date1, date2) {
    const dayMilliseconds = 86400000;

    return Math.round((date2.getTime() - date1.getTime())/dayMilliseconds);
}

console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

function getAmountOfAdultPeople(data) {
    const year = 365;
    const grownUp = 18;
  
    return filterArray(data, function(dataItem) {
        daysBetween(new Date(dataItem['birthday']), new Date()) / year > grownUp
    }).length
}
  
console.log(getAmountOfAdultPeople(theDataForTask8));
  
function keys(obj) {
    const storage = Array();
    for( let key in obj ) {
        if (obj.hasOwnProperty(key) ) {
            storage.push(key);
        }
    }
  
    return storage;
}

console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

function values(obj) {
    const storage = Array();
    for( let val in obj ) {
        if (obj.hasOwnProperty(val) ) {
            storage.push(obj[val]);
        }
    }
  
    return storage;
}

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));