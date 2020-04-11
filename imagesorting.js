const categories = document.querySelectorAll('.categories li')
const grid = document.querySelector('.pictures-grid')
const initial = document.querySelector('.selected')

let selectedcategories = initial.innerText.toLowerCase() ;

const pictures = [
    {
        url:
            'light1.1.webp',
        category :'light'
    },
    {
        url:
            'light1.2.webp',
        category : 'light'
    },
    {
        url:
            'light1.3.webp',
        category : 'light'
    },
    {
        url:
            'medlig1.1.webp',
        category : 'med light'
    },
    {
        url:
            'medlig1.2.webp',
        category : 'med light'
    },
    {
        url:
            'medlig1.3.webp',
        category : 'med light'
    },
    {
        url:
            'med1.1.webp',
        category : 'med'
    },
    {
        url:
            'med1.2.webp',
        category : 'med'
    },
    {
        url:
            'med1.3.webp',
        category : 'med'
    },
    {
        url:
            'medda1.1.webp',
        category : 'med dark'
    },
    {
        url:
            'medda1.2.webp',
        category : 'med dark'
    },
    {
        url:
            'medda1.3.webp',
        category : 'med dark'
    },
    {
        url:
            'dar1.1.webp',
        category : 'dark'
    },
    {
        url:
            'dar1.2.webp',
        category : 'dark'
    },
    {
        url:
            'dar1.3.webp',
        category : 'dark'
    }
];

const render = category =>{
    pictures.forEach(picture=> {
        if(picture.category === category){
            const img = document.createElement('img')
            img.src = picture.url;
            grid.appendChild(img);
        }
    });
};
render(selectedcategories);
categories.forEach(category => {
    category.addEventListener('click', () =>{
        selectedcategories = category.innerText.toLowerCase();
        category.classList.add('selected');
        grid.innerHTML = '';
        render(selectedcategories);

        categories.forEach(categ =>{
            if (categ.innerText.toLowerCase() !== selectedcategories) {
                categ.classList.remove('selected');
            }
        })
    })
})