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

    checkCollision(enemy) {
        let overlapX = false;
        let overlapY = false;
        if (this.y  + 80 > enemy.y && this.y  < enemy.y + 80) {
            console.log('overlapping y')
            overlapY = true;
        }
        if (this.x  + 80 > enemy.x && this.x  < enemy.x + 80) {
            console.log('overlapping x');
            overlapX = true;
        }

        if (overlapX && overlapY) {
            console.log('hit');
            this.health -= 10;
            if (this.health < 1) {
                alert('Dead');
            }
        }

    }

}

class Enemy extends Player {
    directions = ['up', 'down', 'left', 'right'];
    direction = 'right';
    constructor(x, y, bgColor, left, right, up, down) {
        super(x, y, bgColor, left, right, up, down);
    }
    move(key) {
        if (Math.random() > .9) {
            const index = Math.floor(Math.random() * this.directions.length);
            this.direction = this.directions[index];
        }

        if (this.direction === 'right') {
            this.x += 20
        }
        if (this.direction === 'up') {
            this.y -= 20
        }
        if (this.direction === 'left') {
            this.x -= 20
        }
        if (this.direction === 'down') {
            this.y += 20
        }

        if (this.x + 80 > window.innerWidth)  {
            this.direction = 'left';
        }

        if (this.x  < 0)  {
            this.direction = 'right';
        }

        if (this.y + 80 > window.innerHeight)  {
            this.direction = 'up';
        }

        if (this.y  < 0)  {
            this.direction = 'down';
        }
        this.render();
    }
}