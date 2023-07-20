let count = 0;

const countAddBtn   = document.getElementById("add");
const countMinusBtn = document.getElementById("minus");
const countHeader   = document.getElementById("count");

countAddBtn.addEventListener("click", () => {
    count++;
    countHeader.innerText = count;
    // console.log(count);
} );

countMinusBtn.addEventListener("click", () => {
    count--;
    countHeader.innerHTML = count;
    // console.log(count);
} );