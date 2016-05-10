import Pattern from "./pattern"

export class Any extends Pattern {
    toPegText() {
        return '.'
    }
}

export default function any(...params) {
    return new Any(...params)
}