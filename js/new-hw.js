console.clear();
function test(parametras) {
    // console.log(parametras);
    for (let i = 0; i < parametras.length; i++) {
        // console.log(`-----------`);
        // console.log(parametras[i]);
        let sum = 0;
        // console.log(`===`, parametras[i].paz.length);

        for (let j = 0; j < parametras[i].paz.length; j++) {
            // console.log(parametras[i].paz[j]);
            sum += parametras[i].paz[j];
        }
        console.log(parametras[i].name, `vidurkis: `, sum / parametras[i].paz.length);
    }
    return 0;
}

console.log(`***`,test([
    {
        name: `A`,
        paz: [3, 5, 7, 8, 10]
    },
    {
        name: `B`,
        paz: [3, 6, 10, 8, 10]
    },
    {
        name: `C`,
        paz: [3, 5, 7, 8, 10]
    },
    {
        name: `D`,
        paz: [3, 5, 10, 8, 10]
    },
    {
        name: `E`,
        paz: [3, 5, 3]
    },
    {
        name: `F`,
        paz: [3, 5, 7, 8, 10, 8, 2]
    },
]
));

// // function test(a) {
// //     console.log(a);

// // }

// // console.log(`*`,test([1, -3, 15, 23, -2, 0]));