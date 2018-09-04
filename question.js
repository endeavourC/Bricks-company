class Question {
    constructor(name, correctAnswer, answers, category) {
        this.name = name;
        this.correctAnswer = correctAnswer;
        this.answers = answers;
        this.category = category;
    }
    send() {
        questions.push(this)
    }

};
let questions = [];
let queOne = new Question('Jak nazywał się król Persji, z którym walczył leonidas?', 'Kserkses', ["Gorgo", "Kleomenes", "Efiatles"], "history");
queOne.send();
let queTwo = new Question('Podstawowym i najważniejszym posiłkiem jest:', 'Śniadanie', ["Obiad", "Kolacja", "Podwieczorek"], "food");
queTwo.send();
let queThree = new Question('Steve Jobs był współzałożycielem firmy:', "Apple", ["Microsoft", "Samsung", "Facebook"], "it");
queThree.send();
let queFour = new Question('Jakiego pochodzenia był Winston Churchill', "brytyjskiego", ["szkockiego", "amerykańskiego", "włoskiego"], 'people');
queFour.send();
let queFive = new Question('Ile mamy tygodni w roku?', "52", ["51", "50", "53"], 'nature');
queFive.send();
let queSix = new Question('W którym roku zmarł popularny DJ Avicii?', "2018", ["2017", "2016", "2015"], 'people');
queSix.send();
let queSeven = new Question("Maskonur zwyczajny to:", "ptak", ['wąż', 'pająk', 'skorpion'], 'nature');
queSeven.send();
let queEight = new Question("Scorpions to zespół hardrockowy pochodzący z:", 'Niemiec', ['Wielkiej Brytanii', 'Włoch', 'Francji'], 'people');
queEight.send();
let queNine = new Question("Zastał polskę drewnianą a zostawił murowaną to przysłowie dotyczące króla:", 'Kazimierza Wielkiego', ['Bolesława Chrobrego', 'Mieszka II', 'Bolesława Krzywosutego'], 'history');
queNine.send();
let queTen = new Question("Mike Tyson został niesłusznie skazany za:", 'Gwałt', ['Zabójstwo', 'Narkotyki', 'Ustawienie walki'], 'people');
queTen.send();
let queEleven = new Question("Pierwszym Polskim prezydentem był: ", "Gabriel Narutowicz", ['Stanisław Wojciechowski', 'Ignacy Mościcki', 'Lech Wałęsa'], 'people');
queEleven.send();
let queTwelve = new Question("W którym roku powstała pizza jaką dziś znamy?", '1889', ['1890', '1980', '1953'], 'food');
queTwelve.send();
let queThreeten = new Question('Językiem programowania nie jest: ', 'DC++', ['Java', 'JavaScript', 'C++'], 'it');
queThreeten.send();
let queFourten = new Question('Robert Gryn to CEO firmy: ', 'Codewise', ['CodeTwo', 'Microsoft', 'Amazon'], 'it');
queFourten.send();
let queFiveten = new Question('Popularny raper o pseudonimie "OSTR" jest autorem utworu', 'Spowiedź', ['Cardio', 'Nigdy ponad stan', 'Nie byłem nigdy'], 'people');
queFiveten.send();