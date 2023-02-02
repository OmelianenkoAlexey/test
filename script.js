const container = document.createElement("div");
container.classList.add("container");

function random() {
    return Math.floor(Math.random() * (255 - 0) + 0);
}

function colorRgb() {
    return `${random()}, ${random()}, ${random()}`;
}

console.log(colorRgb());

// console.log(random());

for (i = 1; i < 10; i++) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.style.backgroundColor = `rgb(${colorRgb()})`;
    container.append(div);
}

document.body.append(container);
