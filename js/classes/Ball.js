class Ball {

    #x;
    #y;

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = 2;
        this.speedY = 2;
    }

    get x() {
        return this.#x;
    }
    
    set x(x) {
        this.#x = x;
    }

    get y() {
        return this.#y;
    }

    set y(y) {
        this.#y = y;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    bounce(width, height) {
        if (this.x + this.radius > width || this.x - this.radius < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.radius > height || this.y - this.radius < 0) {
            this.speedY = -this.speedY;
        }
    }
}
export default Ball;
