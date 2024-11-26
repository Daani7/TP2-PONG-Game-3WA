class Player {

    #x;
    #y;
    #width;
    #height;
    #color;

    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    get x () {
        return this.#x;
    }

    set x (x) {
        this.#x = x;
    }

    get y () {
        return this.#y;
    }

    set y (y) {
        this.#y = y;
    }

    get width () {
        return this.#width;
    }

    set width (width) {
        this.#width = width;
    }

    get height () {
        return this.#height;
    }

    set height (height) {
        this.#height = height;
    }

    get color () {
        return this.#color;
    }

    set color (color) {
        this.#color = color;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    move(mouseY, canvasHeight) {
        this.y = mouseY - this.height / 2;
        if (this.y < 0) this.y = 0;
        if (this.y + this.height > canvasHeight) this.y = canvasHeight - this.height;
    }
}

export default Player;
