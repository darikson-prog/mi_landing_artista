const Myboton = document.getElementById("albunes")

Myboton.addEventListener("clic", function(){
   Myboton.innerHTML="albunes"
   var datosDarikson = {
    nombre: Myboton.value
   }

   console.log(datosDarikson)
}
    
)







const variableParaBoton = document.getElementById("miBoton")
const variableParaEtiquetaP = document.getElementById('demo')
const miInput = document.getElementById('miNombre')

variableParaBoton.addEventListener('click', function(){
        variableParaEtiquetaP.innerHTML = 'Cuerpo del parrafo'
        var datosCarlosCardona = {
            nombre: miInput.value
        }

        console.log(datosCarlosCardona)
    }
)

variableParaBoton.style.padding = '20px'

  