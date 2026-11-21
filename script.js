
let reasons = [
    "Your smile makes ordinary moments feel special. 💗",
    "You bring a little happiness into my world.",
    "Your way of talking is one of my favourite things.",
    "You make even simple conversations memorable.",
    "You deserve kindness every single day.",
    "You have your own beautiful way of being you.",
    "You make little moments feel meaningful.",
    "Your laughter is something worth remembering.",
    "You are more special than you realise.",
    "I appreciate the little things you do.",
    "You make my days a little brighter.",
    "You have a lovely way of expressing yourself.",
    "You deserve all the happiness in the world.",
    "You are someone worth appreciating.",
    "Your presence makes conversations better.",
    "You have a beautiful heart.",
    "You make ordinary days feel less ordinary.",
    "You are full of little things that make you unique.",
    "You deserve to feel loved and valued.",
    "I love the little details that make you you.",
    "Your happiness matters.",
    "You are a wonderful part of my story.",
    "You make memories worth keeping.",
    "You have a special place in my thoughts.",
    "You deserve gentle days and peaceful nights.",
    "You are lovely in your own unique way.",
    "You make me appreciate little moments.",
    "Your kindness means more than you know.",
    "You are someone I am grateful to know.",
    "You make this world a little sweeter.",
    "Your voice makes conversations memorable.",
    "You deserve beautiful things.",
    "You have a charm that is uniquely yours.",
    "You make smiles come naturally.",
    "You are worth every kind word.",
    "You make little memories feel big.",
    "You deserve patience, care and kindness.",
    "You are a lovely person to know.",
    "You make my thoughts a little happier.",
    "You are more than just a pretty smile.",
    "You have a wonderful personality.",
    "You deserve to be celebrated.",
    "You make even boring moments interesting.",
    "You are someone I never want to stop appreciating.",
    "You bring warmth into my days.",
    "You have so many reasons to be proud of yourself.",
    "You deserve the best things life can offer.",
    "You are an important part of my world.",
    "You make memories that stay.",
    "You are simply one of a kind.",
    "You deserve endless little joys.",
    "You make conversations feel comforting.",
    "You have a way of making things better.",
    "You are worth celebrating every day.",
    "You are beautiful inside and out.",
    "You deserve to be heard.",
    "You have a lovely imagination.",
    "You make little things worth noticing.",
    "You deserve a thousand happy moments.",
    "You are a wonderful person.",
    "You make my day with little surprises.",
    "You deserve love without conditions.",
    "You are always worth the effort.",
    "You have a unique way of looking at things.",
    "You make memories sweeter.",
    "You deserve to smile more.",
    "You are someone I admire.",
    "You make every little chat count.",
    "You have a personality I appreciate.",
    "You deserve comfort when things get difficult.",
    "You are worth listening to.",
    "You make life a little more colourful.",
    "You deserve people who care about you.",
    "You are an amazing person in your own way.",
    "You have little habits that make you unique.",
    "You deserve happy surprises.",
    "You are a person worth knowing.",
    "You make me believe in little joys.",
    "You deserve to be appreciated for who you are.",
    "You are full of wonderful qualities.",
    "You make my heart feel grateful.",
    "You deserve peaceful moments.",
    "You are someone whose happiness I wish for.",
    "You make small memories beautiful.",
    "You deserve encouragement and support.",
    "You are special without even trying.",
    "You make things worth looking forward to.",
    "You deserve the kindest words.",
    "You have a beautiful individuality.",
    "You make every little moment count.",
    "You deserve a world full of smiles.",
    "You are someone I appreciate deeply.",
    "You make this little gift worth creating.",
    "You deserve to know how special you are.",
    "You are precious just as you are.",
    "I hope this note made you smile.",
    "And this is just one of 100 reasons.",
    "Because you are you, and that is special. 💗"
];

let reasonBtn = document.getElementById("reasonBtn");
let jar = document.getElementById("jar");
let note = document.getElementById("note");
let reasonText = document.getElementById("reasonText");
let counter = document.getElementById("counter");
let hearts = document.getElementById("hearts");

let count = 0;
let usedReasons = [];

function showReason() {

    if (usedReasons.length == reasons.length) {
        reasonText.innerText = "You discovered all 100 reasons! But there are still countless reasons left. 💗";
        note.classList.add("show");
        reasonBtn.innerText = "All 100 discovered ✨";
        counter.innerText = "100 / 100 reasons discovered";
        return;
    }

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * reasons.length);
    } while (usedReasons.includes(randomIndex));

    usedReasons.push(randomIndex);

    reasonText.innerText = reasons[randomIndex];

    note.classList.add("show");

    count++;

    counter.innerText = count + " / 100 reasons discovered";

    if (count == 100) {
        reasonBtn.innerText = "All 100 discovered ✨";
    }
}

reasonBtn.addEventListener("click", showReason);
jar.addEventListener("click", showReason);

// Floating hearts

function createHeart() {

    let heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerText = "♥";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    hearts.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 700);
