var jwt = localStorage.getItem("jwt");
if (jwt == null) {
    window.location.href = '../login.html'
}

function loadUser() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5002/user/" + jwt);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Authorization", "Bearer " + jwt);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            console.log(objects);
            //            if (objects["status"] == "ok") {
            //                const user = objects["user"]
            document.getElementById("employeeId").innerHTML = objects['employeeId'];
            document.getElementById("email").innerHTML = objects['email'];
            document.getElementById("department").innerHTML = objects['department'];
            document.getElementById("currentLocation").innerHTML = objects['currentLocation'];
            document.getElementById("BU").innerHTML = objects['BU'];
            document.getElementById("company").innerHTML = objects['company'];

            document.getElementById("firstName").innerHTML = objects['personalInfo']['firstName'];
            document.getElementById("middleName").innerHTML = objects['personalInfo']['middleName'];
            document.getElementById("lastName").innerHTML = objects['personalInfo']['lastName'];
            document.getElementById("DOB").innerHTML = objects['personalInfo']['DOB'];
            document.getElementById("nationality").innerHTML = objects['personalInfo']['nationality'];
            document.getElementById("maritalStatus").innerHTML = objects['personalInfo']['maritalStatus'];

            document.getElementById("flatNo").innerHTML = objects['contact']['flatNo'];
            document.getElementById("locality").innerHTML = objects['contact']['locality'];
            document.getElementById("landmark").innerHTML = objects['contact']['landmark'];
            document.getElementById("city").innerHTML = objects['contact']['city'];
            document.getElementById("state").innerHTML = objects['contact']['state'];
            document.getElementById("country").innerHTML = objects['contact']['country'];
            document.getElementById("pincode").innerHTML = objects['contact']['pincode'];
            document.getElementById("mobileNo").innerHTML = objects['contact']['mobileNo'];


            //            }
        }
    };
}

loadUser();

function logout() {
    localStorage.removeItem("jwt");
    window.location.href = '../login.html'
}