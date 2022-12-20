function unique (arrowOne, arrowTwo){
    const arrowMain = []
    for (let i = 0; i < arrowTwo.length; i++){
        let arrowTwoElement = arrowTwo[i]
        if (!(arrowOne.includes(arrowTwoElement))) {
            arrowMain.push(arrowTwoElement);
        } else if (!(arrowMain.includes(arrowOne[i]))) {
            arrowMain.push(arrowOne[i])
        }
    }
    return arrowMain
}

console.log(unique(['Dnipro', 'Paris', 'York', 'Ternopil'],['Lviv', 'Dnipro', 'Ternopil', 'London']))