import Pattern from "./pattern"

export class Optional extends Pattern {
    constructor(private _pattern:Pattern) {
        super()
    }

    toPegText() {
        return this._pattern.toPegText() + '?'
    }
}

export default function optional(...params) {
    return new Optional(...params)
}