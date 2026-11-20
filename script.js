
let btn = document.getElementById("themeBtn");

btn.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        btn.innerHTML = "☾";
    }
    else {
        btn.innerHTML = "☀";
    }

});


let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill all details!");
    }

    else if (email.includes("@") == false) {
        alert("Enter a valid email!");
    }

    else {
        alert("Thank you " + name + "! Message submitted.");
        form.reset();
    }

});
