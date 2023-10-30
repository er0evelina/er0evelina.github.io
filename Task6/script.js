const prices = {
    defPrice: [60, 70, 80],
    radio: {
        r: 1,
        r1: 2,
        r2: 3
    },
    check: 50
};


function update() {
    let select = document.getElementById("select");
    let res = 0;
    let rd = document.getElementById("radios");
    let cd = document.getElementById("checkD");

    switch (select.value) {
        case "0":
            rd.style.display = "none";
            cd.style.display = "none";
            res = prices.defPrice[parseInt(select.value)];
            break;
        case "1":
            rd.style.display = "block";
            cd.style.display = "none";
            res = prices.defPrice[parseInt(select.value)];
            break;
        case "2":
            rd.style.display = "none";
            cd.style.display = "flex";
            res = prices.defPrice[parseInt(select.value)];
            break;
        default:
            alert("не выбранно");
    }


    let radio = document.getElementsByName("radio");
    radio.forEach((e) => {
        if (rd.style.display === "block"){
            if (e.checked) {
                let price = prices.radio[e.value];
                res *= price;
            }
        }
    });

    let check = document.getElementById("checkbox");

    if(cd.style.display === "flex") {
        if (check.checked) {
            res += prices.check;
        }
    }

    const count = document.getElementById('Count');
    res = res*count.value;

    let endPrice = document.getElementById("result");
    endPrice.value = res;
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded and parsed");
    let s = document.getElementById("select");
    s.addEventListener("change", update);

    const c = document.getElementById('Count');
    c.addEventListener('change', update)

    let r = document.getElementsByName("radio");
    r.forEach((e) => {
        e.addEventListener("change", update);
    });

    let check = document.getElementById("checkbox");
    check.addEventListener("change", update);

});

update();
