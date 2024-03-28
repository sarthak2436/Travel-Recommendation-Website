let carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= places.length) {
        slideIndex = 0;
    }

   
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    let button = document.createElement('button');

   
    imgElement.appendChild(document.createTextNode('')); 
    h1.appendChild(document.createTextNode(places[slideIndex].name));
    p.appendChild(document.createTextNode(places[slideIndex].des));
    button.appendChild(document.createTextNode('Learn More'));
    content.appendChild(h1);
    content.appendChild(p);
    content.appendChild(button);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    
    imgElement.src = places[slideIndex].image;
    slideIndex++;

   
    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'places-title';
    p.className = 'places-desc';
    button.className = 'learn-more-btn';
    
    button.addEventListener('click', function () {
        window.location.href = places[slideIndex - 1].link || '1.html';
        window.location.href = places[slideIndex - 2].link || '2.html';
        window.location.href = places[slideIndex - 3].link || '3.html';
        window.location.href = places[slideIndex - 4].link || '4.html';
        window.location.href = places[slideIndex - 5].link || '5.html';
    });

    /*button.addEventListener('click', function() {
        // Change 'your_page.html' to the actual HTML file you want to link to
        window.location.href = 'new.html';
    });*/

    sliders.push(slide);

    //sliding effect
    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`; // Fix the typo here
    }
};

//'places' array with your data
const places = [
    { name: 'Discover the most engaging places', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!', image: 'images/slider 11.jpg' },
    { name: 'Amazing cities near you', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!', image: 'images/slider 12.jpg' },
    { name: 'Explore the unseen world', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!', image: 'images/slider 13.jpg' },
    { name: 'Find Next Place To Visit', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!', image: 'images/slider 14.jpg' },
    { name: 'Discover Your Amazing City', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!', image: 'images/slider 15.jpg' },

];

for (let i = 0; i < 6; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

//video play on cards

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

//card slider

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})

function openPage() {
    window.location.href = "nextpage.html";
}

function openPage2() {
    window.location.href = "currency_converter.html";
}






