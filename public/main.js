function copyContent(){
const mtext = "arunabh.nd@gmail.com";
navigator.clipboard.writeText(mtext).then(function() {
    console.log('Success: Copied to clipboard');
}, function(err) {
    console.error('Error: Could not Copy', err);
});
}


