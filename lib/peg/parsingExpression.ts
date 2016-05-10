import Pattern from "./pattern/pattern"
import stringHelp from '../utility/stringHelp'

export class ParsingExpression extends Pattern {
    private _pattern:Pattern
    private _action:Function

    get pattern() { return this._pattern }

    set pattern(value) { this._pattern = value }


    get action() { return this._action }

    set action(value) { this._action = value }

    
    constructor(pattern, action?) {
        super()
        this.pattern = pattern
        this.action  = action
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