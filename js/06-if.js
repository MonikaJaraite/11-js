console.clear();
/*
IF (loginis mastymas)

Palyginimo operatoriai:
- visi:>, <, ==, !=, >=, <=, ===, !==
- naudotini: >, <, >=, <=, ===, !==
- nenaudotini: ==, !=

Sablonai:
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} else {}
if () {} else if {} ... else if () {}
if () {} else if {} ... else if () {} else {}
Tritaskiai reiskia, kad vietoje jo galima kartoti bet kiek kartu else if'o dalis; else if'as gali buti kartojamas, kiek reikia ir paciam gale dar reikia ar nereikia else dalies.

Loginiai operatoriai:
- && (AND)
- || (OR)

*/

if (4 > 2) {
    console.log('4 yra daugiau uz 2');
} else {
    console.log('nera daugiau');
}

if (4 > 22) {
    console.log('tiesa');
} else {
    console.log('melas');
}

if (7 == 7) {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (7 == 8) {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (7 != 8) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

if (88 >= 9) {
    console.log('daugiau arba lygu');
} else {
    console.log('maziau');
}

if (88 >= 99) {
    console.log('daugiau arba lygu');
} else {
    console.log('maziau');
}

if (88 >= 88) {
    console.log('daugiau arba lygu');
} else {
    console.log('maziau');
}

if (88 <= 7) {
    console.log('maziau arba lygu');
} else {
    console.log('daugiau');
}

console.log('--------------');

if (4 == '4') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (0 == false) {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (1 == true) {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (0 == '') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (false == '') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (4 == 'ergf') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if ('asd' == 'asd') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if ('ASD' == 'asd') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if ('a' > 'b') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if ('f' > 'b') {
    console.log('daugiau');
} else {
    console.log('maziau arba lygu');
}

if ('f' > 'bds') {
    console.log('daugiau');
} else {
    console.log('maziau arba lygu');
}

if ('a' > 'Z') {
    console.log('daugiau');
} else {
    console.log('maziau arba lygu');
}

if (7 == 7) {
    console.log('grieztai lygu');
} else {
    console.log('nelygu');
}

if (7 === '7') {
    console.log('grieztai lygu');
} else {
    console.log('nelygu');
}

console.log('---------------');

const diena =7;

if (diena === 1) {
    console.log('pirmadienis');
}

if (diena === 1) {
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis');
} else if (diena === 3) {
    console.log('traciadienis');
} else if (diena === 4) {
    console.log('ketvirtadienis');
} else if (diena === 5) {
    console.log('penktadienis');
} else if (diena === 6) {
    console.log('sestadienis');
} else if (diena === 7) {
    console.log('sekmadienis');
} else {
    console.log('nezinau tokios dienos...');
}

//CODE NESTING - nestinimas (klausimas tik, ar kodas nuo to bus lengviau ar sunkiau skaitomas; grubiai tariant nestinimas yra html'e, kai tag'o viduje rasai kita tag'a - gilyn, gilyn; tik cia nestinsime if'o viduje kita if'a ir t.t.) 

const day = 8;

if (day === 1) {
    console.log('pirmadienis');
} else {
    console.log('antradienis');
}

// cia su nestinimu jau gerokai persistengta:

if (day === 1) {
    console.log('pirmadienis');
} else {
    if (day === 2) {
        console.log('antradienis');
    } else {
        if (day === 3) {
            console.log('treciadienis');
        } else {
            if (day === 4) {
                console.log('ketviradienis');
            } else {
                if (day === 4) {
                    console.log('ketviradienis');
                } else {
                    if (day === 5) {
                        console.log('penktadienis');
                    } else {
                        if (day === 6) {
                            console.log('sestadienis');
                        } else {
                            if (day === 7) {
                                console.log('sekmadienis');
                            } else {
                                console.log('tokios dienos savaiteje nera...')
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log('---------------');

const nuoKadaSilta = 15;
const temperatura = 30;
const arLyja = true;

if(temperatura < nuoKadaSilta) {
    console.log('Nera silta: reikia striukes');
} else {
    console.log('Silta: varom su maike');
}

console.log('---------------');

// sioje vietoje nestinimas jau tampa visai protingas pasirinkimas:

if(temperatura < nuoKadaSilta) {
    if (arLyja === true) {
        console.log('Nesilta ir lyja: reikia striukes ir skecio');
    } else {
        console.log('Nesilta ir nelyja: reikia striukes');
    }
} else {
    if (arLyja === true) {
        console.log('Silta ir lyja: varom be maikes');
    } else {
        console.log('Silta ir nelyja: varom su maike');
    }
}

if(temperatura < nuoKadaSilta) {
    if (arLyja) {
        console.log('Nesilta ir lyja: reikia striukes ir skecio');
    } else {
        console.log('Nesilta ir nelyja: reikia striukes');
    }
} else {
    if (arLyja) {
        console.log('Silta ir lyja: varom be maikes');
    } else {
        console.log('Silta ir nelyja: varom su maike');
    }
}

console.log('---------------');

/* 
if (silta ir nelyja) {
    console.log('Silta ir nelyja: varom su maike');
} else if (silta ir lyja) {
    console.log('Silta ir lyja: varom be maikes');
} else if (nesilta ir lyja) {
    console.log('Nesilta ir lyja: reikia striukes ir skecio');
} else {
    console.log('Nesilta ir nelyja: reikia striukes');
} 
*/

if (temperatura >= nuoKadaSilta && arLyja === false) {
    console.log('Silta ir nelyja: varom su maike');
} else if (temperatura >= nuoKadaSilta && arLyja === true) {
    console.log('Silta ir lyja: varom be maikes');
} else if (temperatura < nuoKadaSilta && arLyja === true) {
    console.log('Nesilta ir lyja: reikia striukes ir skecio');
} else {
    console.log('Nesilta ir nelyja: reikia striukes');
}

if (temperatura >= nuoKadaSilta && !arLyja) {
    console.log('Silta ir nelyja: varom su maike');
} else if (temperatura >= nuoKadaSilta && arLyja) {
    console.log('Silta ir lyja: varom be maikes');
} else if (temperatura < nuoKadaSilta && arLyja) {
    console.log('Nesilta ir lyja: reikia striukes ir skecio');
} else {
    console.log('Nesilta ir nelyja: reikia striukes');
}