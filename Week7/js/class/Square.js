import { Shape } from "./Shape.js"

export class Square extends Shape {
    #width
    #height
    
    constructor(x,y,side) {
        super(x,y)
        this.#width = side
        this.#height = side
    }

    draw(ctx){
        ctx.beginPath()
        ctx.rect(this._x,this._y,this.#width,this.#height)
        ctx.lineWidth = this._lineWidth
        ctx.stroke()
    }
}