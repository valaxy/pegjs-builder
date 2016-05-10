import rule from "../../lib/peg/rule"
import parsingExpression from "../../lib/peg/parsingExpression"
import subRule from "../../lib/peg/pattern/subRule"
import label from "../../lib/peg/pattern/label"
import sequence from "../../lib/peg/pattern/sequence"
import chunk from "../../lib/peg/pattern/chunk"
import oneOrMore from "../../lib/peg/pattern/oneOrMore"
import anyOf from "../../lib/peg/pattern/anyOf"
import rangeOf from "../../lib/peg/pattern/rangeOf"
import Syntax from '../../lib/peg/syntax'

QUnit.module('Syntax')


QUnit.test('default', assert => {
    // example from official website
    let syntax = new Syntax([
        rule('start', [
            parsingExpression(
                subRule('additive')
            )
        ]),

        rule('additive', [
            parsingExpression(
                sequence(
                    label('left', subRule('multiplicative')),
                    chunk('+'),
                    label('right', subRule('additive'))
                ),
                function () {
                    return left + right
                }
            ),
            parsingExpression(
                subRule('multiplicative')
            )
        ]),

        rule('multiplicative', [
            parsingExpression(
                sequence(
                    label('left', subRule('primary')),
                    chunk('*'),
                    label('right', subRule('multiplicative'))
                ),
                function () {
                    return left * right
                }
            ),
            parsingExpression(
                subRule('primary')
            )
        ]),

        rule('primary', [
            parsingExpression(
                subRule('integer')
            ),
            parsingExpression(
                sequence(
                    chunk('('),
                    label('additive', subRule('additive')),
                    chunk(')')
                ),
                function () {
                    return additive
                }
            )
        ]),

        rule('integer', [
            parsingExpression(
                label('digits', oneOrMore(
                    anyOf(rangeOf('0', '9'))
                )),
                function () {
                    return parseInt(digits.join(""), 10)
                }
            )
        ], 'integer')
    ])

    console.log(syntax.toPegText())

    assert.ok(true)
})