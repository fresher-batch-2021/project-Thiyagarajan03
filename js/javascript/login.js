function login() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if (password.length < 8) {
        alert("password must be greater than 8 digits");
        return false;
    }
    else {

        UserService.login(email, password).then(res => {
            let data=res.data;
            console.log(data);
            
            localStorage.setItem("LOGGED_IN_USER", JSON.stringify(data.docs[0]));
            console.log(data.docs[0]);

            alert("login successful");
            window.location.href = "listplan.html";
        }).catch(err => {
            console.log(err.response.data);
            alert("login failed");
        })
    }

}