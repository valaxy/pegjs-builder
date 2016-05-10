import Pattern from "./pattern"

export class Chunk extends Pattern {
    constructor(private _str:string) {
        super()
    }

    toPegText() {
        return JSON.stringify(this._str)
    }
}


export default function chunk(...params) {
    return new Chunk(...params)
}