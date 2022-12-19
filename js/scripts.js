function unique (arrowOne, arrowTwo){
    let arrowMain = []
    for (let i = 0; i < arrowOne.length; i++){
        let arrowOneElement = arrowOne[i]
        if (!(arrowTwo.includes(arrowOneElement))){
            arrowMain.push(arrowOneElement)
        }
        for (let j = 0; j < arrowTwo.length; j++){
            let arrowTwoElement = arrowTwo[i]
            if (!(arrowOne.includes(arrowTwoElement))){
                arrowMain.push(arrowTwoElement)
                break
            }
        }
    }
    return arrowMain
}

console.log(unique(['Dnipro', 'Paris', 'York', 'Ternopil'],['Lviv', 'Dnipro', 'Ternopil', 'London']))