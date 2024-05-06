let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

    //  or

    let user = form.elements[0];
    let pass = form.elements[1];

    console.log(user.value);
    console.log(pass.value);

    alert(`username = ${user.value} and password = ${pass.value}`);
})