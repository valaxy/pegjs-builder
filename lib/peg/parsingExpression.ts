import Pattern from "./pattern/pattern"

export class ParsingExpression extends Pattern {
    private _pattern:Pattern
    private _action:Function

    get pattern() { return this._pattern }

    get action() { return this._action }

    constructor(pattern, action?) {
        super()
        this._pattern = pattern
        this._action  = action
    }

    toPegText() {
        return this.pattern.toPegText()
    }
}


export default function parsingExpression(...params) {
    return new ParsingExpression(...params)
}