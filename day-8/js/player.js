class Player {
    health = 100;
    element = document.createElement('div');
    x = 200;
    y = 200;
    bgColor = 'yellow';
    left = 'ArrowLeft';
    right = 'ArrowRight';
    up = 'ArrowUp';
    down = 'ArrowDown';
    constructor(x, y, bgColor, left, right, up, down) {
        if (x) {
            this.x = x;
        }
        if (y) {
            this.y = y;
        }

        if (bgColor) {
            this.bgColor = bgColor;
        }

        if (left) {
            this.left = left;
        }

        if (right) {
            this.right = right;
        }

        if (up) {
            this.up = up;
        }

        if (down) {
            this.down = down;
        }

        this.element.style.height = '80px';
        this.element.style.width = '80px';
        this.element.style.backgroundColor = 'yellow';
        this.element.style.display = 'inline-block';
        this.style('border-radius', '50%');
        this.style('position', 'absolute');
        this.render();
        document.body.appendChild(this.element);
    }

    style(name, value) {
        this.element.style[name] = value;
    }

    render() {
        this.style('left', this.x + 'px');
        this.style('top', this.y + 'px');
        this.style('backgroundColor', this.bgColor);
    }

    move(key) {
        if (key === this.left) {
            this.x -= 20;
        }
        if (key === this.right) {
            this.x += 20;
        }
        if (key === this.up) {
            this.y -= 20;
        }
        if (key === this.down) {
            this.y += 20;
        }
       this.render();
    }

}