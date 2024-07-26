function fakeBin(x){
    let falseX = ""
    for(let i = 0; i < x.length; i++){
        +x[i] > 5 ? falseX += "1" : falseX += "0"
    }
    return falseX
}