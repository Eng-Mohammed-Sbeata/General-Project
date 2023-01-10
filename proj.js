
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "" || x == null) {
        document.getElementById("name").style.outline = "1px solid red"
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        return false;
    }
    var y = document.forms["myForm"]["lname"].value;
    if (y == "" || y == null) {
        document.getElementById("name2").style.outline = "1px solid red"
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        return false;
    }
    var z = document.forms["myForm"]["email"].value;
    if (z == "" || z == null) {
        document.getElementById("name3").style.outline = "1px solid red"
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        return false;
    }
    var m = document.forms["myForm"]["enter"].value;
    if (m == "" || m == null) {
        document.getElementById("las").style.outline = "1px solid red"
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        return false;
    }

}

