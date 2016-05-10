export default {
    leftAlignAt(text:string, ch:string = '|') {
        return text
            .split('\n')
            .filter(line => line.indexOf(ch) >= 0)
            .map(line => line.substr(line.indexOf(ch) + 1))
            .join('\n')
    }
}