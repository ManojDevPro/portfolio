function myMenufunction(){

    var menuBth = document.getElementById("myNavMenu");

    if(menuBth.className === "nav-menu"){
        menuBth.className += " responsive";
    }
    else{
        menuBth.className = "nav-menu";
    }
}


/**-------dark mode ---- */

const body = document.querySelector("body");
           toggleSwitch = document.getElementById("toggle-switch");

           toggleSwitch.addEventListener("click", ()=>{
            body.classList.toggle("dark");
 });



 /*-------typing effect-------*/

 var typingEffect = new Typed(".typedtext", {
    strings : ["Developer", "Coder"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay:2000,  
 })


 //*----scroll animation ------*/

 const sr = ScrollReveal ({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
 });

 sr.reveal(".feature-name", { delay: 100 });
 sr.reveal(".text-info", { delay: 200 });
 sr.reveal(".text-btn", { delay: 200 });
 sr.reveal(".social-icons", { delay: 200 });
 sr.reveal(".feature-image", { delay: 320 });

 
 sr.reveal(".card__container",{interval: 200});

 sr.reveal(".top-header", {});

 const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
 })

 sr.reveal(".timeline-items",{delay:320});
 srLeft.reveal(".about-info", {delay: 100});
 srLeft.reveal(".contact-info", {delay: 100});
 srLeft.reveal(".timeline-item", {delay: 100});

 const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
 })

 srRight.reveal(".skill", {delay: 100});
 srRight.reveal(".skill-box", {delay: 100});
 srRight.reveal(".timeline-dot", {delay: 100});


 /*------active lin-----*/

 const sections = document.querySelectorAll(".section[id");

 function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        
        const sectionHeight = current.offsetHeight,

        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        }
        else{
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
    })
 }

 window.addEventListener("scroll", scrollActive);