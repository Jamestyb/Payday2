
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        700:{
            items: 2
        },
        1000:{
            items:3
        }
    }
})



const btn = document.querySelectorAll('[data-tab-button]');
for (let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', (btns)=>{
        const buttonChar = btns.target.dataset.tabButton;
        const charBtnShow = document.querySelector(`[data-tab-id=${buttonChar}]`)
        rmvTab();
        charBtnShow.classList.add('active');
        rmvTabBtn();
        btns.target.classList.add('btnActive');
    })
}

function rmvTab(){
    const tabs = document.querySelectorAll('[data-tab-id]')
    for(let i = 0; i<tabs.length; i++){
        tabs[i].classList.remove('active')
    }
}

function rmvTabBtn(){
    const btn = document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i<btn.length; i++){
        btn[i].classList.remove('btnActive')
    }
}