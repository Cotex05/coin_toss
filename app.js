var randomNum = Math.floor((Math.random()*2) + 1);
var key = "";

function refreshPage() {
    window.location.reload();
}

const btn = document.querySelector('#showBtn');
// handle click button
btn.onclick = function () {
    const rbs = document.querySelectorAll('input[name="choice"]');
    var selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    var ans = "";

    if (randomNum === 1){
        ans = "Head!";
    } else {
        ans = "Tail!"
    }

    if (selectedValue == randomNum ){
        key = "🏆 You Won! 🥇";
    } else {
        key = "You Lose 🙁 It's " + ans;
    }
};




