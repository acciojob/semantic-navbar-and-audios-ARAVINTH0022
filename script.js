//your code here
// Clear body
document.body.innerHTML = '';

// --- Part 1: Navbar ---
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = ['Home', 'About', 'Contact'];

links.forEach(text => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + text.toLowerCase();
    a.innerText = text;
    li.appendChild(a);
    ul.appendChild(li);
});
nav.appendChild(ul);
document.body.appendChild(nav);

// --- Part 2: Audio Section ---
const section = document.createElement('section');
const h2 = document.createElement('h2');
h2.innerText = '3 random audios';
section.appendChild(h2);

// Audio URLs
const audioUrls = [
    'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
    'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
    'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
];

// Create 3 audio tracks (FIXED: src directly on audio tag)
audioUrls.forEach(url => {
    const audio = document.createElement('audio');
    audio.src = url;       // Set src directly on <audio>
    audio.controls = true; // Set controls directly on <audio>
    section.appendChild(audio);
});

document.body.appendChild(section);   