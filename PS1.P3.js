const modify = (string, func) => func(string);

let result1 = modify('supercalifragilisticexpialidocious',
    string =>
    {
        let res = string.split("c")
        for(let x = 1; x < res.length; x++)
        {
            res[x] = 'c' + res[x]
        }
        return res
    }
)

let result2 = modify('supercalifragilisticexpialidocious',
    string => 
    {
        let modifiedString = string.replace(/a/g,'A')
        let numberReplaced = (string.split('a')).length - 1
        let length = modifiedString.length 
        let res = `{
            originalString: ${string}
            modifiedString: ${modifiedString}
            numberReplaced: ${numberReplaced}
            length: ${length}
        }`
        return res       
    }
)

console.log(result1)
console.log(result2)