
const muskiProizvodi =
    [
        {
            imgSrc: 'pictures/muskarci/attack%20on%20titan%20majica.jpeg',
            title: 'Attack on Titan majica',
            price: 2500,
            href: 'pictures/muskarci/attack on titan majica.jpeg'
        },
        {
            imgSrc: 'pictures/muskarci/dragon%20majica.jpeg',
            title: 'Majica sa motivom zmaja',
            price: 1900,
            href: 'pictures/muskarci/dragon majica.jpeg'
        },
        {
            imgSrc: 'pictures/muskarci/majica.jpeg',
            title: 'Majica',
            price: 1500,
            href: 'pictures/muskarci/majica.jpeg'
        },
        {
            imgSrc: 'pictures/muskarci/roze%20majica.jpeg',
            title: 'Roze majica',
            price: 1500,
            href: 'pictures/muskarci/roze%20majica.jpeg'
        },
        {
            imgSrc: 'pictures/muskarci/dukserica.jpg',
            title: 'Dukserica',
            price: 2700,
            href: 'pictures/muskarci/dukserica.jpg'
        },
        {
            imgSrc: 'pictures/muskarci/karirana%20kosulja.webp',
            title: 'Karirana košulja',
            price: 3500,
            href: 'pictures/muskarci/karirana kosulja.webp'
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
    document.getElementById('muskarci').innerHTML = html;
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
    prikaziProizvode(muskiProizvodi);
});



