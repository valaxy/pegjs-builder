import {chunk,any,rangeOf,anyOf,subRule,zeroOrMore,oneOrMore,optional,sequence,label} from '../../lib/peg/patterns'

QUnit.module('Pattern')

QUnit.test('chunk', assert => {
    assert.equal(chunk("abc\n\t...123").toPegText(), '"abc\\n\\t...123"')
})

QUnit.test('any', assert => {
    assert.equal(any().toPegText(), '.')
})


QUnit.test('rangeOf', assert => {
    assert.equal(rangeOf('a', 'z').toPegText(), 'a-z')
})


QUnit.test('anyOf', assert => {
    assert.equal(anyOf(
        rangeOf('a', 'z'),
        chunk('ab\n'),
        rangeOf('0', '9')
    ).toPegText(), '[a-zab\\n0-9]')
})


QUnit.test('subRule', assert => {
    assert.equal(subRule('abc').toPegText(), 'abc')
})


QUnit.test('zeroOrMore', assert => {
    assert.equal(zeroOrMore(
        subRule('abc')
    ).toPegText(), 'abc*')
})

QUnit.test('oneOrMore', assert => {
    assert.equal(oneOrMore(
        subRule('abc')
    ).toPegText(), 'abc+')
})

QUnit.test('optional', assert => {
    assert.equal(optional(
        subRule('abc')
    ).toPegText(), 'abc?')
})


QUnit.test('label', assert => {
    assert.equal(label('abc', chunk('111')).toPegText(), 'abc:"111"')
})

QUnit.test('sequence', assert => {
    assert.equal(sequence(
        chunk('abc'),
        oneOrMore(
            chunk('123')
        ),
        subRule('abc')
    ).toPegText(), '"abc" "123"+ abc')
})


