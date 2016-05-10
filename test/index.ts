let testCaseName = rule(
    sequence(
        choice(
            rangeOf('a', 'z'),
            rangeOf('A', 'Z'),
            chunk('_')
        ),
        more(
            choice(
                rangeOf('a', 'z'),
                rangeOf('A', 'Z'),
                chunk('_'),
                chunk(' ')
            )
        )
    ),
    function () {
        return {
            location: location()
        }
    }
)

testCaseName.toString()