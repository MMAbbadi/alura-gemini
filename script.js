//Functions
function pesquisar() {
  let section = document.getElementById('resultados-pesquisa');
  let campoPesquisa = document.getElementById('campo-pesquisa');

  console.log(campoPesquisa.value)
  if (campoPesquisa.value === ""){
    section.innerHTML = `
    <div class="item-resultado">
      <h2>
        Informação Indisponivel
      </h2>
    </div>
    `  
    return
  }
  campoPesquisa.value = campoPesquisa.value.toLowerCase()
  let resultados = ""
  let nome = ""
  let descricao = ""
  let pais = ""

  for (let char of characters){
    nome = char.name.toLocaleLowerCase()
    descricao = char.description.toLocaleLowerCase()
    pais = char.country.toLocaleLowerCase()

    if (nome.includes(campoPesquisa.value) || descricao.includes(campoPesquisa.value) || pais.includes(campoPesquisa.value)){
      resultados +=`
      <div class="item-resultado">
        <h2>
          ${char.name}
        </h2>
    
        <p class="descricao-meta">
          ${char.description}
        </p>
      </div>
    `  
    }
  }
  
  section.innerHTML = resultados
  campoPesquisa.value = ""
}
