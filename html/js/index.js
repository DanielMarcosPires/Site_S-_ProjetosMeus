r =()=>{
    const r = document.body.querySelector(".centro")
    const verme= document.body.querySelector(".list")
    const card = document.body.querySelector(".card")
    const rg = document.body.querySelector(".pesquisa")
    const pesquisa = document.body.querySelector("#pes")
    const pesquisa1 = document.body.querySelector("#pes1")
    const rgb2 = document.body.querySelector("#r")
    r.style.transition = '2s'
    r.style.border = 'solid 4px red' 
    verme.style.transition = '2s'
    verme.style.border = 'solid 4px red'
    card.style.transition = '2s'
    card.style.color = 'white'
    card.style.border = 'solid 4px red'
    card.style.background = '#c68080'
    rg.style.transition = '2s'
    rg.style.background = '#f37c8a'
    rg.style.border = 'solid 4px red'
     rgb2.style.transition = '2s'
    rgb2.style.background = '#c68080'
    rgb2.style.border = 'solid 4px red'
    pesquisa.style.transition = '2s'
    pesquisa1.style.transition = '2s'
    pesquisa.style.background = 'white'
    pesquisa1.style.background = '#ECB8BD'
}
g = ()=>{
    const r = document.body.querySelector(".centro")
    const verme= document.body.querySelector(".list")
    const card = document.body.querySelector(".card")
    const rg = document.body.querySelector(".pesquisa")
    const pesquisa = document.body.querySelector("#pes")
    const pesquisa1 = document.body.querySelector("#pes1")
    const rgb2 = document.body.querySelector("#r")
    r.style.transition = '2s'
    r.style.border = 'solid 4px #51ff01' 
    verme.style.transition = '2s'
    verme.style.border = 'solid 4px #51ff01'
    card.style.transition = '2s'
    card.style.border = 'solid 4px #51ff01'
    card.style.background = '#58b458'
    card.style.color = ' white'
    rg.style.transition = '2s'
    rg.style.background = '#3ac53a'
    rg.style.border = 'solid 4px #51ff01'
    rgb2.style.transition = '2s'
    rgb2.style.background = 'rgba(51, 50, 47, 0.829)'
    rgb2.style.border = 'solid 4px #51ff01'
    pesquisa.style.transition = '2s'
    pesquisa1.style.transition = '2s'
    pesquisa.style.background = 'white'
    pesquisa1.style.background = '#8af37c'    
}
b = ()=>{
    const r = document.body.querySelector(".centro")
    const verme= document.body.querySelector(".list")
    const card = document.body.querySelector(".card")
    const rg = document.body.querySelector(".pesquisa")
    const pesquisa = document.body.querySelector("#pes")
    const pesquisa1 = document.body.querySelector("#pes1")
    const rgb2 = document.body.querySelector("#r")
    r.style.transition = '2s'
    r.style.border = 'solid 4px blue' 
    verme.style.transition = '2s'
    verme.style.border = 'solid 4px blue'
    card.style.transition = '2s'
    card.style.border = 'solid 4px blue'
    card.style.background = '#6D5CD8'
    card.style.color = ' white'
    rg.style.transition = '2s'
    rg.style.background = '#6D5CD8'
    rg.style.border = 'solid 4px blue'
    rgb2.style.transition = '2s'
    rgb2.style.background = '#6D5CD8'
    rgb2.style.border = 'solid 4px blue'
    pesquisa.style.transition = '2s'
    pesquisa1.style.transition = '2s'
    pesquisa.style.background = 'white'
    pesquisa1.style.background = '#B8B9EC'    
}
projetos = ()=>{
    const dados = document.querySelector("#pes")
    const pesquisa = document.querySelector('.info')
    if(dados.value == 'Projetos'){
        pesquisa.innerHTML=`
                        <strong>Projetos:</strong><br>
        <strong><a href="paginas/html/index.html">Perfil</a></strong>
        
        `
    }else if(dados.value == 'suco de laranja'){
        pesquisa.innerHTML=`
        <img src="img/jailson.jpg" alt="">
        <br>
            <strong>Ai que delicia</strong>
            <strong>AIII...</strong>

        
        `
    }
}