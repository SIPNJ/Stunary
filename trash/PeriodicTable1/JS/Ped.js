// variable
var atomnum = document.getElementsByClassName("atomnum")[0];
var elesym = document.getElementsByClassName("elesym")[0];
var elenam = document.getElementsByClassName("elenam")[0];
var elemass = document.getElementsByClassName("elemass")[0];
var elenegati = document.getElementsByClassName("elenegati")[0];
var config = document.getElementsByClassName("config")[0];
var title = document.getElementById("title");

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
        elenegati: "+1",
        config: "[He]"+"2s"+"1".sup(),
        block: `s`,
    },
    Be: {
        atomnum: "4",
        elenam: "Berilyum",
        elesym: "Be",
        elemass: "9",
        elenegati: "+2",
        config: "[He]"+"2s"+"2".sup(),
        block: `s`,
    },
    B: {
        atomnum: "5",
        elenam: "Boron",
        elesym: "B",
        elemass: "11",
        elenegati: "+3",
        config: "[He]"+"2s"+"2".sup()+"2p"+"1".sup(),
        block: `p`,
    },
    C: {
        atomnum: "6",
        elenam: "Carbon",
        elesym: "C",
        elemass: "12",
        elenegati: "-4,-3,-2,-1,+1,+2,+3,+4",
        config: "[He]"+"2s"+"1".sup()+"2p"+"2".sup(),
        block: `p`,
    },
    N: {
        atomnum: "7",
        elenam: "Nitrogen",
        elesym: "N",
        elemass: "14",
        elenegati: "-3,+1,+2,+3,+4,+5",
        config: "[He]"+"2s"+"1".sup()+"2p"+"3".sup(),
        block: `p`,
    },
    O: {
        atomnum: "8",
        elenam: "Oxygen",
        elesym: "O",
        elemass: "16",
        elenegati: "-2,-1,+2",
        config: "[He]"+"2s"+"1".sup()+"2p"+"4".sup(),
        block: `p`,
    },
    F: {
        atomnum: "9",
        elenam: "Fluorine",
        elesym: "F",
        elemass: "19",
        elenegati: "-1",
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
        elenegati: "+4",
        config: "[Ne]"+"3s"+"2".sup()+"3p"+"2".sup(),
        block: `p`,
    },
    P: {
        atomnum: "15",
        elenam: "Phosphorus",
        elesym: "P",
        elemass: "31",
        elenegati: "-3,+3,+5",
        config: "[Ne]"+"3s"+"2".sup()+"3p"+"3".sup(),
        block: `p`,
    },
    S: {
        atomnum: "16",
        elenam: "Sulphur",
        elesym: "S",
        elemass: "32",
        elenegati: "-2,-1,+4,+6",
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
        elemass: "45",
        elenegati: "+3",
        config: "[Ar]"+"3d"+"1".sup()+"4s"+"2".sup(),
        block: `d`,
    },
    Ti: {
        atomnum: "22",
        elenam: "Titanium",
        elesym: "Ti",
        elemass: "48",
        elenegati: "+2,+3,+4",
        config: "[Ar]"+"3d"+"2".sup()+"4s"+"2".sup(),
        block: `d`,
    },
    V: {
        atomnum: "23",
        elenam: "Vanadium",
        elesym: "V",
        elemass: "51",
        elenegati: "+2,+4,+5",
        config: "[Ar]"+"3d"+"3".sup()+"4s"+"2".sup(),
        block: `d`,
    },

    Cr: {
        atomnum: "24",
        elenam: "Crom",
        elesym: "Cr",
        elemass: "52",
        elenegati: "+2,+3,+4,+6",
        config: "[Ar]"+"3d"+"5".sup()+"4s"+"1".sup(),
        block: "d",
    },
    Mn: {
        atomnum: "25",
        elenam: "Manganese",
        elesym: "Mn",
        elemass: "55",
        elenegati: "+2,+3,+4,+6,+7",
        config: "[Ar]"+"3d"+"5".sup()+"4s"+"2".sup(),
        block: "d",
    },
    Fe: {
        atomnum: "26",
        elenam: "Iron",
        elesym: "Fe",
        elemass: "56",
        elenegati: "+2,+3",
        config: "[Ar]"+"3d"+"6".sup()+"4s"+"2".sup(),
        block: "d",
    },
    Co: {
        atomnum: "27",
        elenam: "Cobalt",
        elesym: "Co",
        elemass: "59",
        elenegati: "+2",
        config: "[Ar]"+"3d"+"7".sup()+"4s"+"2".sup(),
        block: "d",
    },
    Ni: {
        atomnum: "28",
        elenam: "Nikel",
        elesym: "Ni",
        elemass: "59",
        elenegati: "+2",
        config: "[Ar]"+"3d"+"8".sup()+"4s"+"2".sup(),
        block: "d",
    },
    Cu: {
        atomnum: "29",
        elenam: "Copper",
        elesym: "Ti",
        elemass: "64",
        elenegati: "+1,+2",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"1".sup(),
        block: "d",
    },
    Zn: {
        atomnum: "30",
        elenam: "Zinc",
        elesym: "Zn",
        elemass: "65",
        elenegati: "+2",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup(),
        block: "d",
    },
    Ga: {
        atomnum: "31",
        elenam: "Galium",
        elesym: "Ga",
        elemass: "70",
        elenegati: "+3",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup()+"4p"+"1".sup(),
        block: "p",
    },
    Ge: {
        atomnum: "32",
        elenam: "Gecmanium",
        elesym: "Ge",
        elemass: "73",
        elenegati: "+2,+4",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup()+"4p"+"2".sup(),
        block: "p",
    },
    As: {
        atomnum: "33",
        elenam: "Arsenic",
        elesym: "As",
        elemass: "75",
        elenegati: "-3,+3,+5",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup()+"4p"+"3".sup(),
        block: "p",
    },
    Se: {
        atomnum: "34",
        elenam: "Selenium",
        elesym: "Se",
        elemass: "79",
        elenegati: "-2,+4,+6",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup()+"4p"+"4".sup(),
        block: "p",
    },
    Br: {
        atomnum: "35",
        elenam: "Bromine",
        elesym: "Br",
        elemass: "80",
        elenegati: "-1,+1,+5",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup()+"4p"+"5".sup(),
        block: "p",
    },
    Kr: {
        atomnum: "36",
        elenam: "Kryptonite",
        elesym: "Kr",
        elemass: "84",
        elenegati: "+2,+4",
        config: "[Ar]"+"3d"+"10".sup()+"4s"+"2".sup()+"4p"+"6".sup(),
        block: "p",
    },
    Rb: {
        atomnum: "37",
        elenam: "Rubidium",
        elesym: "Rb",
        elemass: "85",
        elenegati: "+1",
        config: "[Kr]"+"5s"+"1".sup(),
        block: "s",
    },
    Sr: {
        atomnum: "38",
        elenam: "Strontium",
        elesym: "Sr",
        elemass: "88",
        elenegati: "+2",
        config: "[Kr]"+"5s"+"2".sup(),
        block: "s",
    },
    Y: {
        atomnum: "39",
        elenam: "Yttrium",
        elesym: "Y",
        elemass: "89",
        elenegati: "+3",
        config: "[Kr]"+"4d"+"1".sup()+"5s"+"2".sup(),
        block: "d",
    },
    Zr: {
        atomnum: "40",
        elenam: "Zirconium",
        elesym: "Zr",
        elemass: "91",
        elenegati: "+4",
        config: "[Kr]"+"4d"+"2".sup()+"5s"+"2".sup(),
        block: "d",
    },
    Nb: {
        atomnum: "41",
        elenam: "Niobium",
        elesym: "Nb",
        elemass: "93",
        elenegati: "+5",
        config: "[Kr]"+"4d"+"4".sup()+"5s"+"1".sup(),
        block: "d",
    },
    Mo: {
        atomnum: "42",
        elenam: "Molybdenum",
        elesym: "Mo",
        elemass: "96",
        elenegati: "+2,+3,+4,+6",
        config: "[Kr]"+"4d"+"5".sup()+"5s"+"1".sup(),
        block: "d",
    },
    Tc: {
        atomnum: "43",
        elenam: "Technetium",
        elesym: "Tc",
        elemass: "",
        elenegati: "+3,+4,+7",
        config: "[Kr]"+"4d"+"5".sup()+"5s"+"2".sup(),
        block: "d",
    },
    Ru: {
        atomnum: "44",
        elenam: "Ruthenium",
        elesym: "Ru",
        elemass: "101",
        elenegati: "+2,+3,+4,+8",
        config: "[Kr]"+"4d"+"7".sup()+"5s"+"1".sup(),
        block: "d",
    },
    Rh: {
        atomnum: "45",
        elenam: "Rhodium",
        elesym: "Rh",
        elemass: "103",
        elenegati: "+2,+3,+2",
        config: "[Kr]"+"4d"+"8".sup()+"5s"+"2".sup(),
        block: "d",
    },
    Pd: {
        atomnum: "46",
        elenam: "Paladium",
        elesym: "Pd",
        elemass: "106",
        elenegati: "+2,+4",
        config: "[Kr]"+"4d"+"10".sup(),
        block: "d",
    },
    Ag: {
        atomnum: "47",
        elenam: "Silver",
        elesym: "Ag",
        elemass: "108",
        elenegati: "+1",
        config: "[Kr]"+"4d"+"10".sup()+"5s"+"1".sup(),
        block: "d",
    },
    Cd: {
        atomnum: "48",
        elenam: "Cadimium",
        elesym: "Cd",
        elemass: "112",
        elenegati: "+2",
        config: "[Kr]"+"4d"+"10".sup()+"5s"+"2".sup(),
        block: "d",
    },
    In: {
        atomnum: "49",
        elenam: "Indium",
        elesym: "In",
        elemass: "115",
        elenegati: "+3",
        config: "[Kr]"+"4d"+"10".sup()+"5s"+"2".sup()+"5p"+"1".sup(),
        block: "p",
    },
    Sn: {
        atomnum: "50",
        elenam: "Tin",
        elesym: "Sn",
        elemass: "119",
        elenegati: "+2,+4",
        config: "[Kr]"+"4d"+"10".sup()+"5s"+"2".sup()+"5p"+"2".sup(),
        block: "p",
    },
    Sb: {
        atomnum: "51",
        elenam: "Antimony",
        elesym: "Sb",
        elemass: "122",
        elenegati: "-3,+3,+5",
        config: "[Kr]"+"4d"+"10".sup()+"5s"+"2".sup()+"5p"+"3".sup(),
        block: "p",
    },
    Te: {
        atomnum: "52",
        elenam: "Tellurium",
        elesym: "Te",
        elemass: "128",
        elenegati: "-2,+4,+6",
        config: "[Kr]"+"4d"+"10".sup()+"5s"+"2".sup()+"5p"+"4".sup(),
        block: "p",
    },
    I: {
        atomnum: "53",
        elenam: "Iodine",
        elesym: "I",
        elemass: "127",
        elenegati: "-1,+1,+3,+5,+7,+8",
        config: "[Kr]"+"4d"+"10".sup()+"5s"+"2".sup()+"5p"+"5".sup(),
        block: "p",
    },
    Xe: {
        atomnum: "54",
        elenam: "Xenon",
        elesym: "Xe",
        elemass: "131",
        elenegati: "+2,+4,+6",
        config: "[Kr]"+"4d"+"10".sup()+"5s"+"2".sup()+"5p"+"6".sup(),
        block: "p",
    },
    Cs: {
        atomnum: "55",
        elenam: "Caesium",
        elesym: "Cs",
        elemass: "133",
        elenegati: "+1",
        config: "[Xe]"+"6s"+"1".sup(),
        block: "s",
    },
    Ba: {
        atomnum: "56",
        elenam: "Barium",
        elesym: "Ba",
        elemass: "137",
        elenegati: "+2",
        config: "[Xe]"+"6s"+"2".sup(),
        block: "s",
    },
    // Lanthanoid
    La: {
        atomnum: "57",
        elenam: "Lanthanium",
        elesym: "La",
        elemass: "139",
        elenegati: "+3",
        config: "[Xe]"+"5d"+"1".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Ce: {
        atomnum: "58",
        elenam: "Cerium",
        elesym: "Ce",
        elemass: "140",
        elenegati: "+3,+4",
        config: "[Xe]"+"4f"+"2".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Pr: {
        atomnum: "59",
        elenam: "Praseodymiunm",
        elesym: "Pr",
        elemass: "141",
        elenegati: "+3,+4",
        config: "[Xe]"+"4f"+"3".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Nd: {
        atomnum: "60",
        elenam: "Neodymium",
        elesym: "Nd",
        elemass: "144",
        elenegati: "+3,+4",
        config: "[Xe]"+"4f"+"4".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Pm: {
        atomnum: "61",
        elenam: "Promethium",
        elesym: "Pm",
        elemass: "",
        elenegati: "+3",
        config: "[Xe]"+"4f"+"5".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Sm: {
        atomnum: "62",
        elenam: "Samarium",
        elesym: "Sm",
        elemass: "150",
        elenegati: "+2,+3",
        config: "[Xe]"+"4f"+"6".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Eu: {
        atomnum: "63",
        elenam: "Europium",
        elesym: "Eu",
        elemass: "152",
        elenegati: "+2,+3",
        config: "[Xe]"+"4f"+"7".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Gd: {
        atomnum: "64",
        elenam: "Gadolinium",
        elesym: "Gd",
        elemass: "157",
        elenegati: "+3",
        config: "[Xe]"+"4f"+"7".sup()+"5d"+"1".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Tb: {
        atomnum: "65",
        elenam: "Terbium",
        elesym: "Tb",
        elemass: "159",
        elenegati: "+3,+4",
        config: "[Xe]"+"4f"+"9".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Dy: {
        atomnum: "66",
        elenam: "Dysprosium",
        elesym: "Dy",
        elemass: "162.5",
        elenegati: "+3,+4",
        config: "[Xe]"+"4f"+"10".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Ho: {
        atomnum: "67",
        elenam: "Holmium",
        elesym: "Ho",
        elemass: "165",
        elenegati: "+3",
        config: "[Xe]"+"4f"+"11".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Er: {
        atomnum: "68",
        elenam: "Erbium",
        elesym: "Er",
        elemass: "159",
        elenegati: "+3",
        config: "[Xe]"+"4f"+"12".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Tm: {
        atomnum: "69",
        elenam: "Thulium",
        elesym: "Tm",
        elemass: "169",
        elenegati: "+3",
        config: "[Xe]"+"4f"+"13".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Yb: {
        atomnum: "70",
        elenam: "Ytterbium",
        elesym: "Yb",
        elemass: "173",
        elenegati: "+2,+3",
        config: "[Xe]"+"4f"+"14".sup()+"6s"+"2".sup(),
        block: "f",
    },
    Lu: {
        atomnum: "71",
        elenam: "Lutetium",
        elesym: "Lu",
        elemass: "175",
        elenegati: "+3",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"1".sup()+"6s"+"2".sup(),
        block: "f",
    },
    // 
    Hf: {
        atomnum: "72",
        elenam: "Hafnium",
        elesym: "Hf",
        elemass: "178.5",
        elenegati: "+4",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"2".sup()+"6s"+"2".sup(),
        block: "d",
    },
    Ta: {
        atomnum: "73",
        elenam: "Tantalum",
        elesym: "Ta",
        elemass: "181",
        elenegati: "+5",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"3".sup()+"6s"+"2".sup(),
        block: "d",
    },
    W: {
        atomnum: "74",
        elenam: "Tungsten",
        elesym: "W",
        elemass: "184",
        elenegati: "+2,+6",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"4".sup()+"6s"+"2".sup(),
        block: "d",
    },
    Re: {
        atomnum: "75",
        elenam: "Rhenium",
        elesym: "Re",
        elemass: "186",
        elenegati: "+3,+4,+7",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"5".sup()+"6s"+"2".sup(),
        block: "d",
    },
    Os: {
        atomnum: "76",
        elenam: "Osmium",
        elesym: "Os",
        elemass: "190",
        elenegati: "+2,+3,+4,+8",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"6".sup()+"6s"+"2".sup(),
        block: "d",
    },
    Ir: {
        atomnum: "77",
        elenam: "Iridium",
        elesym: "Ir",
        elemass: "192",
        elenegati: "+2,+3,+4",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"7".sup()+"6s"+"2".sup(),
        block: "d",
    },
    Pt: {
        atomnum: "78",
        elenam: "Platinum",
        elesym: "Pt",
        elemass: "195",
        elenegati: "+2,+4",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"9".sup()+"6s"+"1".sup(),
        block: "d",
    },
    Au: {
        atomnum: "79",
        elenam: "Gold",
        elesym: "Au",
        elemass: "197",
        elenegati: "+1,+3",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"10".sup()+"6s"+"1".sup(),
        block: "d",
    },
    Hg: {
        atomnum: "80",
        elenam: "Mercury",
        elesym: "Hg",
        elemass: "201",
        elenegati: "+1,+2",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"10".sup()+"6s"+"2".sup(),
        block: "d",
    },
    Tl: {
        atomnum: "81",
        elenam: "Thallium",
        elesym: "Tl",
        elemass: "204",
        elenegati: "+1,+3",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"10".sup()+"6s"+"2".sup()+"6p"+"1".sup(),
        block: "p",
    },
    Pb: {
        atomnum: "82",
        elenam: "Lead",
        elesym: "Pb",
        elemass: "207",
        elenegati: "+2,+4",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"10".sup()+"6s"+"2".sup()+"6p"+"2".sup(),
        block: "p",
    },
    Bi: {
        atomnum: "83",
        elenam: "Bismuth",
        elesym: "Tl",
        elemass: "209",
        elenegati: "+3,+5",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"10".sup()+"6s"+"2".sup()+"6p"+"3".sup(),
        block: "p",
    },
    Po: {
        atomnum: "84",
        elenam: "Polonium",
        elesym: "Po",
        elemass: "",
        elenegati: "-2,+2,+4,+6",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"10".sup()+"6s"+"2".sup()+"6p"+"4".sup(),
        block: "p",
    },
    At: {
        atomnum: "85",
        elenam: "Astatine",
        elesym: "At",
        elemass: "",
        elenegati: "-1,+1,+3,+5,+7",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"10".sup()+"6s"+"2".sup()+"6p"+"5".sup(),
        block: "p",
    },
    Rn: {
        atomnum: "86",
        elenam: "Radon",
        elesym: "Rn",
        elemass: "",
        elenegati: "",
        config: "[Xe]"+"4f"+"14".sup()+"5d"+"10".sup()+"6s"+"2".sup()+"6p"+"6".sup(),
        block: "p",
    },
    Fr: {
        atomnum: "87",
        elenam: "Francium",
        elesym: "Fr",
        elemass: "",
        elenegati: "+1",
        config: "[Rn]"+"7s"+"1".sup(),
        block: "s",
    },
    Ra: {
        atomnum: "88",
        elenam: "Radium",
        elesym: "Ra",
        elemass: "",
        elenegati: "+2",
        config: "[Rn]"+"7s"+"2".sup(),
        block: "s",
    },
    // Actinoid
    Ac: {
        atomnum: "89",
        elenam: "Actinium",
        elesym: "Ac",
        elemass: "",
        elenegati: "+3",
        config: "[Rn]"+"6d"+"1".sup()+"7s"+"2".sup(),
        block: "f",
    },
    Th: {
        atomnum: "90",
        elenam: "Thorium",
        elesym: "Th",
        elemass: "232",
        elenegati: "+4",
        config: "[Rn]"+"6d"+"2".sup()+"7s"+"2".sup(),
        block: "f",
    },
    Pa: {
        atomnum: "91",
        elenam: "Protactinium",
        elesym: "Pa",
        elemass: "231",
        elenegati: "+4,+5",
        config: "[Rn]"+"5f"+"2".sup()+"6d"+"1".sup()+"7s"+"2".sup(),
        block: "f",
    },
    U: {
        atomnum: "92",
        elenam: "Uranium",
        elesym: "Pa",
        elemass: "238",
        elenegati: "+4,+6",
        config: "[Rn]"+"5f"+"3".sup()+"6d"+"1".sup()+"7s"+"2".sup(),
        block: "f",
    },
    Np: {
        atomnum: "93",
        elenam: "Neptunium",
        elesym: "Np",
        elemass: "",
        elenegati: "+4,+5,+6",
        config: "[Rn]"+"5f"+"4".sup()+"6d"+"1".sup()+"7s"+"2".sup(),
        block: "f",
    },
    Pu: {
        atomnum: "94",
        elenam: "Plutonium",
        elesym: "Pu",
        elemass: "",
        elenegati: "+4,+5,+6",
        config: "[Rn]"+"5f"+"6".sup()+"7s"+"2".sup(),
        block: "f",
    },
    Am: {
        atomnum: "95",
        elenam: "Americium",
        elesym: "Am",
        elemass: "",
        elenegati: "+4,+5,+6",
        config: "[Rn]"+"5f"+"7".sup()+"7s"+"2".sup(),
        block: "f",
    },
    Cm: {
        atomnum: "96",
        elenam: "Curium",
        elesym: "Cm",
        elemass: "",
        elenegati: "+3",
        config: "[Rn]"+"5f"+"7".sup()+"6d"+"1".sup()+"7s"+"2".sup(),
        block: "f",
    },
    Bk: {
        atomnum: "97",
        elenam: "Berkelium",
        elesym: "Bk",
        elemass: "",
        elenegati: "+3,+4",
        config: "[Rn]"+"5f"+"9".sup()+"7s"+"2".sup(),
        block: "f",
    },
    Cf: {
        atomnum: "98",
        elenam: "Californium",
        elesym: "Cf",
        elemass: "",
        elenegati: "+3",
        config: "[Rn]"+"5f"+"10".sup()+"7s"+"2".sup(),
        block: "f",
    },
    Es: {
        atomnum: "99",
        elenam: "Einsteinium",
        elesym: "Es",
        elemass: "",
        elenegati: "+3",
        config: "[Rn]"+"5f"+"11".sup()+"7s"+"2".sup(),
        block: "f",
    },
    Fm: {
        atomnum: "100",
        elenam: "Fermium",
        elesym: "Fm",
        elemass: "",
        elenegati: "+3",
        config: "[Rn]"+"5f"+"12".sup()+"7s"+"2".sup(),
        block: "f",
    },
    Md: {
        atomnum: "101",
        elenam: "Mendelevium",
        elesym: "Md",
        elemass: "",
        elenegati: "+3",
        config: "[Rn]"+"5f"+"13".sup()+"7s"+"2".sup(),
        block: "f",
    },
    No: {
        atomnum: "102",
        elenam: "Nobelium",
        elesym: "No",
        elemass: "",
        elenegati: "+3",
        config: "[Rn]"+"5f"+"14".sup()+"7s"+"2".sup(),
        block: "f",
    },
    Lr: {
        atomnum: "103",
        elenam: "Lawrencium",
        elesym: "Lr",
        elemass: "",
        elenegati: "+3",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"1".sup()+"7s"+"2".sup(),
        block: "f",
    },
    // 
    Rf: {
        atomnum: "104",
        elenam: "Rutherfordium",
        elesym: "Rf",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"2".sup()+"7s"+"2".sup(),
        block: "d",
    },
    Db: {
        atomnum: "105",
        elenam: "Dubnium",
        elesym: "Db",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"3".sup()+"7s"+"2".sup(),
        block: "d",
    },
    Sg: {
        atomnum: "106",
        elenam: "Rutherfordium",
        elesym: "Sg",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"4".sup()+"7s"+"2".sup(),
        block: "d",
    },
    Bh: {
        atomnum: "107",
        elenam: "Bhorium",
        elesym: "Bh",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"5".sup()+"7s"+"2".sup(),
        block: "d",
    },
    Hs: {
        atomnum: "108",
        elenam: "Hassium",
        elesym: "Hs",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"6".sup()+"7s"+"2".sup(),
        block: "d",
    },
    Mt: {
        atomnum: "109",
        elenam: "Meitnerium",
        elesym: "Mt",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"7".sup()+"7s"+"2".sup(),
        block: "d",
    },
    Ds: {
        atomnum: "110",
        elenam: "Darmstadtium",
        elesym: "Ds",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"8".sup()+"7s"+"2".sup(),
        block: "d",
    },
    Rg: {
        atomnum: "111",
        elenam: "Roentgenium",
        elesym: "Rg",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"9".sup()+"7s"+"2".sup(),
        block: "d",
    },
    Cn: {
        atomnum: "112",
        elenam: "Copernicium",
        elesym: "Cn",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"10".sup()+"7s"+"2".sup(),
        block: "d",
    },
    Nh: {
        atomnum: "113",
        elenam: "Nihonium",
        elesym: "Nh",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"10".sup()+"7s"+"2".sup()+"7p"+"1".sup(),
        block: "d",
    },
    Fl: {
        atomnum: "114",
        elenam: "Flerovium",
        elesym: "Nh",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"10".sup()+"7s"+"2".sup()+"7p"+"2".sup(),
        block: "d",
    },
    Mc: {
        atomnum: "115",
        elenam: "Moscovium",
        elesym: "Mc",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"10".sup()+"7s"+"2".sup()+"7p"+"3".sup(),
        block: "d",
    },
    Lv: {
        atomnum: "116",
        elenam: "Livermorium",
        elesym: "Lv",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"10".sup()+"7s"+"2".sup()+"7p"+"4".sup(),
        block: "d",
    },
    Ts: {
        atomnum: "117",
        elenam: "Tennessine",
        elesym: "Ts",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"10".sup()+"7s"+"2".sup()+"7p"+"5".sup(),
        block: "d",
    },
    Og: {
        atomnum: "118",
        elenam: "Oganesson",
        elesym: "Og",
        elemass: "",
        elenegati: "",
        config: "[Rn]"+"5f"+"14".sup()+"6d"+"10".sup()+"7s"+"2".sup()+"7p"+"6".sup(),
        block: "d",
    },






    // group
    IA: {
        atomnum: "1",
        elenam: "Lithium Family",
        elesym: "IA",
        elemass: "A",
        elenegati: "Alkali Metal",
        config: "",
        block: "Li",
    },
    IIA: {
        atomnum: "2",
        elenam: "Berilyum Family",
        elesym: "IIA",
        elemass: "A",
        elenegati: "Alkaline Earth Metal",
        config: "",
        block: "Be",
    },
    IIIB: {
        atomnum: "3",
        elenam: "Scandium Family",
        elesym: "IIIB",
        elemass: "B",
        elenegati: "",
        config: "",
        block: "Sc",
    },
    IVB: {
        atomnum: "4",
        elenam: "Titanium Family",
        elesym: "IVB",
        elemass: "B",
        elenegati: "",
        config: "",
        block: "Ti",    
    },
    VB: {
        atomnum: "5",
        elenam: "Vanadium Family",
        elesym: "VB",
        elemass: "B",
        elenegati: "",
        config: "",
        block: "V",    
    },
    VIB: {
        atomnum: "6",
        elenam: "Chromium Family",
        elesym: "VIB",
        elemass: "B",
        elenegati: "",
        config: "",
        block: "Cr",    
    },
    VIIB: {
        atomnum: "7",
        elenam: "Manganese Family",
        elesym: "VIIB",
        elemass: "B",
        elenegati: "",
        config: "",
        block: "Mn",    
    },
    VIIIB: {
        atomnum: "8",
        elenam: "Iron Family",
        elesym: "VIIIB",
        elemass: "B",
        elenegati: "",
        config: "",
        block: "Fe",    
    },
    IXB: {
        atomnum: "9",
        elenam: "Cobalt Family",
        elesym: "VIIIB",
        elemass: "B",
        elenegati: "",
        config: "",
        block: "Co",    
    },
    XB: {
        atomnum: "10",
        elenam: "Nikel Family",
        elesym: "VIIIB",
        elemass: "B",
        elenegati: "",
        config: "",
        block: "Ni",    
    },
    IB: {
        atomnum: "11",
        elenam: "Copper Family",
        elesym: "IB",
        elemass: "B",
        elenegati: "Coinage Metal",
        config: "",
        block: "Cu",    
    },
    IIB: {
        atomnum: "12",
        elenam: "Zinc Family",
        elesym: "IIB",
        elemass: "B",
        elenegati: "",
        config: "",
        block: "Zn",    
    },
    IIIA: {
        atomnum: "13",
        elenam: "Boron Family",
        elesym: "IIIA",
        elemass: "A",
        elenegati: "Icosagen",
        config: "Triels",
        block: "B",
    },
    IVA: {
        atomnum: "14",
        elenam: "Cacbon Family",
        elesym: "IVA",
        elemass: "A",
        elenegati: "Crystallogen",
        config: "Tetrels",
        block: "C",
    },
    VA: {
        atomnum: "15",
        elenam: "Nitrogen Family",
        elesym: "VA",
        elemass: "A",
        elenegati: "Pnictogen",
        config: "Pentels",
        block: "N",
    },
    VIA: {
        atomnum: "16",
        elenam: "Oxygen Family",
        elesym: "VIA",
        elemass: "A",
        elenegati: "Chalcogen",
        config: "",
        block: "O",
    },
    VIIA: {
        atomnum: "17",
        elenam: "Fluorine Family",
        elesym: "VIIA",
        elemass: "A",
        elenegati: "Halogen",
        config: "",
        block: "F",
    },
    VIIIA: {
        atomnum: "18",
        elenam: "Neon Family",
        elesym: "VIIIA",
        elemass: "A",
        elenegati: "Noble Gas",
        config: "",
        block: "He",
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

    elesym.style.fontSize = "55px";
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
    } else if(varelement[elmnt].block == `Li`){
        eleconte.style.backgroundColor = `grey`;
        eleconte.style.color = ``;
    } else if(varelement[elmnt].block == `Be`){
        eleconte.style.backgroundColor = `burlywood`;
        eleconte.style.color = `black`;
    } else if(varelement[elmnt].block == `Sc`){

    } else if(varelement[elmnt].block == `Ti`){
        
    } else if(varelement[elmnt].block == `V`){
        
    } else if(varelement[elmnt].block == `Cr`){
        
    } else if(varelement[elmnt].block == `Mn`){
        
    } else if(varelement[elmnt].block == `Fe`){
        
    } else if(varelement[elmnt].block == `Cu`){
        
    } else if(varelement[elmnt].block == `Zn`){
        
    } else if(varelement[elmnt].block == `B`){
        
    } else if(varelement[elmnt].block == `C`){
        
    } else if(varelement[elmnt].block == `N`){
        
    } else if(varelement[elmnt].block == `O`){
        
    } else if(varelement[elmnt].block == `F`){
        
    } else if(varelement[elmnt].block == `Ne`){
        
    } 
}

title.addEventListener("click", function(){
    elesym.style.fontSize = "20px";
    eleconte.style.backgroundColor = `seashell`;
    eleconte.style.color = `black`;
    atomnum.textContent = "Atomic Number" ;
    elesym.textContent = "Element Symbol";
    elenam.textContent = "Element Name";
    elemass.textContent = "Atomic Mass";
    elenegati.textContent = "Electronegativity";
    config.innerHTML = "Electron Configuration";
})



