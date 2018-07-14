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

    drawOne(text: number, y: number, x: number) {
        this.ctx.fillText(text.toString(), y, x);
    }

    drawNumbers() {
        let directionX = 150;
        let directionY = 200;

        for (let i = 1; i <= 1000;) {
            if (this.squareSide === 1) {
                this.drawOne(i, directionY, directionX);
                this.squareSide++;
                i++
            } else {
                // faza 1 jedno w lewo
                if (this.squareSide % 2 === 0) {
                    this.x = 30;
                    this.y = 30;
                } else {
                    this.x = -30;
                    this.y = -30;
                }
                // raz w lewo lub prawo
                this.drawOne(i, directionY + this.y, directionX);
                i++;
                directionY = directionY + this.y;
                // faza 2 2 w dół lub w górę
                for (let k = 0; k < this.squareSide - 1; k++) {
                    this.drawOne(i, directionY, directionX + this.x);
                    i++;
                    directionX = directionX + this.x;
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