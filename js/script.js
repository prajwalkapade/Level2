// humburger toogle icon mode
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
};


let navLinks = document.querySelectorAll("header nav a");
let sections = document.querySelectorAll("section");


// Add an event listener to each section
window.onscroll = ()=>{
         sections.forEach(sec=> {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;  
            let height  =   sec.offsetHeight;
            let id = sec.getAttribute('id');
            if(top>=offset && top < offset + height){
                navLinks.forEach(links =>  {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*='+id+']').classList.add('active');
                })
            }
             // on scroll remove
            menuIcon.classList.remove('fa-xmark')
            navbar.classList.remove('active')
      });

    //   to make navbr sticky
    var header = document.querySelectorAll('header');
    header.classList.toggle('sticky',window.scrollY)

}


// send message

