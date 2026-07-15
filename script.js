//your code here
// Clear body to ensure a clean state
document.body.innerHTML = '';

// --- Part 1: Semantic Navbar ---
const nav = document.createElement('nav');
const ul = document.createElement('ul');

// Create 3 links
const links = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' }
];

links.forEach(linkData => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = linkData.href;
    a.innerText = linkData.text;
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);
document.body.appendChild(nav);

// --- Part 2: Audio Section ---
const section = document.createElement('section');

// Heading
const h2 = document.createElement('h2');
h2.innerText = '3 random audios';
section.appendChild(h2);

// Audio URLs
const audioUrls = [
    'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
    'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
    'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
];

// Create 3 audio tracks
audioUrls.forEach(url => {
    const audio = document.createElement('audio');
    audio.controls = true; // Add controls attribute
    
    const source = document.createElement('source');
    source.src = url;
    
    // Set type based on extension
    if (url.endsWith('.ogg')) {
        source.type = 'audio/ogg';
    } else {
        source.type = 'audio/mpeg';
    }

    audio.appendChild(source);
    section.appendChild(audio);
    
    // Add line break for spacing (optional but good for layout)
    section.appendChild(document.createElement('br'));
});

document.body.appendChild(section);   