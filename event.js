// Event – page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are events
// Event Listener – event nu reaction – give reaction when click, dblclick, hover, typing

// Add Event Listener
// select -→ event -→ function -→ what you change
// element.addEventListener("event_name", function(){})

// ================================================
// Common Events : click, input, change, submit, mouseover, keyup
// Click
let btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", () => {
    if (btn1.textContent === "Dark Mode") {
        btn1.textContent = "Light Mode"
        document.body.style.backgroundColor = "black";
    } else {
        btn1.textContent = "Dark Mode"
        document.body.style.backgroundColor = "white";
    }
});

let colorBtn = document.querySelector(".btn");
let card = document.querySelector(".color-card");

colorBtn.addEventListener("click", () => {
    if (card.style.backgroundColor === "red") {
        card.style.backgroundColor = "white";
    } else {
        card.style.backgroundColor = "red";
    }
});

// input
// how to know which is typed?
let inp = document.querySelector("input");

inp.addEventListener("input", (dets) => {
    // console.log(dots);
    if(dets.data !== null) {
        console.log(dets.data);
    }
});

// change -- when you change elements state
