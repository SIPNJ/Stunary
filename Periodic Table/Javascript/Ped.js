// variable
var atomnum = document.getElementById("atomnum");
var elesym = document.getElementById("elesym");
var elenam = document.getElementById("elenam");
var elemass = document.getElementById("elemass");
var elenegati = document.getElementById("elenegati");
var config = document.getElementById("config");

var eleconte = document.getElementById("elementcontent");


// element
var H = document.getElementById("H");
var He = document.getElementById("He");

var Li = document.getElementById("Li");
var Be = document.getElementById("Be");
var B = document.getElementById("B");
var C = document.getElementById("C");
var N = document.getElementById("N");
var O = document.getElementById("O");
var F = document.getElementById("F");
var Ne = document.getElementById("Ne");

var Na = document.getElementById("Na");
var Mg = document.getElementById("Mg");
var Al = document.getElementById("Al");
var Si = document.getElementById("Si");
var P = document.getElementById("P");
var S = document.getElementById("S");
var Cl = document.getElementById("Cl");
var Ar = document.getElementById("Ar");

var K = document.getElementById("K");
var Ca = document.getElementById("Ca");
var Sc = document.getElementById("Sc");
var Ti = document.getElementById("Ti");
var V = document.getElementById("V");
var Cr = document.getElementById("Cr");
var Mn = document.getElementById("Mn");
var Fe = document.getElementById("Fe");
var Co = document.getElementById("Co");
var Ni = document.getElementById("Ni");
var Cu = document.getElementById("Cu");
var Zn = document.getElementById("Zn");
var Ge = document.getElementById("Ge");
var Ga = document.getElementById("Ga");
var As = document.getElementById("As");
var Se = document.getElementById("Se");
var Br = document.getElementById("Br");
var Kr = document.getElementById("Kr");

var Rb = document.getElementById("Rb");
var Sr = document.getElementById("Sr");
var Y = document.getElementById("Y");
var Zr = document.getElementById("Zr");
var Nb = document.getElementById("Nb");
var Mo = document.getElementById("Mo");
var Tc = document.getElementById("Tc");
var Ru = document.getElementById("Ru");
var Rh = document.getElementById("Rh");
var Pd = document.getElementById("Pd");
var Ag = document.getElementById("Ag");
var Cd = document.getElementById("Cd");
var In = document.getElementById("In");
var Sn = document.getElementById("Sn");
var Sb = document.getElementById("Sb");
var Te = document.getElementById("Te");
var I = document.getElementById("I");
var Xe = document.getElementById("Xe");

var Cs = document.getElementById("Cs");
var Fr = document.getElementById("Fr");
var Hf = document.getElementById("Hf");
var Ta = document.getElementById("Ta");
var W = document.getElementById("W");
var Re = document.getElementById("Re");
var Os = document.getElementById("Os");
var Ir = document.getElementById("Ir");
var Pt = document.getElementById("Pt");
var Au = document.getElementById("Au");
var Hg = document.getElementById("Hg");
var Tl = document.getElementById("Tl");
var Pb = document.getElementById("Pb");
var Bi = document.getElementById("Bi");
var Po = document.getElementById("Po");
var At = document.getElementById("At");
var Rn = document.getElementById("Rn");

var Fr = document.getElementById("Fr");
var Ra = document.getElementById("Ra");
var Rf = document.getElementById("Rf");
var Db = document.getElementById("Db");
var Sg = document.getElementById("Sg");
var Bh = document.getElementById("Bh");
var Hs = document.getElementById("Hs");
var Mt = document.getElementById("Mt");
var Ds = document.getElementById("Ds");
var Rg = document.getElementById("Rg");
var Cn = document.getElementById("Cn");
var Nh = document.getElementById("Nh");
var Fl = document.getElementById("Fl");
var Mc = document.getElementById("Mc");
var Lv = document.getElementById("Lv");
var Ts = document.getElementById("Ts");
var Og = document.getElementById("Og");

