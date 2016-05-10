import Pattern from "./pattern"

export class RangeOf extends Pattern {

    constructor(private _charX:string, private _charY:string) {
        super()
        if (_charX > _charY) throw new Error('charX should <= charY')
    }

    toPegText() {
        return `${this._charX}-${this._charY}`
    }
}

export default function rangeOf(...params) {
    return new RangeOf(...params)
}