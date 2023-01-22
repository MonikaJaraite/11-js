console.clear ();

/*
function isNaN(x) {
    if (''+ x === 'NaN') {
        return true;
    }
    return false;
}
*/

function rangeSum(from, to) {
    if (typeof from !== 'number') {
        return 'ERROR: pirmasis parametras turi buti skaicius.';
    }
    // if (from === Infinity || from === -Infinity || isNaN(from) || from % 1 !== 0) {

    if (!isFinite(from) || from % 1 !== 0) {
        return 'ERROR: antrasis parametras turi buti sveikasis skaicius.';
    }

    if (typeof to !== 'number') {
        return 'ERROR: antrasis parametras turi buti skaicius.';
    }
    if (!Number.isInteger(to)) {
        return 'ERROR: antrasis parametras turi buti sveikasis skaicius.';
    }

    // if (from < to) {
    //     for (let i = from; i <= to; i++) {
    //         sum += i;
    //     }
    //     else {
    //     for (let i = from; i <= to; i++) {
    //         sum += i;
    //     } 
    //     }

    // let i = from;
    // for (; ;) {
    //     if (i <= to) {
    //     sum += i++;
    // } else {
    //     break;
    //     }
    // }

/*
    let sum = 0;

        for (let i=0; i<=4; i++) {
            sum+= i;   - matematiskai sis kodas teisingas, bet kai kas negerai
        }              - truksta dar vieno testo, ar from nera didesnis uz to
    
    return sum;
}
*/
    let sum = 0;

/*    if (from < to) {
        for (let i = from; i <= to; i++) {
            sum += i;
        }
    } else {
        for (let i = to; i <= from; i++) {
            sum += i;
        }
    } */

    if (from > to) {
        const x = from;
        from = to;
        to = x;
    }

    for (let i = from; i <= to; i++) {
        sum += i;
    }
    
    return sum;
}


/*
0 ... 0         0
0 ... 4         10
0 ... 100       5050
574 ... 815     kazkoks didelis skaicius
-50 ... 50
-70 ... 30      -2020
*/

/*console.group(rangeSum(true, 4));
console.group(rangeSum(4, false));
console.group(rangeSum('dfsd', 4));
console.group(rangeSum(4, 'erhh'));
console.group(rangeSum(4, []));
console.group(rangeSum([], 4));

console.log(rangeSum(0, 0), '-->', 0);
console.log(rangeSum(0, 100), '-->', 5050);

console.log(rangeSum(-50, 50), '-->', 0);
console.log(rangeSum(0, 0), '-->', 0);
console.log(rangeSum(-70, 30), '-->', -2020);
console.log(rangeSum(574, 815), '-->');

console.log(rangeSum(0, 4), '-->', 10); */

/*
console.log(rangeSum(true, 4));
console.log(rangeSum(4, false));
console.log(rangeSum('dfsd', 4));
console.log(rangeSum(4, 'ergg'));
console.log(rangeSum([], 4));
console.log(rangeSum(4, []));
console.log(rangeSum(null, 4));
console.log(rangeSum(4, null));
console.log(rangeSum(undefined, 4));
console.log(rangeSum(4, undefined));
console.log(rangeSum(4));
console.log(rangeSum());
console.log(rangeSum(0, 3.14));
console.log(rangeSum(3.14, 8));
console.log(rangeSum(3.14, 8.88));
console.log(rangeSum(0, Infinity));
console.log(rangeSum(Infinity, 8));
console.log(rangeSum(Infinity, 8.88));
console.log(rangeSum(0, -Infinity));
console.log(rangeSum(-Infinity, 8));
console.log(rangeSum(-Infinity, 8.88));
console.log(rangeSum(0, NaN));
console.log(rangeSum(NaN, 8));
console.log(rangeSum(NaN, NaN));
*/

console.assert(rangeSum(true, 4));
console.assert(rangeSum(4, false));
console.assert(rangeSum('dfsd', 4));
console.assert(rangeSum(4, 'ergg'));
console.assert(rangeSum([], 4));
console.assert(rangeSum(4, []));
console.assert(rangeSum(null, 4));
console.assert(rangeSum(4, null));
console.assert(rangeSum(undefined, 4));
console.assert(rangeSum(4, undefined));
console.assert(rangeSum(4));
console.assert(rangeSum());
console.assert(rangeSum(0, 3.14));
console.assert(rangeSum(3.14, 8));
console.assert(rangeSum(3.14, 8.88));
console.assert(rangeSum(0, Infinity));
console.assert(rangeSum(Infinity, 8));
console.assert(rangeSum(Infinity, 8.88));
console.assert(rangeSum(0, -Infinity));
console.assert(rangeSum(-Infinity, 8));
console.assert(rangeSum(-Infinity, 8.88));
console.assert(rangeSum(0, NaN));
console.assert(rangeSum(NaN, 8));
console.assert(rangeSum(NaN, NaN));

console.log(rangeSum(0, 4), '-->', 10);
console.log(rangeSum(0, 100), '-->', 5050);
console.log(rangeSum(-50, 50), '-->', 0);
console.log(rangeSum(0, 0), '-->', 0);
console.log(rangeSum(5, 5), '-->', 0);
console.log(rangeSum(-7, -7), '-->', -7);
console.log(rangeSum(-70, 30), '-->', -2020);
console.log(rangeSum(574, 815), '-->', 168069);

console.log(rangeSum(4, 0), '-->', 10);
console.log(rangeSum(100, 0), '-->', 5050);

console.log('------------');
console.log(rangeSum(0, 1000000000));

console.assert(rangeSum(0, 4) === 10);
console.assert(rangeSum(0, 100) === 5050, [0, 100, 5050]);

// console.log('---------------');
// for (let i = 0, j = 5, k = 99; i < j + k && i < 10 && j < 15; i++, j += 2, k -= 10) {
//     console.log(i, j, k);
// }