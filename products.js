var container = document.querySelector('.box-container');

function doList(list) {
    var li = `<li>${list[0]}</li>`;
    for (i = 1; i < list.length; i++) {
        li += `<li>${list[i]}</li>`;
    }
    return li;
}
class zestaw {
    constructor(title, img, alt, whatIncludes, list, paragraph) {
        this.title = title;
        this.img = img;
        this.alt = alt;
        this.whatIncludes = whatIncludes;
        this.list = list;
        this.paragraph = paragraph;

    }
    send() {
        var box = document.createElement('div');
        box.innerHTML = `<h3 class="box-title">${this.title}</h3>
<img src="${this.img}" alt="${this.alt}"> <p class="box-what-includes">${this.whatIncludes}</p>
<ul>${this.list}</ul><p>${this.paragraph}</p><p class="box-price">Cena na zapytanie</p>`;
        box.classList.add('box-of-product');
        container.append(box)

    };
}



var BXplusLi = ['230 V siłownik z wbudowaną płytą sterującą ZBX74 1x ',
    'Karta częstotliwości 1x ',
    'Pilot 1x ',
    'Fotokomórki 1x',
]
var BVXsaveLi = [
    'Siłownik 1x', 'Fotokomórka 1x', ' Karta częstotliwości 1x', 'Pilot 1x'
]
var AXIsafeLi = [
    'Siłowniki 2x', 'Centrala 1x', 'Fotokomórka 1x', 'Karta częstotliwości 1x', 'Pilot 1x'
]
var KronoLi = [
    '230 V prawostronny siłownik 1x', '230 V lewostronny siłownik 1x', 'Centrala sterująca 1x', 'Karta częstotliwości 1x', 'Pilot 1x', 'Fotokomórka 1x'
];
var AmicoLi = [
    '230V Siłownik 2x', 'Centrala sterująca 1x', 'Karta częstotliwości 1x', 'Pilot 1x', 'Fotokomórka 1x'
];
var FastLi = [
    '230V siłownik z wbudowaną płytą ZF1 1x',
    '230V siłownik 1x',
    'Karta częstotliwości 1x',
    'Pilot 1x',
    'Fotokomórki 1x',
]
var VerLi = [
    '24 V siłownik z enkoderem  1x',
    'Karta częstotliwości 1x',
    'Pilot 1x'
]
var Ver12li = [
    '230 V siłownik 1x',
    'Karta częstotliwości 1x',
    'Pilot 1x'
]
var CK09li = [
    'Słuchawkowy panel mieszkaniowy audio EARY C 1x',
    'Zasilacz 1x',
    'Panel wejściowy audio PLACO C 1x',
    'Pojedynczy przycisk podwójnej wysokości 1x'
];
var CK01li = [
    'Bezsłuchawkowy panel mieszkaniowy audio BIANCA C 1x',
    'Zasilacz 1x',
    'Panel wejściowy audio PLACO C 1x',
    'Pojedynczy przycisk podwójnej wysokości 1x'
]
var CK10li = [
    'Słuchawkowy panel mieszkaniowy video EARY VC 1x',
    'Zasilacz 1x',
    'Panel wejściowy video PLACO V 1x',
    'Pojedynczy przycisk podwójnej wysokości 1x'
];
var CK02li = [
    'Bezsłuchawkowy panel mieszkaniowy video BIANCA V 1x',
    'Zasilacz 1x',
    'Panel wejściowy video PLACO V 1x',
    'Pojedynczy przycisk podwójnej wysokości'
];
var CK16li = [
    'Panel wejściowy PLACO V 1x',
    'Bezsłuchawkowy panel mieszkaniowy 7 1x',
    'Zasilacz 1x',
    'Pojedynczy przycisk podwójnej wysokości 1x',
]
const BXplus = new zestaw("BX PLUS - kompletny zestaw do bram przesuwnych", "zdj/brama%20przesuwna%20400-800kg.png", 'Box of Bx Plus set', 'ZESTAW BX PLUS ZAWIERA:', doList(BXplusLi), 'BX Plus - Kompletny zestaw do zautomatyzowania bram przesuwnych o masie do 400 kg')
const BXstrong = new zestaw("BX STRONG - kompletny zestaw do bram przesuwnych", "zdj/brama%20przesuwna%20400-800kg.png", 'Box of Bx Strong set', 'ZESTAW BX STRONG ZAWIERA:', doList(BXplusLi), 'BX Plus - Kompletny zestaw do zautomatyzowania bram przesuwnych o masie do 800 kg');
const BXVsave = new zestaw("BXV SAFE - kompletny zestaw do bram  przesuwanych o wadze 400 / 600 / 800 / 1000 kg", "zdj/BXVsafe.jpg", "Box of BXV Safe set", "ZESTAW BXV SAVE ZAWIERA:", doList(BVXsaveLi), "BXV  SAFE - Kompletny zestaw do zautomatyzowania bram przesuwnych o wadze do 400/600/800/1000 kg");
const AXIsave = new zestaw("AXI SAFE - kompletny zestaw do zautomatyzowania bram skrzydłowych", "zdj/AXIsafe.png", "Box of AXI Safe set", "ZESTAW AXI 20 SAFE 8K01MP-014 ZAWIERA:", doList(AXIsafeLi), "AXI 20 SAFE - Kompletny zestaw automatyki do bram skrzydłowych o długości skrzydła do 2 m.")
const AXIsave25 = new zestaw("AXI SAFE - kompletny zestaw do zautomatyzowania bram skrzydłowych", "zdj/AXIsafe.png", "Box of AXI Safe set", "ZESTAW AXI 25 SAFE 8K01MP-014 ZAWIERA:", doList(AXIsafeLi), "AXI 20 SAFE - Kompletny zestaw automatyki do bram skrzydłowych o długości skrzydła do 2.5 m.");
const Krono = new zestaw("KRONO - kompletny zestaw do zautomatyzowania bram dwuskrzydłowych", "zdj/krono.jpg", "Box of Krono set", "ZESTAW Krono zawiera: ", doList(KronoLi), "KRONO Standard - Kompletny zestaw do zautomatyzowania bramy dwuskrzydłowej do 3/5m.");
const Amico = new zestaw("AMICO EURO - kompletny zestaw do zautomatyzowania bram dwuskrzydłowych o długości 1 skrzydła 2,2 m.", "zdj/AMICO.png", "Box of Amico Set", "AMICO EURO ZAWIERA: ", doList(AmicoLi), 'AMICO Euro - Kompletny zestaw do zautomatyzowania bramy dwuskrzydłowej');
const Axo = new zestaw("AXO STRONG - kompletny zestaw do zautomatyzowania bram dwuskrzydłowych o długości 1 skrzydła 3m.", "zdj/AMICO.png", "Box of AXO STRONG Set", "AXO STRONG ZAWIERA: ", doList(AmicoLi), 'AXO STRONG - Kompletny zestaw do zautomatyzowania bramy dwuskrzydłowej');
const Fast = new zestaw("FAST PLUS - kompletny zestaw do zautomatyzowania bram dwuskrzydłowych o długości 1 skrzydła 2,3 m", "zdj/FAST.png", "Box of FAST PLUS Set", "ZESTAW FAST PLUS ZAWIERA: ", doList(FastLi), "FAST Plus - Kompletny zestaw do zautomatyzowania bramy dwuskrzydłowej.");
const Ver10 = new zestaw("VER 10 - kompletny zestaw do zautomatyzowania uchylnych i segmentowych bram garażowych", "zdj/VER.png", "Box of VER 10 set", "ZESTAW VER 10 ZAWIERA: ", doList(VerLi), "VER 10 - Zestaw do zautomatyzowania bramy garażowej");
const Ver12 = new zestaw("VER 12 - kompletny zestaw do zautomatyzowania uchylnych i segmentowych bram garażowych", "zdj/VER.png", "Box of VER 12 set", "ZESTAW VER 12 ZAWIERA: ", doList(Ver12li), "VER 12 - Zestaw do zautomatyzowania bramy garażowej")
const CK09 = new zestaw("CK0009 - kompletny zestaw domofonu", "zdj/CK09.png", "Box of intercom CK09", "ZESTAW CK0009 ZAWIERA: ", doList(CK09li), "CK0009 - Słuchawkowy zestaw domofonowy");
const CK01 = new zestaw("CK0001 - kompletny zestaw domofonu", "zdj/CK01.png", "Box of intercom CK01", "ZESTAW CK0001 ZAWIERA: ",
    doList(CK01li), "CK0001 - Bezsłuchawkowy zestaw domofonowy");
const CK10 = new zestaw("CK0010 - kompletny zestaw videofonu", "zdj/CK10.png", "Box of videophone CK10", "ZESTAW CK0010 ZAWIERA", doList(CK10li), "CK0010 - Słuchawkowy zestaw videodomofonowy");
const CK02 = new zestaw("CK0002 - kompletny zestaw videofonu", "zdj/CK02.png", "Box of videophone CK02", "ZESTAW CK0002 ZAWIERA: ", doList(CK02li), "CK0002 - Bezsłuchawkowy zestaw videodomofonowy");
const CK16 = new zestaw("CK0016 - kompletny zestaw videofonu", "zdj/CK16.jpg", "Box of videophone CK16", "ZESTAW CK0016 ZAWIERA: ", doList(CK16li), "CK0016 - Bezsłuchawkowy zestaw videodomofonowy")
BXplus.send();
BXstrong.send();
BXVsave.send();
AXIsave.send();
AXIsave25.send();
Krono.send();
Amico.send();
Axo.send();
Fast.send();
Ver10.send();
Ver12.send();
CK09.send();
CK01.send();
CK10.send();
CK02.send();
CK16.send();
