function detalhes_produto() {
    var query = location.search.slice(1);
    //console.log(location.search)
    var partes = query.split('&');
    console.log(partes)
    var valor

    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        valor = chaveValor[1];
        console.log(chave)
        console.log(valor)
    });

    fetch(`https://fakestoreapi.com/products/${valor}`)
        .then(res => res.json())
        .then(product => {
            console.log(product)
            let str = ''
            str +=
                `<div class="row">          
              <div class="col-7">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
              </div>
              <div class="col-3">
                <img src="${product.image}"  alt="..." class="img-thumbnail" style="max-width:400px;">
              </div>  
              <div>
                <h2>R$: ${product.price}</h2> 
                <h2>Avaliação: ${product.rating.rate}</h2>             
              </div>     
            </div>`
            $('#tela_detalhes').html(str)
            console.log(str)
        })
        .catch(error => console.log(error));
}