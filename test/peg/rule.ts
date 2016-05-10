import rule from "../../lib/peg/rule"
import parsingExpression from "../../lib/peg/parsingExpression"
import subRule from "../../lib/peg/pattern/subRule"
import label from "../../lib/peg/pattern/label"
import sequence from "../../lib/peg/pattern/sequence";
import chunk from "../../lib/peg/pattern/chunk";
import oneOrMore from "../../lib/peg/pattern/oneOrMore";
import anyOf from "../../lib/peg/pattern/anyOf";
import rangeOf from "../../lib/peg/pattern/rangeOf";

QUnit.module('Rule')


QUnit.test('default', assert => {
    // example from official website
    let start = rule('start', [
        parsingExpression(
            subRule('additive')
        )
    ])

    let additive = rule('additive', [
        parsingExpression(
            sequence(
                label('left', subRule('multiplicative')),
                chunk('+'),
                label('right', subRule('additive'))
            )
        ),
        parsingExpression(
            subRule('multiplicative')
        )
    ])

    let multiplicative = rule('multiplicative', [
        parsingExpression(
            sequence(
                label('left', subRule('primary')),
                chunk('*'),
                label('right', subRule('multiplicative'))
            )
        ),
        parsingExpression(
            subRule('primary')
        )
    ])

    let primary = rule('primary', [
        parsingExpression(
            subRule('integer')
        ),
        parsingExpression(
            sequence(
                chunk('('),
                label('additive', subRule('additive')),
                chunk(')')
            )
        )
    ])

    let integer = rule('integer', [
        parsingExpression(
            label('digits', oneOrMore(
                anyOf(rangeOf('0', '9'))
            ))
        )
    ], 'integer')

    console.log(start.toPegText())
    console.log(additive.toPegText())
    console.log(multiplicative.toPegText())
    console.log(primary.toPegText())
    console.log(integer.toPegText())

    assert.ok(true)
})