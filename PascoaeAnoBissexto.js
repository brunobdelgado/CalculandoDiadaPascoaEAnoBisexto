var ano, diaJan, diaFev, diaMar, diaAbr, diaMai, diaJun, diaJul, x, y, a, b, c, d, e, mesP, diaP, ndaP, ndaC, mesC, sobraD, ndaCC, sobraDCC;
ano = 2021;
diaJan = 31;
diaMar = 31;
diaAbr = 30;
diaMai = 31;
diaJun = 30;
diaJul = 31;
x = 24;
y = 5;
a = ano % 19;
b = ano % 4;
c = ano % 7;
d = (19 * a + x) % 30;
e = (2 * b + 4 * c + 6 * d + y) % 7;
mesF = 2;
ndaC = ndaP - 47;
if (d + e > 9) {
    diaP = d + e - 9;
    mesP = 04;
}
else {
    diaP = d + e + 22;
    mesP = 03;
}

if (mesP == 4 && diaP == 26) {
    diaP = 19;
}

else if (mesP == 4 && diaP == 25 && d == 28 && a > 10) {
    diaP = 18;
};

console.log("A Páscoa será no dia " + diaP + "/" + mesP + "/" + ano)

if (ano % 4 == 0) {
    console.log("O ano " + ano + " é um ano bisexto")
    diaFev = 29
}

else {
    console.log("O ano " + ano + " não é um ano bisexto")
    diaFev = 28
};

if (mesP == 4) {
    ndaP = diaJan + diaFev + diaMar + diaP
    console.log("O dia da Páscoa no ano é " + ndaP)
}
else {
    ndaP = diaJan + diaFev + diaP
}
ndaC = ndaP - 47
sobraD = ndaC - diaJan;
if (sobraD > diaFev) {
    sobraD = sobraD - diaFev
    console.log("O dia do Carnaval será no dia " + sobraD + "/03/" + ano)
}
else {
    console.log("O dia do Carnaval será no dia " + sobraD + "/02/" + ano)
}

ndaCC = ndaP + 60
sobraDCC = ndaCC - diaJan;
if (sobraDCC > diaFev) {
    sobraDCC = sobraDCC - diaFev
    if (sobraDCC > diaMar) {
        sobraDCC = sobraDCC - diaMar
        if (sobraDCC > diaAbr) {
            sobraDCC = sobraDCC - diaAbr
            if (sobraDCC > diaMai) {
                sobraDCC = sobraDCC - diaMai
                console.log("O dia de Corpus Cristi será no dia " + sobraDCC + "/06/" + ano)
            } else {
                console.log("O dia de Corpus Cristi será no dia " + sobraDCC + "/05/" + ano)
            }
        }
    }
};