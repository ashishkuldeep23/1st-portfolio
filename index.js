
// // // Follow mause (skew is not completed)---->
// // Two way to do this -->

// // 1st is without gsap (This is good no dependancy needed)

let trackerDiv = document.getElementById("tracker")
let timeOut;

window.addEventListener("mousemove", (values) => {

    clearTimeout(timeOut)

    trackerDiv.style.visibility = "visible"

    // console.log(values)
    let x = values.clientX
    let y = values.clientY


    trackerDiv.style.transform = `translate(${x}px , ${y - 90}px)`


    timeOut = setTimeout(() => {
        trackerDiv.style.visibility = "hidden"
    }, 250)

})


// // 2st is with gsap (Not using now)
function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#tracker", {
            left: dets.x,
            top: dets.y,
        });
    });

}






// // // Make theme dark ----->
// // // Light and dark mode ---->
// // Pending -->


document.getElementById("dark_div_hold").addEventListener("click", changeThemeDark)

let isThemeDarkVal = false

function changeThemeDark() {
    // console.log(event)
    // alert("Let's make theme to dark")
    // console.log("Ok")

    let bodyaTag = document.querySelector("body")

    let buldDiv = document.querySelector("#make_dark_div")

    if (!isThemeDarkVal) {
        // // // dark Code --->

        // // // Some root variable value changing ----> 
        // document.querySelector(":root").setAttribute("--theme") = "#FFB000"

        document.querySelector(":root").style.setProperty("--theme", "#FFB000")
        document.querySelector(":root").style.setProperty("--text", "#fff")
        document.querySelector(":root").style.setProperty("--Shadow_of_bulb", "hidden")


        bodyaTag.style.background = "linear-gradient(150deg, black 20%,#2b5651d4  5%,  black 50% )"
        bodyaTag.style.color = "white"

        buldDiv.style.backgroundColor = "transparent"

        localStorage.setItem("Ashish_portfolio_dark", JSON.stringify(isThemeDarkVal))


    } else {
        // // // Light Code --->

        // // // Some root variable value changing ----> 
        // document.querySelector(":root").setAttribute("--theme") = "#FFB000"

        document.querySelector(":root").style.setProperty("--theme", "#00008b")
        document.querySelector(":root").style.setProperty("--text", "#000")
        document.querySelector(":root").style.setProperty("--Shadow_of_bulb", "visible")


        bodyaTag.style.background = "linear-gradient(150deg, white 20%, #fef8cc 5%, white 50%)"
        bodyaTag.style.color = "black"

        buldDiv.style.backgroundColor = "yellow"

        localStorage.setItem("Ashish_portfolio_dark", JSON.stringify(isThemeDarkVal))

    }


    isThemeDarkVal = !isThemeDarkVal

}


// // // reading local host value and set the theme accr. --->

let darkValueInLocalS = localStorage.getItem("Ashish_portfolio_dark")
if (darkValueInLocalS) {

    darkValueInLocalS = JSON.parse(darkValueInLocalS)
    isThemeDarkVal = darkValueInLocalS
    changeThemeDark()
}








// // // Menu position (Place) ----->
let menuBtnClicked = false

function showMenuBtn() {
    // alert("ok")

    let ulOfNavTag = document.querySelector("nav>ul")

    let liOfUlOfNavTag = document.querySelectorAll("nav>ul li")

    if (!menuBtnClicked) {

        // ulOfNavTag.style.height = "fit-content"


        ulOfNavTag.classList.add("for_ul_of_nav")
        liOfUlOfNavTag.forEach( (ele)=>{ ele.classList.add("for_li_of_ul_of_nav") } )


        document.querySelector("nav>button").innerHTML = "X"
        document.querySelector("nav>button").style.padding = "0 2vh"
        document.querySelector("nav>button").style.backgroundColor = "red"
        document.querySelector("nav>button").style.color = "#fff"
    } else {
        // ulOfNavTag.style.height = "3px"

        ulOfNavTag.classList.remove("for_ul_of_nav")
        liOfUlOfNavTag.forEach( (ele)=>{ ele.classList.remove("for_li_of_ul_of_nav") } )


        document.querySelector("nav>button").innerHTML = "Menu"
        document.querySelector("nav>button").style.padding = "0 1vh"
        document.querySelector("nav>button").style.backgroundColor = "cyan"
        document.querySelector("nav>button").style.color = "#000"
    }

    menuBtnClicked = !menuBtnClicked
}