var La = document.getElementById("La");
var Ce = document.getElementById("Ce");
var Pr = document.getElementById("Pr");
var Nd = document.getElementById("Nd");
var Pm = document.getElementById("Pm");
var Sm = document.getElementById("Sm");
var Eu = document.getElementById("Eu");
var Gd = document.getElementById("Gd");
var Tb = document.getElementById("Tb");
var Dy = document.getElementById("Dy");
var Ho = document.getElementById("Ho");
var Er = document.getElementById("Er");
var Tm = document.getElementById("Tm");
var Yb = document.getElementById("Yb");
var Lu = document.getElementById("Lu");

var Ac = document.getElementById("Ac");
var Th = document.getElementById("Th");
var Pa = document.getElementById("Pa");
var U = document.getElementById("U");
var Np = document.getElementById("Np");
var Pu = document.getElementById("Pu");
var Am = document.getElementById("Am");
var Cm = document.getElementById("Cm");
var Bk = document.getElementById("Bk");
var Cf = document.getElementById("Cf");
var Es = document.getElementById("Es");
var Fm = document.getElementById("Fm");
var Md = document.getElementById("Md");
var No = document.getElementById("No");
var Lr = document.getElementById("Lr");


// : {
    // atomnum: "",
    // elenam: "",
    // elesym: "",
    // elemass: "",
    // elenegati: "",
    // config: "",
// }

