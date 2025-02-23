var navmenu= document.querySelector(".nav-menu")
var togglemenu= document.querySelector(".menu-toggle")
var closeMenu=document.querySelector(".close")
var cancellogin=document.getElementById("Cancel")
var loginContainer=document.querySelector(".logincontainer")
var loginPage=document.querySelector(".login-page")
var loginList=document.querySelector(".Login-list")
var Feedback=document.getElementById("feedback")
var FeddbackPage=document.querySelector(".container-page")
var infoContainer=document.querySelector(".info-container")
var viewMore=document.querySelector(".button-viewmore")
var infoBack=document.querySelector(".info-button")
var alertPage=document.querySelector(".alert-page")
var faq1=document.querySelector(".faq")
var faqCon=document.querySelector(".faq-container")
var faqBack=document.querySelector(".faq-back")

/*const modal = document.getElementById('contactModal');
const btn = document.getElementById('contactBtn');
const span = document.getElementsByClassName('close')[0];
*/

togglemenu.addEventListener('click',function(){
            if(navmenu.style.display=="block"){
                navmenu.style.display="none"
            
            }else{
                navmenu.style.display="block"
            }
           })

loginList.addEventListener('click',function(){
    loginContainer.style.display="block"
    loginPage.style.display="block"
    navmenu.style.display="none"
})           
cancellogin.addEventListener('click',function(){
    loginContainer.style.display="none"
    loginPage.style.display="none"
})

document.querySelector(".Submit-login").addEventListener('click',function(){
    loginContainer.style.display="none"
    loginPage.style.display="none"
    alert("login details is submitted! Thank you for your input.");

})
/*document.addEventListener("DOMContentLoaded", function () {
    let loginContainer = document.querySelector(".logincontainer");

    window.addEventListener("scroll", function () {
        let loginTop = loginContainer.offsetTop;
        let scrollPos = window.scrollY || document.documentElement.scrollTop;

        if (scrollPos > loginTop) {
            window.scrollTo({ top: loginTop, behavior: "smooth" }); // Scroll back to login
        }
    });

    // Close the login box when clicking "X"
    document.getElementById("Cancel").addEventListener("click", function () {
        document.querySelector(".logincontainer").style.display = "none";
    });
     })
*/
function showInfo() {
    document.getElementById('waste-page').style.display = 'block';
}

/*function redirectToInfoPage() {
    window.location.href = 'info.html';
}*/
/*infoBack.addEventListener('click',function(){
    infoContainer.style.display="none"
})*/





/*btn.onclick = function() {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}*/

document.querySelector(".contact-info").addEventListener('click',function(){
    document.querySelector(".modal").style.display="block"

})
document.querySelector(".submit-contact").addEventListener("click",function(){
    alert("Contact info submitted! Thank you for your input.");
    document.querySelector(".modal").style.display="none"
    
})

function closeFAQ1() {
    document.querySelector(".alert-page").style.display="none"
    document.querySelector(".alert-section").style.display="none"

}

document.querySelector(".info-header").addEventListener('click',function(){

    document.querySelector(".alert-page").style.display="block"
    document.querySelector(".alert-section").style.display="block"
    document.querySelector(".youtube-box ").style.display="block"
    document.querySelector(".description-box").style.display="block"
})
/*document.querySelector(".close-btn2").addEventListener('click',function(){
    document.querySelector(".alert-page").style.display="none"
    document.querySelector(".alert-section").style.display="none"
    document.querySelector(".youtube-box ").style.display="none"
    document.querySelector(".description-box").style.display="none"
})*/


document.querySelector(".close").addEventListener('click',function(){
    document.querySelector(".modal").style.display="none"
})

function scrollToClassification() {
    document.getElementById("Classification1").scrollIntoView({
        behavior: "smooth"
    });
}
document.querySelector(".info-header").addEventListener('click',function(){
    document.getElementById("Classification2").scrollIntoView({
        behavior: "smooth"
    });
})

function toggleFeedback() {
    var section = document.getElementById("feedbackSection");
    section.style.display = (section.style.display === "block") ? "none" : "block";
}

function submitFeedback() {
    alert("Feedback submitted! Thank you for your input.");
    toggleFeedback();
}



/*function closeFAQ1() {
    document.querySelector(".alert-page").style.display="none"
    document.querySelector(".alert-section").style.display="none"

}*/






