let obj = {
    brand : "maruti"
}
let obj2 = {
    brand : "honda"
}
function showBrand(){
        console.log (this.brand)
}

showBrand.call(obj)
showBrand.call(obj2)
