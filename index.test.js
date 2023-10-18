import functions from './index';
// import{orijinalTatlar}from '../index';
let orijinalTatlar;
beforeEach(()=>{
    orijinalTatlar = [
        "Muz",
        "Vişne",
        "Ceviz",
        "Kestane",
        "Kiraz",
        "Çikolata",
        "Fındık Çikolata",
        "Fıstık Çikolata",
        "Badem Çikolata",
        "Franbuaz",
        "Yaban Mersini",
        "Tarçın",
        "Badem",
        "Kahve",
        "Fındık",
        "Anten Fıstık",
        "Limon",
        "Misket Limon",
        "Akçaağaç Şurubu",
        "Şeftali",
        "Nane",
        "Ananas",
        "Ahududu",
        "Çilek",
        "Vanilya",
      ];
})

describe('saFunction', ()=>{
    it('sa -> as ', ()=>{
        expect(functions.sa()).toBe('as');
    })
});

describe('kopyala', ()=>{
    it('kopyala -> dizi döner', ()=>{
        expect(functions.kopyala(orijinalTatlar)).toEqual(orijinalTatlar);
    })
});

describe('dizi25Cesitmi', ()=>{
    it('dizi25Cesitmi -> true döner', ()=>{
        expect(functions.dizi25Cesitmi(orijinalTatlar)).toBe(true);
    })
});

describe('cesitEkle', ()=>{
    it('cesitEkle -> verilen yeni tadı, verilen dizinin başına ekler', ()=>{
        expect(functions.cesitEkle(orijinalTatlar, 'Kakule')).toEqual([
            "Kakule",
            "Muz",
            "Vişne",
            "Ceviz",
            "Kestane",
            "Kiraz",
            "Çikolata",
            "Fındık Çikolata",
            "Fıstık Çikolata",
            "Badem Çikolata",
            "Franbuaz",
            "Yaban Mersini",
            "Tarçın",
            "Badem",
            "Kahve",
            "Fındık",
            "Anten Fıstık",
            "Limon",
            "Misket Limon",
            "Akçaağaç Şurubu",
            "Şeftali",
            "Nane",
            "Ananas",
            "Ahududu",
            "Çilek",
            "Vanilya",
          ]);
    })
});

describe('sonCesitiKaldir', ()=>{
    it('sonCesitiKaldir -> son öğesi kaldırılmış diziyi döner', ()=>{
        expect(functions.sonCesitiKaldir(orijinalTatlar)).toEqual([
            "Muz",
            "Vişne",
            "Ceviz",
            "Kestane",
            "Kiraz",
            "Çikolata",
            "Fındık Çikolata",
            "Fıstık Çikolata",
            "Badem Çikolata",
            "Franbuaz",
            "Yaban Mersini",
            "Tarçın",
            "Badem",
            "Kahve",
            "Fındık",
            "Anten Fıstık",
            "Limon",
            "Misket Limon",
            "Akçaağaç Şurubu",
            "Şeftali",
            "Nane",
            "Ananas",
            "Ahududu",
            "Çilek",
          ]);
    })
});

describe('indekstekiCesitiGetir', ()=>{
    it('indekstekiCesitiGetir -> indekste bulunan çeşiti döndürür', ()=>{
        expect(functions.indekstekiCesitiGetir(orijinalTatlar, 2)).toBe("Ceviz");
    })
});

describe('ismeGoreCesitCikar', ()=>{
    it('ismeGoreCesitCikar -> diziden istenen öğe kaldırılır', ()=>{
        expect(functions.ismeGoreCesitCikar(orijinalTatlar, 'Limon')).toEqual([
            "Muz",
            "Vişne",
            "Ceviz",
            "Kestane",
            "Kiraz",
            "Çikolata",
            "Fındık Çikolata",
            "Fıstık Çikolata",
            "Badem Çikolata",
            "Franbuaz",
            "Yaban Mersini",
            "Tarçın",
            "Badem",
            "Kahve",
            "Fındık",
            "Anten Fıstık",
            "Misket Limon",
            "Akçaağaç Şurubu",
            "Şeftali",
            "Nane",
            "Ananas",
            "Ahududu",
            "Çilek",
            "Vanilya",
          ]);
    })
});

describe('ismeGoreFiltrele', ()=>{
    it('ismeGoreFiltrele -> istenen tatları içeren yeni diziyi döndürür', ()=>{
        expect(functions.ismeGoreFiltrele(orijinalTatlar, 'Çikolata')).toEqual([
            "Çikolata",
            "Fındık Çikolata",
            "Fıstık Çikolata",
            "Badem Çikolata",
          ]);
    })
});

