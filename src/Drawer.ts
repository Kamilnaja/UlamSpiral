class Drawer {
    private ctx: CanvasRenderingContext2D;
    private x: number;
    private y: number;
    private ctxWidth: number;
    private ctxHeight: number;
    private squareSide: number;

    constructor(ctx: any) {
        this.ctx = ctx;
        this.ctxHeight = ctx.canvas.height;
        this.ctxWidth = ctx.canvas.width;
        this.squareSide = 1;
    }

    isPrime(num) {
        for (var i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num !== 1;
    }

    drawOne(numberToDisplay: number, y: number, x: number) {
        this.ctx.font = '10px monospace bold';

        if (this.isPrime(numberToDisplay)) {
            this.ctx.fillStyle = 'red';
        } else {
            this.ctx.fillStyle = 'lightgrey';
        }
        this.ctx.fillText(numberToDisplay.toString(), y, x);
    }

    drawNumbers() {
        let directionX = 600;
        let directionY = 800;

        for (let i = 1; i <= 1000;) {
            if (this.squareSide === 1) {
                this.drawOne(i, directionY, directionX);
                this.squareSide++;
                i++
            } else {
                // faza 1 jedno w lewo
                if (this.squareSide % 2 === 0) {
                    this.x = 21;
                    this.y = 21;
                } else {
                    this.x = -21;
                    this.y = -21;
                }
                // raz w lewo lub prawo
                this.drawOne(i, directionY + this.y, directionX);
                i++;
                directionY = directionY + this.y;
                // faza 2 2 w dół lub w górę
                for (let k = 0; k < this.squareSide - 1; k++) {

                    this.drawOne(i, directionY, directionX + this.x);
                    directionX = directionX + this.x;
                    i++;
                }
                // faza 3 w prawo lub lewo
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

}
export default Drawer;