var varelement = {
    H: {
        atomnum: "1",
        elenam: "Hydrogen",
        elesym: "H",
        elemass: "1",
        elenegati: "-1,+1",
        config: "1s"+"1".sup(), 
        block: `s`,
    },
    He: {
        atomnum: "2",
        elenam: "Helium",
        elesym: "He",
        elemass: "4",
        elenegati: "",
        config: "1s"+"2".sup(),
        block: `s`,
    },
    Li: {
        atomnum: "3",
        elenam: "Lithium",
        elesym: "Li",
        elemass: "7",
        elenegati: "1",
        config: "[He]"+"2s"+"1".sup(),
        block: `s`,
    },
    Be: {
        atomnum: "4",
        elenam: "Berilyum",
        elesym: "Be",
        // elemass: "",
        // elenegati: "1",
        config: "[He]"+"2s"+"2".sup(),
        block: `s`,
    },
    B: {
        atomnum: "5",
        elenam: "Boron",
        elesym: "B",
        // elemass: "9",
        // elenegati: "",
        config: "[He]"+"2s"+"2".sup()+"2p"+"1".sup(),
        block: `p`,
    },
    C: {
        atomnum: "6",
        elenam: "Carbon",
        elesym: "C",
        elemass: "12",
        // elenegati: "1",
        config: "[He]"+"2s"+"1".sup()+"2p"+"2".sup(),
        block: `p`,
    },
    N: {
        atomnum: "7",
        elenam: "Nitrogen",
        elesym: "N",
        elemass: "14",
        // elenegati: "1",
        config: "[He]"+"2s"+"1".sup()+"2p"+"3".sup(),
        block: `p`,
    },
    O: {
        atomnum: "8",
        elenam: "Oxygen",
        elesym: "O",
        elemass: "16",
        // elenegati: "1",
        config: "[He]"+"2s"+"1".sup()+"2p"+"4".sup(),
        block: `p`,
    },
    F: {
        atomnum: "9",
        elenam: "Florine",
        elesym: "F",
        elemass: "19",
        // elenegati: "1",
        config: "[He]"+"2s"+"1".sup()+"2p"+"5".sup(),
        block: `p`,
    },
    Ne: {
        atomnum: "10",
        elenam: "Neon",
        elesym: "Ne",
        elemass: "20",
        elenegati: "",
        config: "[He]"+"2s"+"1".sup()+"2p"+"6".sup(),
        block: `p`,
    },
    Na: {
        atomnum: "11",
        elenam: "Sodium",
        elesym: "Na",
        elemass: "23",
        elenegati: "+1",
        config: "[Ne]"+"3s"+"1".sup(),
        block: `s`,
    },
    Mg: {
        atomnum: "12",
        elenam: "Magnesium",
        elesym: "Mg",
        elemass: "24",
        elenegati: "+2",
        config: "[Ne]"+"3s"+"2".sup(),
        block: `s`,
    },
    Al: {
        atomnum: "13",
        elenam: "Aluminium",
        elesym: "Al",
        elemass: "27",
        elenegati: "+3",
        config: "[Ne]"+"3s"+"2".sup()+"3p"+"1".sup(),
        block: `p`,
    },
    Si: {
        atomnum: "14",
        elenam: "Silicon",
        elesym: "Si",
        elemass: "28",
        // elenegati: "+3",
        config: "[Ne]"+"3s"+"2".sup()+"3p"+"2".sup(),
        block: `p`,
    },
    P: {
        atomnum: "15",
        elenam: "Phosphorus",
        elesym: "P",
        elemass: "31",
        // elenegati: "1",
        config: "[Ne]"+"3s"+"2".sup()+"3p"+"3".sup(),
        block: `p`,
    },
    S: {
        atomnum: "16",
        elenam: "Sulphur",
        elesym: "S",
        elemass: "32",
        // elenegati: "1",
        config: "[Ne]"+"3s"+"2".sup()+"3p"+"4".sup(),
        block: `p`,
    },
    Cl: {
        atomnum: "17",
        elenam: "Chlorine",
        elesym: "Cl",
        elemass: "35.5",
        elenegati: "-1,+1,+3,+5,+7",
        config: "[Ne]"+"3s"+"2".sup()+"3p"+"5".sup(),
        block: `p`,
    },
    Ar: {
        atomnum: "18",
        elenam: "Argon",
        elesym: "Ar",
        elemass: "40",
        elenegati: "",
        config: "[Ne]"+"3s"+"2".sup()+"3p"+"6".sup(),
        block: `p`,
    },
    K: {
        atomnum: "19",
        elenam: "Potassium",
        elesym: "K",
        elemass: "39",
        elenegati: "+1",
        config: "[Ar]"+"4s"+"1".sup(),
        block: `s`,
    },
    Ca: {
        atomnum: "20",
        elenam: "Calcium",
        elesym: "Ca",
        elemass: "40",
        elenegati: "+2",
        config: "[Ar]"+"4s"+"2".sup(),
        block: `s`,
    },
    Sc: {
        atomnum: "21",
        elenam: "Scandium",
        elesym: "Sc",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"1".sup()+"4s"+"2".sup(),
        block: `d`,
    },
    Ti: {
        atomnum: "22",
        elenam: "Titanium",
        elesym: "Ti",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"2".sup()+"4s"+"2".sup(),
        block: `d`,
    },
    V: {
        atomnum: "23",
        elenam: "Vanadium",
        elesym: "V",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"3".sup()+"4s"+"2".sup(),
        block: `d`,
    },

    Cr: {
        atomnum: "24",
        elenam: "Crom",
        elesym: "Cr",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"5".sup()+"4s"+"1".sup(),
    },
    Mn: {
        atomnum: "25",
        elenam: "Manganese",
        elesym: "Mn",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"5".sup()+"4s"+"2".sup(),
    },
    Fe: {
        atomnum: "26",
        elenam: "Iron",
        elesym: "Fe",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"6".sup()+"4s"+"2".sup(),
    },
    Co: {
        atomnum: "27",
        elenam: "Cobalt",
        elesym: "Co",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"7".sup()+"4s"+"2".sup(),
    },
    Ni: {
        atomnum: "28",
        elenam: "Nikel",
        elesym: "Ni",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"8".sup()+"4s"+"2".sup(),
    },
    Cu: {
        atomnum: "29",
        elenam: "Copper",
        elesym: "Ti",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"1".sup(),
    },
    Zn: {
        atomnum: "30",
        elenam: "Zinc",
        elesym: "Zn",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup(),
    },
    Ga: {
        atomnum: "31",
        elenam: "Galium",
        elesym: "Ga",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup()+"4p"+"1",
    },
    Ge: {
        atomnum: "32",
        elenam: "Gecmanium",
        elesym: "Ge",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup()+"4p"+"2",
    },
    As: {
        atomnum: "33",
        elenam: "Arsenic",
        elesym: "As",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup()+"4p"+"3",
    },
    Se: {
        atomnum: "34",
        elenam: "Selenium",
        elesym: "Se",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup()+"4p"+"4",
    },
    Br: {
        atomnum: "35",
        elenam: "Bromine",
        elesym: "Br",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup()+"4p"+"5",
    },
    Kr: {
        atomnum: "36",
        elenam: "Kryptonite",
        elesym: "Kr",
        // elemass: "7",
        // elenegati: "1",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup()+"4p"+"6",
    },
    Rb: {
        atomnum: "37",
        elenam: "Rubidium",
        elesym: "Rb",
        // elemass: "7",
        // elenegati: "1",
        config: "[Kr]"+"5s"+"1".sup(),
    },
    Sr: {
        atomnum: "38",
        elenam: "Strontium",
        elesym: "Sr",
        // elemass: "7",
        // elenegati: "1",
        config: "[Kr]"+"5s"+"2".sup(),
    },
    Y: {
        atomnum: "39",
        elenam: "Yttrium",
        elesym: "Y",
        // elemass: "7",
        // elenegati: "1",
        config: "[Kr]"+"4d"+"1".sup()+"5s"+"2".sup(),
    },



}

