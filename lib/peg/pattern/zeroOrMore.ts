import Pattern from "./pattern"

export class ZeroOrMore extends Pattern {
    constructor(private _pattern:Pattern) {
        super()
    }

    toPegText() {
        return this._pattern.toPegText() + '*'
    }
}

export default function zeroOrMore(...params) {
    return new ZeroOrMore(...params)
}