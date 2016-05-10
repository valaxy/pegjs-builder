import Pattern from "./pattern/pattern"
import stringHelp from '../utility/stringHelp'

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
        let body = this.pattern.toPegText()
        let func = this.action ? ('{' + stringHelp.getExecScript(this.action.toString()) + '}') : ''
        return body + ' ' + func
    }
}


export default function parsingExpression(...params) {
    return new ParsingExpression(...params)
}