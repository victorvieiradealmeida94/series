function pesquisar () {
  let section = document.getElementById("resultados-pesquisa")
console.log(section)

let campoPesquisa = document.getElementById("campo-pesquisa").value

if(campoPesquisa == ""){
  section.innerHTML = `<p> Nenhuma série foi encontrada. </p>`
  return 
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = ""
let titulo = ""
let descricao = ""


for(let dado of dados)  {
  titulo = dado.titulo.toLowerCase()
  descricao = dado.descricao.toLowerCase()
  
    if(titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) ){
    resultados += `<div class="item-resultado">
    <h2><a href="#" target="_blank"> ${dado.titulo} 
      </a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
      <a href=${dado.link} target="_blank">Mais informações</a>
    </div>  `

  }
  dado.titulo.includes(campoPesquisa) 
 
}

if (!resultados){
  resultados = "<p> Nada foi encontrado. </p>"
}

section.innerHTML = resultados

}