// // // Get scrool value and increase the width of div (Used in Menu) ---- >

let scrollShowDiv = document.querySelector("#scrool_percent")

document.addEventListener("scroll", scrollPageAndGetSetData)

function scrollPageAndGetSetData() {
    // console.log(dets)

    let totalHeightOfWebPage = document.body.scrollHeight

    let currentDistanceFromTop = document.documentElement.scrollTop

    const windowHeight = document.documentElement.clientHeight

    const scroolPercentge = (currentDistanceFromTop / (totalHeightOfWebPage - windowHeight)) * 100

    // console.log(scroolPercentge)

    if (scroolPercentge > 10) {
        document.getElementById("goto_top").style.display = "block"
    } else {

        document.getElementById("goto_top").style.display = "none"
    }

    scrollShowDiv.style.width = Math.round(scroolPercentge) + "%"


}

scrollPageAndGetSetData()  // // // calling fn first also becoz i want to hide goto btn initially (also without giving any bug).




// // // Writing animation code copy pasted from codepen and used in text. 

function textAnimationCode() {
    // function([string1, string2],target id,[color1,color2])    
    consoleText(
        ["JS Coding.", "HTML & CSS.", "ReactJS Development.", "NodeJs Development.", "MongoDB.", "MERN Development.", "Typescript.", "Tailwind CSS.", "Bootstrap.", "GSAP.", "Animated Website.", "PWA.", "Offline Web."],
        'change_content',
        ['#03F7EB', 'rebeccapurple', '#F15BB5', 'rebeccapurple', '#03F7EB', '#F15BB5', '#03F7EB', '#F15BB5', 'rebeccapurple']
    );

    function consoleText(words, id, colors = ["red"]) {
        // if (colors === undefined) colors = ['red'];

        // var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function () {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function () {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function () {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 120)

    }
}

textAnimationCode()





// // // hover and dv BG Chnaged
// // // // Read mouse over on about section and change color of image background --->

function getRandomColor() {

    let colorArr = [
        // "#30323D" ,
        // "darkblue" ,
        "#DB7F8E",
        "#E8C547",
        "#001514",
        "#F15BB5",
        "#03F7EB",
        "#6B0504",
        "#388697",
        "#F40000",
        "#FA8334",

    ]
    return colorArr[Math.floor(Math.random() * colorArr.length)]
}


function setRandomColorToRightOfAbout() {
    document.getElementById("my_pic").style.backgroundColor = getRandomColor()
}

document.querySelector("#about").addEventListener("mousemove", (dets) => {
    // console.log("In About Section" , getRandomColor())
    setRandomColorToRightOfAbout()
})

document.querySelector("#short_intro").addEventListener("mousemove", (dets) => {
    // console.log("In About Section" , getRandomColor())
    setRandomColorToRightOfAbout()
})

document.querySelector("#dark_div_hold").addEventListener("click", (dets) => {
    // console.log("In About Section" , getRandomColor())
    setRandomColorToRightOfAbout()
})


// // // I want random color to right of about during the on load (On very first time)  --------->
setRandomColorToRightOfAbout()





// // // Projects are div ----->
// // // Hover and create div with image ----->

const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference between previously
        // called and current called timings
        // console.log(now - prev, delay);

        // If difference is greater than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread operator here
            // returning the function with the
            // array of arguments
            return func(...args);
        }
    }
}

// // // Add All Projects screen shots here -------->

// // http://res.cloudinary.com/dlvq8n2ca/image/upload/v1692032164/utemmzfh8jy0w4bufdp4.png

function randomImg() {
    let images = [
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696693499/ouzhrievj5up773po32r.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696609958/iofz19tdkmqioktymhyq.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696609957/yjjqghxpxxq89qxzkpuz.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696693498/avg186hrznrzxttpkjcm.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696610020/sfi0dtjcbswkv5zcoiae.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696609960/p6hiaatyrveeyeg8hwoc.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696693489/gb0rzn7njbwl9fxh9lew.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696608746/nyncxepalfdclcdort1z.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696608748/zwj1celkhetkyjs0zpcq.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696693493/kujfucu62ozmrorvxwjr.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696608750/pzxa5vfyiezgmbavkc57.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696693491/ivccwxicfsil3qxvbwn6.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696693497/o14ztsxrnkkwg9adezyw.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696693494/ospeglmguf3z1fltfn0c.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696608751/ueole0xmljggzsxxlguz.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696693492/sdve9shzqarh1h90zliq.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696608753/h7n3tw25innsvupyfowh.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1694854527/kckqxyoamncconejcjxx.png",
        "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1696693495/b7h3ez19gijtrim1q7uj.png",
    ];


    return images[Math.floor(Math.random() * images.length)];

}

