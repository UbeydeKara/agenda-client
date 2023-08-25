const background = {
    light: "#EEEEEECC",
    dark: "#ffc7c7cc"
}

export function rippleEffect(event, theme = "light") {
    const btn = event.target;

    // create circle span
    const circle = document.createElement("span");

    // get radius
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    // position of relative element
    const bounds = event.target.getBoundingClientRect();
    const localX = event.clientX - bounds.left - radius;
    const localY = event.clientY - bounds.top - radius;

    // set circle
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${localX}px`;
    circle.style.top = `${localY}px`;

    // add bg
    circle.style.backgroundColor = background[theme];

    // add ripple class for animation
    circle.classList.add("ripple");

    // clean-up if span element already exists
    const ripple = btn.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    // add span element to button
    btn.appendChild(circle);
}
