


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






// let aboutSection = document.getElementById("about")

// aboutSection.addEventListener("mouseover", (d) => {
//     // alert(d)

// })




let emailRjex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
let nameRejex = /^[A-Za-z\ss]{1,35}$/




// // // ***************************************************** Contact handler function **************************************

// // // Some Enter hadlers -------->

// // Name ---->
document.getElementById("name_contact").addEventListener( "keydown" , function(e){
    // console.log(e)
    if(e.code === "Enter"){document.getElementById("email_contact").focus()}
} )

// // Email ---->
document.getElementById("email_contact").addEventListener( "keydown" , function(e){
    // console.log(e)
    if(e.code === "Enter"){document.getElementById("message_contact").focus()}
} )

// // MEssage ---->
document.getElementById("message_contact").addEventListener( "keydown" , function(e){
    // console.log(e)
    if(e.code === "Enter"){contectFormSubmit()}
} )

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


