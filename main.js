let happy = document.getElementById('happy');
let ok = document.getElementById('ok');
let blah = document.getElementById('blah');
let med = document.getElementById('meds');
let quote = document.getElementById('quote');
let words = document.getElementById('words');
let arryOk = ['There is no such thing as failure, only non-persistence', 'Improvise, Adapt, and Overcome', 'Life is only a test of the mind', 'Prosperity is the best revenge', 'You get what you put your attention on', 'Remember, winning is also the end of the game', 'You are judged by the number of your friends not your gold', 'No one can be a better you than you!'];

let arryHappy = ['You did it! Great job!', 'There is no greater satifaction than a job well done!', 'You are the champion!', "Who said you ain't no good?", "I'm sorry, I can't hear you over the roar of my awesomeness", 'In yo face!', 'Was there really any doubt?', 'I came. I saw, I CONQUERED!'];

let arryBlah = ['You will live to fight another day', 'Fall down 7 times, get up 8.', 'Without adversity there are no stories worth telling','Every hero has spent some time facedown in the dirt', 'The best of us have often started as the worst of us', 'Your own worst critic is often you.', 'We must be as responsible for our virtues as we are of our failings', 'Without darkness there is no light', 'There is always someone who loves you, you just may not have met them yet.'];

let arryMeds = ['Go watch a funny movie, you need that right now', 'To hell with the calories, ice cream cures everything', 'Sometimes a good meal changes everything.', 'Get some sleep. You are probably exhausted.', " Don't make decisions for the future based your feelings in the present", " You matter. You are here. If you didn't, you wouldn't be.", 'Sometimes being knocked down is an opportunity to come back stronger.', "Someone loves you, even when you think they shouldn't", "You don't have to kick yourself too hard, there are plenty of people who will do that for you.", "In a hundred years no one will even remember any of this."];


ok.onclick = function () {
    let ranum = Math.floor(Math.random() * 7);

        words.innerHTML = arryOk[ranum];

};

happy.onclick = function () {
    let ranum = Math.floor(Math.random() * 8);

        words.innerHTML = arryHappy[ranum];
};

console.log(arryHappy.length);

blah.onclick =  function () {
    let ranum = Math.floor(Math.random() * 10);

        words.innerHTML = arryBlah[ranum];
};


meds.onclick =  function () {
    let ranum = Math.floor(Math.random() * 10);

        words.innerHTML = arryMeds[ranum];
};


