btn = ()=>{
    const anim = document.body.querySelector('#move')
    const btn = document.body.querySelector('#sumir')
    const info = document.body.querySelector("#escondido")
    const img = document.body.querySelector('.perfil')
    const img2 = document.body.querySelector('#img')
    const txt = document.body.querySelector('.text')
    anim.style.transition = '1s'
    anim.style.background = 'none'
    anim.style.border = 'none'
    btn.style.display = 'none'
    img.style.marginLeft = '-340px'

    img.style.transition = '1s'
    img.style.height = '300px'
    img.style.width = '300px'

    info.style.background = 'wheat'
    info.style.border = 'solid red'
    info.style.transition = '2s'
    info.style.height = '380px'


    
    txt.style.display = 'block'
    txt.style.transition = '10s'
    txt.style.color = '#2b2c2b'
    

    const text2 = document.querySelector('.text')
    text2.innerHTML =`
        Nome:<strong>Daniel Marcos Pires </strong> <br>
        18 anos <br>
        Data de nascimento:<br>12/09/2003.<br>
        faculdade: Unifatecie
        <br>
        Redes Sociais.<br>
        <a href="https://github.com/DanielMarcosPires">Github</a><br>
        <a href='https://www.instagram.com/DanielMarcosPires01/'>Instagram</a>        
    `


}