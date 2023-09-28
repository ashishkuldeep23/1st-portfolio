
// // // Follow mause (skew is not completed)---->
// // Two way to do this -->
// // 1st is without gsap

window.addEventListener("mousemove", (values) => {
    
    // console.log(values)
    let x = values.clientX
    let y = values.clientY
    document.getElementById("tracker").style.transform = `translate(${x}px , ${y-95}px)`
    
})



// // 1st is with gsap
function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#tracker", {
            left: dets.x,
            top: dets.y,
        });
    });

}


// cursorAnimation()





// // // Menu position (Place) ----->
let menuBtnClicked = false

function showMenuBtn() {
    // alert("ok")

    let navTag = document.querySelector("nav")

    if (!menuBtnClicked) {

        navTag.classList.add("menu_nav")
    } else {
        navTag.classList.remove("menu_nav")
    }

    menuBtnClicked = !menuBtnClicked
}



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


// // // I want random color to right of about during the on load (On very first time)  --------->
setRandomColorToRightOfAbout()






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


    console.log(createdDiv)

    gsap.to(img, {
        y: 0,
    })


    document.querySelector("body").appendChild(createdDiv)

    setTimeout(() => {
        createdDiv.remove()
    }, 1200)

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


