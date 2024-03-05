function tabuada() {
var num = document.getElementById('txtn')
var tab = document.querySelector('#seltab')

    if (num.value.length == 0 ) {
        window.alert(`Digite um valor`)
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 20) {
            let item = document.createElement ('option')
            item.text = `${n} * ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}