// H.addEventListener("click", function(){
//     atomnum.textContent = varelement.H.atomnum;
//     elesym.textContent = varelement.H.elesym;
//     elenam.textContent = varelement.H.name;
//     elemass.textContent = varelement.H.elemass;
//     elenegati.textContent = varelement.H.elenegati;
//     config.innerHTML = varelement.H.config;
// });

// He.addEventListener("click", function(){
//     atomnum.textContent = varelement.He.atomnum;
//     elesym.textContent = varelement.He.elesym;
//     elenam.textContent = varelement.He.name;
//     elemass.textContent = varelement.He.elemass;
//     elenegati.textContent = varelement.He.elenegati;
//     config.innerHTML = varelement.He.config;
// });


// H.addEventListener("click", function(){
//     atomnum.textContent = 1;
//     elesym.textContent = "H";
//     elenam.textContent = "H";

// });.innerHTML = varelement.Li.config;

function conte(selements) {
    let elmnt = selements.innerHTML;
    atomnum.textContent = varelement[elmnt].atomnum;
    elesym.textContent = varelement[elmnt].elesym;
    elenam.textContent = varelement[elmnt].elenam;
    elemass.textContent = varelement[elmnt].elemass;
    elenegati.textContent = varelement[elmnt].elenegati;
    config.innerHTML = varelement[elmnt].config;

    elenegati.style.width = `100%`
    elenegati.style.border = `100% black solid`;
    if(varelement[elmnt].block == `s`){
        eleconte.style.backgroundColor = `green`;
        eleconte.style.color = `white`;
    } else if(varelement[elmnt].block == `p`){
        eleconte.style.backgroundColor = `rgb(233, 77, 233)`;
        eleconte.style.color = `white`;
    } else if(varelement[elmnt].block == `d`){
        eleconte.style.backgroundColor = `gold`;
        eleconte.style.color = `black`;
    } else if(varelement[elmnt].block == `f`){
        eleconte.style.backgroundColor = `burlywood`;
        eleconte.style.color = `black`;
    }

}





