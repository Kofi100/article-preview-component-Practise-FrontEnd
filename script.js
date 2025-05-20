var hiddenLinks = document.getElementById("hiddenLinks")
var shareBtn = document.getElementById("shareBtn")
var shareMediaBtns=document.getElementsByClassName("shareMediaBtn")
console.log("hello");
//init
hiddenLinks.style.display='none'


//handlers
shareBtn.onclick = function () {
    
    // if (hiddenLinks.style.display === 'flex') {
    //     hiddenLinks.style.display = 'none'
        
    // }
    // else if (hiddenLinks.style.display === 'none') {
    //     hiddenLinks.style.display = 'flex'
        
    // }
    // else if (hiddenLinks.style.display != 'none') {
    //     hiddenLinks.style.display='none'
    // }
    hiddenLinks.style.display = hiddenLinks.style.display === 'none' ? 'flex' : 'none'
    shareBtn.style.backgroundColor = shareBtn.style.backgroundColor === 'var(--VeryDarkGrayishBlue)' ? 'var(--LightGrayishBlue)' : 'var(--VeryDarkGrayishBlue)'
    // switches b/n colors and states by setting the values of properties to the first declared and toggling/switching when necessary
    console.log("clicked");
    
};
// code to hide shareMedia Parent element when one of the buttons is pressed
//works by looping thru all buttons in shareMediaBtns to check in inputs.
//button here is a int ,but I'm using it to represent the index of every button available
for (let button = 0; button < shareMediaBtns.length; button++){
    shareMediaBtns[button].onclick = function () {
        
    hiddenLinks.style.display = hiddenLinks.style.display === 'none' ? 'flex' : 'none'
    shareBtn.style.backgroundColor = shareBtn.style.backgroundColor === 'var(--VeryDarkGrayishBlue)' ? 'var(--LightGrayishBlue)' : 'var(--VeryDarkGrayishBlue)'
    }
}