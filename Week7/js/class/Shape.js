export class Shape {
    _x
    _y
    _lineWidth

    constructor(x,y,_lineWidth = 1) {
        this._x = x
        this._y = y
        this._lineWidth = _lineWidth
    }

    set setLineWidth(lineWidth) {
        this._lineWidth = lineWidth
    }
}