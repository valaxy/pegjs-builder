import Pattern from "./pattern"
import {RangeOf} from "./rangeOf"
import {Chunk} from "./chunk"

export class AnyOf extends Pattern {
    private _members

    constructor(...members:Array<RangeOf|Chunk>) {
        super()
        this._members = members

        this._members.forEach(member => {
            if (!(member instanceof RangeOf) && !(member instanceof Chunk))
                throw new Error('member should be RangeOf or Chunk')
        })
    }

    toPegText() {
        return '['
            + this._members
                .map(member => {
                    if (member instanceof RangeOf) {
                        return member.toPegText()
                    } else {
                        let text = member.toPegText()
                        return text.slice(1, text.length - 1)
                    }
                })
                .join('')
            + ']'
    }
}

export default function anyOf(...params) {
    return new AnyOf(...params)
}