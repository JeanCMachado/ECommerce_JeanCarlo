
function init() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let str = ''
        for (let i = 0; i < data.length; i++) {
          let product = data[i]
          console.log(product)
          str +=
            `<div class="row fluid" >          
              <div class="col-2">
                  <img src="${product.image}"  alt="..." class="img-thumbnail" style="max-width:100px;">
                </div>  
              <div class="col-2">
                  <h5>${product.title}</h5>
                </div>
                
                <div class="col-2">
                  <a class="btn btn-primary bg-danger border-danger" href="detalhes.html?id=${product.id}" role="button">detalhes</a>
                </div>
              </div>`
        }
        console.log(str)
        $('#tela').html(str)
  
      })
      .catch(error => console.log(error));
  
  }
  sessionStorage.setItem('db_produtos', JSON.stringify(data));