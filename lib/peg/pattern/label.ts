import Pattern from "./pattern"

export class Label extends Pattern {
    constructor(private _label:string, private _pattern:Pattern) {
        super()
    }

    toPegText() {
        return `${this._label}:${this._pattern.toPegText()}`
    }
}

export default function label(...params) {
    return new Label(...params)
}