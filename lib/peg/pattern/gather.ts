import Pattern from "./pattern"

export class Gather extends Pattern {
    constructor(private _pattern:Pattern) {
        super()
    }

    toPegText() {
        return `(${this._pattern.toPegText()})`
    }
}

export default function gather(...params) {
    return new Gather(...params)
}