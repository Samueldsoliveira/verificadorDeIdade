function javascript() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os seus dados!!!")
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 13){
                //criança
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade > 14 && idade <= 19){
                //jovem 
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 13){
                //criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade > 14 && idade <= 19){
                //jovem 
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosamulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        res.style.textAlign = 'center'
    }
}

