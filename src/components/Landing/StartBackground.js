const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];
const startNumber = 400;
const starMaxRadius = 3;
let stars = [];
let radian = 0;
let mouseDown = false;
let opacity = 1;

export function drawBackground(canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initCanvas(ctx);

    animate(ctx, canvas);

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initCanvas(ctx);
    });

    window.addEventListener("mousedown", () => {
        mouseDown = true;
    });
}

function initCanvas(ctx) {
    stars = [];
    const canvasSize = Math.max(window.innerWidth, window.innerHeight);
    for (let i = 0; i < startNumber; i++) {
        const x = canvasSize * (Math.random() - 0.5);
        const y = canvasSize * (Math.random() - 0.5);
        const radius = starMaxRadius * Math.random();
        const currColor = colors[Math.floor(Math.random() * colors.length)];
        stars.push(new Star(x, y, radius, currColor, ctx));
    }
}

function animate(ctx, canvas) {
    requestAnimationFrame(animate.bind(this, ctx, canvas));

    ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(radian);
    stars.forEach((star) => star.update());
    ctx.restore();
    radian += 0.002;

    if(mouseDown && opacity >= 0.1){
        opacity -= 0.01;
    }
}

class Star {
    constructor(x, y, radius, color, ctx) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.shadowColor = this.color;
        this.ctx.shadowBlur = 15;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    update() {
        this.draw();
    }
}
