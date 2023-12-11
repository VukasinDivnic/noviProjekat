const zenskiProizvodi = [
    {
        imgSrc: 'pictures/zene/crna%20kosulja.jpeg',
        title: 'Crna košulja',
        price: 2100,
        href: 'pictures/zene/crna kosulja.jpeg'
    },
    {
        imgSrc: 'pictures/zene/crni%20dzemper.jpeg',
        title: 'Crni džemper',
        price: 2650,
        href: 'pictures/zene/crni dzemper.jpeg'
    },
    {
        imgSrc: 'pictures/zene/koyna%20jakna.jpeg',
        title: 'Kožna jakna',
        price: 3780,
        href: 'pictures/zene/koyna jakna.jpeg'
    },
    {
        imgSrc: 'pictures/zene/prugasta%20bluza.jpeg',
        title: 'Prugasta bluza',
        price: 1900,
        href: 'pictures/zene/prugasta bluza.jpeg'
    },
    {
        imgSrc: 'pictures/zene/majica.jpeg',
        title: 'Majica',
        price: 1200,
        href: 'pictures/zene/majica.jpeg'
    },
    {
        imgSrc: 'pictures/zene/kratki%20rukav%20kosulja.jpeg',
        title: 'Košulja kratki rukav',
        price: 2390,
        href: 'pictures/zene/kratki rukav kosulja.jpeg'
    }
];


function prikaziProizvode(proizvodi) {
    let html = "";
    for (let item of proizvodi) {
        html += `<div class="muskaOdeca">
            <split href=${item.href}>
                <img src=${item.imgSrc} alt=${item.title} />
            </split>
            <h1>${item.title}</h1>
            <p>${formatirajCenu(item.price)} din</p>
        </div>`
    }
    document.getElementById('zene').innerHTML = html;
}

function formatirajCenu(num) {
    if (typeof num === "number") {
        num = num.toString();
    }
    if (num.length > 3) {
        num = num.substring(0, 1) + "." + num.substring(1);
    }
    return num;
}

window.addEventListener('load', function () {
    prikaziProizvode(zenskiProizvodi);
});



