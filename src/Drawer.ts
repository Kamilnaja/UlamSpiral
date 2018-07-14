class Drawer {
    private ctx: CanvasRenderingContext2D;
    private x: number;
    private y: number;
    private squareSide: number;

    constructor(ctx: any) {
        this.ctx = ctx;
        this.squareSide = 1;
    }

    isPrime(num) {
        for (var i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num !== 1;
    }

    drawOne(numberToDisplay: number, y: number, x: number) {
        setTimeout(() => {
            this.ctx.font = '9px serif';
            if (this.isPrime(numberToDisplay)) {
                this.ctx.fillStyle = 'red';
            } else {
                this.ctx.fillStyle = 'lightgrey';
            }
            this.ctx.fillText(numberToDisplay.toString(), y, x);

        }, numberToDisplay * 100)
    }

    drawNumbers() {
        let directionX = 600;
        let directionY = 800;

        for (let i = 1; i <= 10000;) {
            if (this.squareSide === 1) {
                this.drawOne(i, directionY, directionX);
                this.squareSide++;
                i++
            } else {
                this.changeDirection();
                // phase 1, go one left or right
                this.drawOne(i, directionY + this.y, directionX);
                i++;
                directionY = directionY + this.y;
                // phase 2 go down or up
                for (let k = 0; k < this.squareSide - 1; k++) {

                    this.drawOne(i, directionY, directionX + this.x);
                    directionX = directionX + this.x;
                    i++;
                }
                // phase 3 go left or right
                for (let j = 0; j < this.squareSide - 1; j++) {
                    this.drawOne(i, directionY - this.x, directionX);
                    directionY = directionY - this.x;
                    directionX = directionX;
                    i++;
                }
                this.squareSide++;
            }

        }
    }

    private changeDirection() {
        if (this.squareSide % 2 === 0) {
            this.x = 23;
            this.y = 23;
        }
        else {
            this.x = -23;
            this.y = -23;
        }
    }
}

export default Drawer;