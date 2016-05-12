import Pattern from './pattern'

export default class TestNot extends Pattern {
    constructor(private _pattern:Pattern) {
        super()
    }

    toPegText() {
        return `!${this._pattern.toPegText()}`
    }
}

export default function testNot(...params) {
    return new TestNot(...params)
}