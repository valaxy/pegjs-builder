import Pattern from "./pattern"

export class SubRule extends Pattern {
    constructor(private _name:string) {
        super()

        this._name = this._name.trim()
        if (!this._name) throw new Error('name can not be empty')
    }

    toPegText() {
        return this._name
    }
}

export default function subRule(...params) {
    return new SubRule(...params)
}