// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean 
// and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const XO = (str) => {
    let X = [];
    let O = [];
    let newStr = str.toLowerCase()

    for(let el of newStr){
        if(el === "x"){
            X.push(el)
        }else if(el === 'o'){
            O.push(el)
        }
    }

    return X.length === O.length
}

const XO2 = (str) => {
    let newStr = str.toLowerCase().split("")
    return newStr.filter(x => x === "x").length === newStr.filter(x => x === "o").length
}

XO2("abc")