document.querySelector("#project_show").addEventListener("mousemove", throttleFunction((d) => {


    // console.log(d.clientX)

    let createdDiv = document.createElement("div")
    createdDiv.classList.add("careted_div_by_js")
    createdDiv.style.left = d.clientX - 50 + "px"
    createdDiv.style.top = d.clientY - 170 + "px"
    // console.log(createdDiv)


    let img = document.createElement("img");
    img.setAttribute("src", randomImg());

    createdDiv.appendChild(img)

    // // console.log(div)

    // img.style.transform = "translateY(0%)"
    // img.style.transform = "rotate(50deg)"


    // console.log(createdDiv)

    gsap.to(img, {
        y: 0,
    })


    document.querySelector("body").appendChild(createdDiv)

    setTimeout(() => {
        createdDiv.remove()
    }, 1000)

}, 350))






// Fn to open Project link or Any link ------>

function openThisUrlNow(url = "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1692032164/utemmzfh8jy0w4bufdp4.png") {

    let askToUser = confirm("Do you want to open Link ??")

    if (askToUser) {
        window.open(url, "_blank")
    }
}

// openThisUrlNow()



// // // Onclick handler of a tag of description of projects ---->

// // // This Fn is used to stopPropagation() when user click BTN of discription , don't show full website immidiatly.
function onClicKAtagHnadler(event) {
    // console.log(event)
    // alert("CK")
    event.stopPropagation()
}












// let aboutSection = document.getElementById("about")

// aboutSection.addEventListener("mouseover", (d) => {
//     // alert(d)

// })



// // // Contect me with gmail code here  -------->
// // // Conect code ----------------->


let emailRjex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
let nameRejex = /^[A-Za-z\ss]{1,35}$/


// // // ***************************************************** Contact handler function **************************************

// // // Some Enter hadlers -------->

// // Name ---->
document.getElementById("name_contact").addEventListener("keydown", function (e) {
    // console.log(e)
    if (e.code === "Enter") { document.getElementById("email_contact").focus() }
})

// // Email ---->
document.getElementById("email_contact").addEventListener("keydown", function (e) {
    // console.log(e)
    if (e.code === "Enter") { document.getElementById("message_contact").focus() }
})

// // MEssage ---->
document.getElementById("message_contact").addEventListener("keydown", function (e) {
    // console.log(e)
    if (e.code === "Enter") { contectFormSubmit() }
})

// // // Actual contect form handler code here ------------------------>

async function contectFormSubmit() {

    try {

        let name = document.getElementById("name_contact").value.trim()
        let email = document.getElementById("email_contact").value.trim()
        let message = document.getElementById("message_contact").value.trim()

        // alert(name + email + message +"Let's submit")

        if (!name || !email || !message) {
            return alert(`Improtant field is missing (All fields should given)`)
        }

        // // // validation of email here ------------>
        // // Check email by regex ---------->

        if (!nameRejex.test(name)) return alert(`${name} :- Given name is incorrect, Only alphabets are allowed`)

        if (!emailRjex.test(email)) return alert(`${email} :- Given Email is  incorrect.`)

        let body = {
            name: name,
            email: email,
            message: message,
            subject: "New contect me form posted from Porfolio"
        }

        // console.log(body)

        let option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        let request = await fetch("https://working-with-nodemailer.onrender.com/contect-form", option)

        let data = await request.json()

        // console.log(data)

        if (data.status === false) {
            console.log(data)
            alert(data.message)
        } else {
            console.log(data)

            document.getElementById("name_contact").value = ""
            document.getElementById("email_contact").value = ""
            document.getElementById("message_contact").value = ""

            alert(data.message)

        }

    } catch (e) {
        console.log(e)
        alert(e.message)
    }

}





