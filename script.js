
function init() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let str = ''
        for (let i = 0; i <10; i++) {
          let product = data[i]
          console.log(product)
          str +=
            `<div class="row fluid bg-secondary m-2 p-2" >          
              <div class="col-2  bg-light-subtle">
                  <img src="${product.image}"  alt="..." class="img-thumbnail" style="max-width:100px;">
                </div>  
              <div class="col-7   align-self-center">
                  <h5>${product.title}</h5>
                </div>
                
                <div class="col-2 align-self-center">
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