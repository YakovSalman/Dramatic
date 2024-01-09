const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 42,
});

// menu

const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar-mob-nav')
const body = document.querySelector('.main__body')

menu.addEventListener('click', () => {
  navbar.classList.toggle('active');
  body.classList.toggle('hidden');
  
  if(navbar.classList.contains('active')) {
    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('menu') &&
          !e.target.closest('.navbar-mob-nav'))
        {
        navbar.classList.remove('active')
        body.classList.remove('hidden');
      }  
    });
  };
});




// select

const select = (trigger, list, arrow) => {
  trigger = document.querySelector(trigger),
  list = document.querySelector(list),
  arrow = document.querySelector(arrow);


  if(trigger) {
    const listItem = Array.from(list.children);

    trigger.addEventListener('click', () => {
      listItem.forEach(item => {
        item.style.display='block';
        if (trigger.value == item.textContent) {
          item.style.display='none';
        };
      });
      
      trigger.classList.toggle('active');
      list.classList.toggle('active');
      arrow.classList.toggle('active');
    });
  
    listItem.forEach(item => {
      
      item.addEventListener('click', (e) => {
        trigger.value = e.target.textContent;
  
        trigger.classList.toggle('active');
        list.classList.toggle('active');
        arrow.classList.toggle('active');
      });
    });
  }
  
};

select('.select-input', '.select-list', '.select-arrow');
select('.select-input-lang', '.select-lang-list', '.select-lang-icon-arrow');



const scroll = () => {
  const dd = document.querySelector('.intro__btn-watch ')
  dd.addEventListener('click', () => {
    const footer = document.querySelector('.footer')
    const similarwrap = document.querySelector('.similar__wrap')
    
    const scroll = window.scrollY;

    const elementPosition = footer.getBoundingClientRect().top;
  });
  
}
scroll()


const link = 'http://www.omdbapi.com/?i=tt3896198&apikey=c53c0720';

const fetchData = async (url) => {
  const response = await fetch(url)
  
  return await response.json() 
}

 fetchData('http://www.omdbapi.com/?i=tt3896198&apikey=c53c0720').then((data) => console.log(data))
















