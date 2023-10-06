
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


    trackerDiv.style.transform = `translate(${x}px , ${y -90}px)`


    timeOut = setTimeout( ()=>{
        trackerDiv.style.visibility = "hidden"
    } , 250)

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

    }


    isThemeDarkVal = !isThemeDarkVal

}






// // // Menu position (Place) ----->
let menuBtnClicked = false

function showMenuBtn() {
    // alert("ok")

    let ulOfNavTag = document.querySelector("nav>ul")

    if (!menuBtnClicked) {

        ulOfNavTag.style.height = "fit-content"

        document.querySelector("nav>button").innerHTML = "X"
        document.querySelector("nav>button").style.padding = "0 2vh"
        document.querySelector("nav>button").style.backgroundColor = "red"
        document.querySelector("nav>button").style.color = "#fff"
    } else {
        ulOfNavTag.style.height = "3px"
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

function randomImg() {
    let images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCe96xcjYnpr4twMSox-dSbJraEvvknk2wjg&usqp=CAU",
        "https://cdn.w600.comps.canstockphoto.com/colorful-flower-on-black-background-drawing_csp8445899.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3E7HfWciCppTVj2EGrBUt34FtRgsfNMfYzw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAVof4m0fMjXXItHlKeAchup0UEcpOZlTxQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeHfzNV8NN2-Qkwk1nQP-mLqHJ0hv6sh6vsQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUQmeEdv_i7t0ojA0UbzTg9XhKIz4FQPtVA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4EZYAyZmo19iI-KwaW4X_Zj6ZyJ34ywKaA&usqp=CAU",
        "https://res.cloudinary.com/dlvq8n2ca/image/upload/v1692032164/utemmzfh8jy0w4bufdp4.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSyt2AuaENY8PrFMU_e2VKzSkDFj6w5wqdQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpip3aneCiD5G9DGvLl_9aCVkciA3rlt1RXw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsik0vIMpdJlFgf3ElDxQJKYqlNNc4yICcV6O6FoMHevwhineR_aslFq0QUUq4gsvqxYc&usqp=CAU",
        "https://img.freepik.com/premium-photo/realistic-image-eye-iris-cornea-retina-with-luminous-flash-light-blue-eye-3d-illustration_508524-254.jpg?w=2000",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_fpPmbK-bebEeX036y7frmW06amtCkG1ew&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcd08Atj6O4yBZDzCJp7H0msdHXc10gNr10KT9zyAthRC58FXlfArta_6fYDq0RIBcEo&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IFzxKtkXWiPakqTSyEIUsxf3qrTvksRPPw&usqp=CAU",

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





// // // progress here ------>

// let valueArr = [75 , 70 , 80 , 75 , 75 , 70 , 70 , 80 , 65]
// setTimeout( ()=>{
//     document.querySelectorAll("progress").forEach( (p , i)=>{
//         // console.log(p.value)
//         p.value = valueArr[i] 
//     } )
// } , 1000 )













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





