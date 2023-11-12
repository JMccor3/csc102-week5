function checkCreds() {
    //input validation for week 3
    console.log("checkCreds() Started")
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    //variable needed creation
    var firstName;
    var lastName;
    var zipCode;
    var zipCodeNumb;
    var fullName;
    var fullNameLength;

    //fill in the variables
    //working on inputting first name
    firstName = document.getElementById("Fname").value;
    console.log("The firstname was input as:" + firstName);
    //working on inputting last name
    lastName = document.getElementById("Lname").value;
    console.log("The lastname was input as:" + lastName);
    //inputting zip code
    zipCode = document.getElementById("Zipcode").value;
    console.log("The zipcode was input as:" + zipCode);
    //full name input
    fullName = firstName + " " + lastName;
    console.log("The fullname was input as:" + fullName);

    fullNameLength = fullName.length;
    console.log("The fullname was input with:" + fullNameLength + "characters.");

    zipCodeNumb = parseInt(zipCode);
    console.log("The zipcode was input with:" + zipCodeNumb + "characters.");

    //things to check: full name length <20; 
    if (fullNameLength > 20) { document.getElementById("loginStatus").innerHTML = "Invalid full name"; }
    //zipcode = 5 digits;
    else if (zipCode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "invalid Zipcode";
    }
    else { alert("User credentials passed! welcome to the site, " + fullName) }


}
function checkPalin() {
    console.log("checkPalin() started");
    //record the string into a variable
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is " + entStr);

    //take away any spaces
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");
    console.log("entered String with No Spaces is " + entStrNoSpace);

    //create reverse array and string variable
    var revStr;
    const revArray = [];
    var length = entStrNoSpace.length - 1;
    console.log("string length is " + length);

    //input into array and reverse it
    for (var i = length; i >= 0; i--) {
        revArray.push(entStrNoSpace[i]);
    }
    //convert to a string from an array
    revStr = revArray.join("");
    console.log("The Reverse String is " + revStr)

    //comparison rev to string and write to status
    var equal = 0;
    equal = (entStrNoSpace === revStr);
    console.log("the ent and reversed being equal is: " + equal);

    //write to palindrome status
    if (equal == true) {
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome";
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome";
    }
}
function playstation() {
    //write to log for debugging
    console.log("playstation() started");
    mysound = new sound("alien-spaceship.mp3");
    console.log("playing alien-spaceship.mp3 using the sound() function")
    mysound.play();
}

function playbox() {
    //write to log for debugging
    console.log("playbox() started");
    mysound = new sound("baby-music-box.mp3");
    console.log("playing baby-music-box using the sound() function");
    mysound.play();
}
function sound(srcFile) {
    //create an instance of the audio class (audio obj)
    this.sound = document.createElement("audio");
    //set source for src file
    this.sound.src = srcFile;
    //loads everything needed for audio
    this.sound.setAttribute("preload", "audio");
    //doesnt load controls for sound
    this.sound.setAttribute("controls", "none");
    //updates file with this obj
    document.body.appendChild(this.sound);
    this.play = function () {
        //plays sound file
        this.sound.play();
    }
    //stops/pauses sound
    this.stop = function () {
        this.sound.pause();

    }
}