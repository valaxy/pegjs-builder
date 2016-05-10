import ParsingExpression from "./parsingExpression"
import Pattern from "./pattern/pattern"
import stringHelp from '../utility/stringHelp'

const INDENT = '    '

export class Rule extends Pattern {
    private _name:string
    private _expressions:ParsingExpression[]
    private _readableName:string

    get name() { return this._name }

    get expressions() { return this._expressions}

    get readableName() { return this._readableName }

    constructor(name, expressions, readableName = null) {
        super()
        this._name         = name
        this._expressions  = expressions
        this._readableName = readableName
    }


    toPegText() {
        let exps         = this.expressions.map((exp, index) => {
            let startSymbol = index == 0 ? '=' : '/'
            return `${INDENT}${startSymbol} ${this.expressions[index].toPegText()}\n`
        })
        let readableName = this.readableName ? JSON.stringify(this.readableName) : ''


        return `${this.name} ${readableName}\n${exps.join('')}`
    }
}

export default function rule(...params) {
    return new Rule(...params)
}