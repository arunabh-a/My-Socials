function copyContent(){
const mtext = "arunabh.nd@gmail.com";
navigator.clipboard.writeText(mtext).then(function() {
    console.log('Success: Copied to clipboard');
}, function(err) {
    console.error('Error: Could not Copy', err);
});
}

window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
    preloader.style.display = 'none';
    content.style.display = 'block';
});
