
window.onload = function(){
    document.getElementById('text').addEventListener('click',(e) => {
        alert("hola hijos de pu");
    })

class animal{

    constructor(name,age){
        this.name = name
        this.age = age

    }

    ladra(){
     document.innerHTML = this.name
    }
}

var a1 = new animal("perro",35)
a1.ladra()

} 
