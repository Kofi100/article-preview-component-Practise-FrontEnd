var card = document.getElementById('card');
var hiddenLinks = document.getElementById("hiddenLinks");
var shareBtn = document.getElementById("shareBtn");
var shareBtn__MobileAlt = document.getElementById("shareBtn__MobileAlt");
var shareMediaBtns = document.getElementsByClassName("shareMediaBtn");
var shareMediaBtns_Mobile = document.getElementsByClassName("articlePreview__SocialLinks__Mobile__SocialLinksButtons");
var articlePreview = document.getElementById('articlePreview');
var articlePreview__footer = document.getElementById("articlePreview__footer");
var articlePreview__SocialLinks__Mobile = document.getElementById("articlePreview__SocialLinks__Mobile");

var facebookBtns = document.getElementsByClassName("facebook");
var twitterBtns = document.getElementsByClassName("twitter");
var pinterestBtns = document.getElementsByClassName("pinterest");
const mediaQueryJSEqi = window.matchMedia('(max-width: 760px)'); // Added parentheses and space
// console.log(shareMediaBtns);

var screenMobile = false;

console.log("Hello! JS Loading...");

// Initialize - check if elements exist first
if (hiddenLinks) hiddenLinks.style.display = 'none';
if (articlePreview__SocialLinks__Mobile) articlePreview__SocialLinks__Mobile.style.display = 'none';

// Set initial state
screenMobile = mediaQueryJSEqi.matches; // Stores the boolean value screenMobile

if (mediaQueryJSEqi.matches) {
    console.log("Initial load: Screen below 760px");
    // Initial mobile-specific code here
} else {
    console.log("Initial load: Screen above 760px");
    // Initial desktop-specific code here
}
//checks if screen has changed size or Not.
mediaQueryJSEqi.addEventListener('change', function(e) {
    if (e.matches) {
        console.log("Changed to: Screen below 760px");
        screenMobile = true;
        // Mobile state changes
        hiddenLinks.style.display = 'none'
        shareBtn.style.backgroundColor='var(--LightGrayishBlue)'
    } else {
        console.log("Changed to: Screen above 760px");
        screenMobile = false;
        // Desktop State changes
        articlePreview__SocialLinks__Mobile.style.display = 'none'
        articlePreview__footer.style.display='flex'
    }
});


//handlers
shareBtn.onclick = function () {
    if (!screenMobile) {
        //adjusting elements based on the desktop view
        //by configuring hiddenlinks and the shareButton
      hiddenLinks.style.display = hiddenLinks.style.display === 'none' ? 'flex' : 'none'
    shareBtn.style.backgroundColor = shareBtn.style.backgroundColor === 'var(--VeryDarkGrayishBlue)' ? 'var(--LightGrayishBlue)' : 'var(--VeryDarkGrayishBlue)'   
     // switches b/n colors and states by setting the values of properties to the first declared and toggling/switching when necessary
    }
    else {
        //adjusting elements based on the mobile view
        articlePreview__footer.style.display = 'none'
        articlePreview__SocialLinks__Mobile.style.display = articlePreview__SocialLinks__Mobile.style.display === 'none' ? 'flex' : 'none'
        articlePreview.style.paddingBottom = '.5rem';
        card.style.borderRadius='.5rem .5rem 0 0'
    }
    console.log("clicked");
    
};


shareBtn__MobileAlt.onclick = function () {
    if (screenMobile) {
        articlePreview__footer.style.display = 'flex'
        articlePreview__SocialLinks__Mobile.style.display = articlePreview__SocialLinks__Mobile.style.display === 'none' ? 'flex' : 'none'
        card.style.borderRadius='.5rem'
    }
}

// code to hide shareMedia Parent element when one of the Social Media Link Buttons is pressed
//works by looping thru all buttons in shareMediaBtns and shareMediaBtns_Mobile  to check inputs.
//button here is an integer for both cases ,but I'm using it to represent the index of every button available

for (let button = 0; button < shareMediaBtns.length; button++){
    shareMediaBtns[button].onclick = function () {
    hiddenLinks.style.display = hiddenLinks.style.display === 'none' ? 'flex' : 'none'
    shareBtn.style.backgroundColor = shareBtn.style.backgroundColor === 'var(--VeryDarkGrayishBlue)' ? 'var(--LightGrayishBlue)' : 'var(--VeryDarkGrayishBlue)'
       
     //checks if a Social Media Link button has a class and copies link based on it.
    if (shareMediaBtns[button].classList.contains("facebook")) {
        copyLink("facebook.com")
        }
    if (shareMediaBtns[button].classList.contains("twitter")) {
            copyLink("twitter.com")
        }
    if (shareMediaBtns[button].classList.contains("pinterest")) {
             copyLink("pinterest.com")
        }
    
    }
}

for (let button = 0; button < shareMediaBtns_Mobile.length; button++){
    shareMediaBtns_Mobile[button].onclick = function () {
        // copyLink(window.location.href)
        // copyLink(linkDef);
        articlePreview__SocialLinks__Mobile.style.display = 'none'
        articlePreview__footer.style.display = 'flex'

        //checks if a Social Media Link button for Mobile Phones has a class and copies link based on it.
        if (shareMediaBtns[button].classList.contains("facebook")) {
        copyLink("facebook.com")
        }
        if (shareMediaBtns[button].classList.contains("twitter")) {
            copyLink("twitter.com")
        }
        if (shareMediaBtns[button].classList.contains("pinterest")) {
             copyLink("pinterest.com")
        }
    
    }
}




//custom functions
//copies Link of Page/Custom URL you can declare.
function copyLink(link) {
    navigator.clipboard.writeText(link).then(() => {
        alert(`${link} copied.`)
    })
}