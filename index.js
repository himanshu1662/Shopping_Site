let darkmode = document.querySelector('#darkmode');
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');

    }else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
                document.body.classList.remove('color');
    }
}

const exit= document.querySelector(".exit");
const back = document.querySelector(".clear");
const popup = document.querySelector(".wait");

exit.addEventListener("click" , function show(){
    popup.style.display='block';
})

back.addEventListener("click" , function hide(){
    popup.style.display='none';
})


