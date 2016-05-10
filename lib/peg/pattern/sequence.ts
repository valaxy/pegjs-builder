import Pattern from './pattern'

export class Sequence extends Pattern {
    private _patterns

    constructor(...patterns:Pattern[]) {
        super()
        this._patterns = patterns
    }

    toPegText() {
        return this._patterns.map(p => p.toPegText()).join(' ')
    }
}

export default function sequence(...params) {
    return new Sequence(...params)
}