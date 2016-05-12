import Pattern from "./pattern'

export default class Test extends Pattern {
    constructor(private _pattern:Pattern) {
        super()
    }

    toPegText() {
        return `&${this._pattern.toPegText()}`
    }
}

export default function test(...params) {
    return new Test(...params)
}