var jwt = localStorage.getItem("jwt");
if (jwt != null) {
    window.location.href = '../dashbord.html'
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:5001/login");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.send(JSON.stringify({
        "username": username,
        "password": password
    }));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            console.log(objects);
            if (objects['loggedIn'] == 'True') {
                localStorage.setItem("jwt", objects['username']);
                Swal.fire({
                    text: objects['message'],
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '../dashbord.html';
                    }
                });
            } else {
                Swal.fire({
                    text: objects['message'],
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    };
    return false;
}