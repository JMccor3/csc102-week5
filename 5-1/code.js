function startfun() {
    console.log("startfun() started");
    //disables this & enables other after 1st click
    document.getElementById("startbutton").disabled = true;
    document.getElementById("stopbutton").disabled = false;
    //ties button to image
    document.getElementById("mymarquee").start();

}

function stopfun() {
    console.log("stopfun() started");
    //disables this & enables other after 1st click
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("startbutton").disabled = false;
    //ties button to image movement
    document.getElementById("mymarquee").stop();
}