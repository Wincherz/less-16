var userObj = {
    firstName: 'Evgeny',
    lastName: 'Bychkov',
    age: 23,
    fullName (){
        return `${this.firstName} ${this.lastName}`
    }
}

function defUpperStr(str = '') {
    return str.toUpperCase() || 'DEFAULT TEXT';
}

function evenFn(n) {
    var arr = [];
    for (i=2; i<=n; i++) {
        if ([i]%2 === 0) arr.push(i)
        else continue;
    }

    return arr;
}

function weekFn(n) {
    switch(n) {
        case 1:
            return 'Понедельник';
        case 2: 
            return 'Вторник';
        case 3: 
            return 'Среда';
        case 4: 
            return 'Четверг';
        case 5: 
            return 'Пятница';
        case 6: 
            return 'Суббота';
        case 7: 
            return 'Воскресенье'; 
        default:
            return null;       
    }
}

function ageClassification(n) {
   return n ? n<0 ? null : n>0 && n<=24 ? 'детский возраст' : n<=44 ? 'молодой возраст' : n<=65 ? 'средний возраст' : n<=75 ? 'пожилой возраст': n<=90 ? 'старческий возраст' : n<=122 ? 'долгожители': n>122 ? null : null  : 'детский возраст';
    
}

function oddFn(n) {
    var i = 0;
    var arr2 = [];
    while(i<n) {
        i++;
        if (i%2 === 0) continue
        else arr2.push(i);
    }
    return arr2;
}


function mainFunc(a, b, func) {
    if (typeof func !== 'function') return false;

    return func(a, b);
}

function cbRandom(a, b) {
    return Math.round(Math.random()*(b - a + 1) + a);
}

function cbPow (a, b) {
    return Math.pow(a, b);
}

function cbAdd(a, b) {
    return a + b;
}