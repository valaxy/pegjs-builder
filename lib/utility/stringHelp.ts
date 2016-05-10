export default {
    leftAlignAt(text:string, ch:string = '|') {
        return text
            .split('\n')
            .filter(line => line.indexOf(ch) >= 0)
            .map(line => line.substr(line.indexOf(ch) + 1))
            .join('\n')
    },

    getExecScript(fn:Function) {
        let REG   = /^function\s+\([^\)]*\)\s+\{([\s\S]*?)}$/
        let match = fn.toString().match(REG)
        let code  = match[1]
        return code.trim('')
    }
}