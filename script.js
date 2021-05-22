$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 140){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Social Media Manager", "Content Creator", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Social Media Manager", "Content Creator", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
});

// FORM JS 

// var form = document.getElementById("my-form");
    
// async function handleSubmit(event) {
//   event.preventDefault();
//   var status = document.getElementById("status");
//   var data = new FormData(event.target);
//   fetch(event.target.action, {
//     method: form.method,
//     body: data,
//     headers: {
//         'Accept': 'application/json'
//     }
//   }).then(response => {
//     status.innerHTML = "Thanks for your submission!";
//     form.reset()
//   }).catch(error => {
//     status.innerHTML = "Oops! There was a problem submitting your form"
//   });
// }
// form.addEventListener("submit", handleSubmit)

window.addEventListener("DOMContentLoaded" , function() {
       

    var form = document.getElementById("my-form");
    var status = document.getElementById("status");

    function success(){
        form.reset();
        status.classList.add("success");
        status.innerHTML  = "Thanks for sending the message, Vishal will contact you ASAP !";

    }

    function error(){
        status.classList.add("error");
        status.innerHTML = " Oops ! There was a problem. Send the message again."

    }

    form.addEventListener("submit" , function (ev){
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method , form.action ,data , success , error);
    });

});

function ajax(method,url,data,success,error ){
    var xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader("Accept" , "application/json");
    xhr.onreadystatechange = function (){
        if(xhr.readyState !== XMLHttpRequest.DONE)
        return;
        if(xhr.status ===200){
            success(xhr.response , xhr.responseType);
        } else {
            error(xhr.status , xhr.response , xhr.responseType);
        }

    } ;

    xhr.send(data);
}








