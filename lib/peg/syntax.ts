import Pattern from "./pattern/pattern"
import Rule from "./rule"

export default class Syntax extends Pattern {
    private _rules:Rule[]

    get rules() { return this._rules }

    constructor(rules:Rule[]) {
        super()
        this._rules = rules
    }

    toPegText() {
        return this.rules.map(rule => rule.toPegText()).join('\n')
    }
}