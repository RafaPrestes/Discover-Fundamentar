///função que irá percorrer o array do argv e pegar uma string 
function getFlagValue(flag) {
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
}

module.exports = getFlagValue;