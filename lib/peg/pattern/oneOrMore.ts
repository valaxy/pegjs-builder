import Pattern from "./pattern"

export class OneOrMore extends Pattern {
    constructor(private _pattern:Pattern) {
        super()
    }

    toPegText() {
        return this._pattern.toPegText() + '+'
    }
}

export default function oneOrMore(...params) {
    return new OneOrMore(...params)
}