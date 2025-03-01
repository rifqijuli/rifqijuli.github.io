function updateText() {
    document.getElementById("conditionToday").textContent = "It's going great!";
}

document.getElementById("myButton").onclick = function () {
    location.href = "./index";
};

document.getElementById("canvasButton").onclick = function () {
    location.href = "./canvas.html";
};

let trailCounter = []
window.addEventListener("click", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
    if (trailCounter.length > 0) {
        for (let i = trailCounter.length; i > 0; i--) {
            let trail_ = document.body.getElementsByClassName("trail")
            trailCounter.shift();
            document.body.removeChild(trail_[0]);

        }
    }
});

// mousemove
let lastX; // Tracks the last observed mouse X position
let bar = document.body
bar.addEventListener("mousedown", event => {
    if (event.button == 0) {
        lastX = event.clientX;
        //console.log(lastX);
        window.addEventListener("mousemove", moved);
        event.preventDefault(); // Prevent selection
        console.log("notice mouse clicked")
    }
});

function moved(event) {
    if (event.buttons == 0) {
        window.removeEventListener("mousemove", moved);
        console.log("notice mouse unclicked")
    } else {
        trailCounter.push(lastX);
        if (trailCounter.length >=100) {
            let trail_ = document.body.getElementsByClassName("trail")
            trailCounter.shift();
            //console.log(trail_);
            document.body.removeChild(trail_[0]);
        }
        let trail = document.createElement("trail");
        trail.className = "trail";
        trail.style.left = (event.pageX - 4) + "px";
        trail.style.top = (event.pageY - 4) + "px";
        document.body.appendChild(trail);
        lastX = event.clientX;
    }
}
