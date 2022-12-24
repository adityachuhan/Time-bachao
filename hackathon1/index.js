let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let button = document.getElementById('button')
let form = document.getElementById('form-box')
    // let clock = document.getElementById('timer')
let mild = document.getElementById

var now = new Date().getTime();
let last = 00000000000;
let act = false;
button.addEventListener('click', () => {
    if (form.style.display != "none") {
        form.style.display = "none"
        now = new Date().getTime();
        last = now + (hours.value * 60 * 60 + minutes.value * 60) * 1000;
        act = true
    }

})

form.style.display = "block"
hours.value = 0;
minutes.value = 0;



setInterval(() => {
    if (act) {
        console.log("something")
        if (last.toString().slice(0, 10) == new Date().getTime().toString().slice(0, 10)) {
            alert("Your time is up !")

        }
    }
}, 1000);