var coursesclicked = false;
var experienceclicked = false;
var webclicked = false;
var javaclicked = false;
var securityclicked = false;
var toolsclicked = false;

function courses(event){
    //console.log("Courses expansion button clicked.");
    if (coursesclicked == false) {
        const element = document.createElement("div");
        element.setAttribute('id', 'courses')
        element.innerHTML = '<p style="color: #ffbf00;">Objected-Oritented Programming with Java</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Objected-Oritented Software Analysis & Design</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Systems Programming</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Data Structures & Algorithms</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Database Management System</p>';
        element.innerHTML += '<p style="color: #ffbf00;">World Wide Web Info System Development</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Computer Networks</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Agile Software Development</p>';
        document.getElementById("education").insertAdjacentElement("afterend", element);
        document.getElementById("vieweducation").innerHTML = "-";
        coursesclicked = true;
    }

    else if (coursesclicked == true) {
        //console.log("Clicked again...");
        const element = document.getElementById("courses");
        element.remove();
        document.getElementById("vieweducation").innerHTML = "+";
        coursesclicked = false;
    }
}

function displayexperience(event){
    if (experienceclicked == false) {
        const element = document.createElement("div");
        element.setAttribute('id', 'experiences')
        element.innerHTML = '<h2 style="color: #ffbf00;">Embryo Labs</h2>';
        element.innerHTML += '<p style="color: white; font-size: 85%;">Web Developer</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Sept 2020-Oct 2021</p>';
        document.getElementById("experience").insertAdjacentElement("afterend", element);
        document.getElementById("viewexperience").innerHTML = "-";
        experienceclicked = true;
    }

    else if (experienceclicked == true) {
        console.log("Clicked again...");
        const element = document.getElementById("experiences");
        element.remove();
        document.getElementById("viewexperience").innerHTML = "+";
        experienceclicked = false;
    }
}

function displayweb(event){
    if (webclicked == false) {
        console.log("Expand web");
        const element = document.createElement("div");
        element.setAttribute('id', 'webskills')
        element.innerHTML = '<p style="color: #ffbf00;">HTML5</p>';
        element.innerHTML += '<p style="color: #ffbf00;">CSS</p>';
        element.innerHTML += '<p style="color: #ffbf00;">JavaScript</p>';
        element.innerHTML += '<p style="color: #ffbf00;">MySQL</p>';
        element.innerHTML +=
        '<p style="color: #ffbf00;"><a href="https://github.com/naveedcho/php-mysql-test" target="_blank">PHP <span class="link">><span></a></p>';
        element.innerHTML += '<p style="color: #ffbf00;">Apache</p>';
        document.getElementById("webblock").insertAdjacentElement("afterend", element);
        document.getElementById("viewweb").innerHTML = "-";
        webclicked = true;
    }

    else if (webclicked == true) {
        console.log("Clicked again...");
        const element = document.getElementById("webskills");
        element.remove();
        document.getElementById("viewweb").innerHTML = "+";
        webclicked = false;
    }
}

function displayjavaskills(event){
    if (javaclicked == false) {
        //console.log("Expand java.");
        const element = document.createElement("div");
        element.setAttribute('id', 'javaskills')
        element.innerHTML = '<p style="color: #ffbf00;">JUnit Framework</p>';
        element.innerHTML += '<p style="color: #ffbf00;">UML Designing</p>';
        document.getElementById("javablock").insertAdjacentElement("afterend", element);
        document.getElementById("viewjava").innerHTML = "-";
        javaclicked = true;
    }

    else if (javaclicked == true) {
        //console.log("Clicked again...");
        const element = document.getElementById("javaskills");
        element.remove();
        document.getElementById("viewjava").innerHTML = "+";
        javaclicked = false;
    }
}

function netsecurity(event){
    if (securityclicked == false) {
        //console.log("Expand network security.");
        const element = document.createElement("div");
        element.setAttribute('id', 'securityskills')
        element.innerHTML = '<p style="color: #ffbf00;">Password Encryption</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Penetration Testing</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Network Firewalls</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Network Intrusion Detection Systems</p>';
        document.getElementById("securityblock").insertAdjacentElement("afterend", element);
        document.getElementById("viewsecurity").innerHTML = "-";
        securityclicked = true;
    }

    else if (securityclicked == true) {
        //console.log("Clicked again...");
        const element = document.getElementById("securityskills");
        element.remove();
        document.getElementById("viewsecurity").innerHTML = "+";
        securityclicked = false;
    }
}

function displaytools(event){
    if (toolsclicked == false) {
        //console.log("Expand network security.");
        const element = document.createElement("div");
        element.setAttribute('id', 'otherskills')
        element.innerHTML = '<p style="color: #ffbf00;">Unix Programming</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Python</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Git</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Jira</p>';
        element.innerHTML += '<p style="color: #ffbf00;">Adobe Photoshop</p>';
        document.getElementById("toolsblock").insertAdjacentElement("afterend", element);
        document.getElementById("viewtools").innerHTML = "-";
        toolsclicked = true;
    }

    else if (toolsclicked == true) {
        console.log("Clicked again...");
        const element = document.getElementById("otherskills");
        element.remove();
        document.getElementById("viewtools").innerHTML = "+";
        toolsclicked = false;
    }
}