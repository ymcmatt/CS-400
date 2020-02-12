function* wordGen(sentence)
{
    yield* sentence.split(' ')
}

let a = wordGen('All I know is something like a bird within her sang');
for (word of a){
    console.log(word)
}