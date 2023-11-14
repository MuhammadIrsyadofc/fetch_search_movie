const searchButton = document.querySelector('.search-buttton') 
searchButton.addEventListener('click', function(){
    
    const inputKeyword = document.querySelector('.input-keyword')
    fetch('http://www.omdbapi.com/?apikey=fd8c50b2&s=' + inputKeyword.value )
      .then(response => response.json())
      .then(response =>{
        const movie = response.Search ;
        let cards = '' ;

        movie.forEach( m =>{
            cards += `
            <div class="col-md-4">
                <div class="card">
                  <img src="${m.Poster}" class="card-img-top" >
                  <div class="card-body">
                  <h5 class="card-title">avengers </h5>
                  <h6 class="card-subtitle mb-2 text-muted">2016</h6>
                  <a href="#" class="btn btn-primary show-Detail" data-bs-toggle="modal" data-bs-target="#modal" data-imdbid="${m.imdbID}">show details</a>
                </div>
               </div>
            </div>
            `
            const movieContainer = document.querySelector('.movie-container') ;
            movieContainer.innerHTML = cards ;
            // ketika tombol show detail di klik
           

            const showDetail = document.querySelectorAll('.show-Detail')
            showDetail.forEach(btn =>{
              btn.addEventListener('click', function(){
                const imdbid = this.dataset.imdbid ;
                fetch('http://www.omdbapi.com/?apikey=fd8c50b2&i=' + imdbid) 
                .then(response => response.json())
                .then( m =>{
                  const movieDetail = `
                  <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <img src="${m.Poster}" alt="">
            </div>
            <div class="col-md">
              <ul class="list-group">
                <li class="list-group-item">Judul :  <br> ${m.Title}</li>
                <li class="list-group-item">Released : <br> ${m.Released}</li>
                <li class="list-group-item">Director :  <br>${m.Director} </li>
                <li class="list-group-item">Rating :   <br> ${m.Rated}</li>
                <li class="list-group-item">Penulis : <br> ${m.Writer}</li>
                <li class="list-group-item">Actors  <br> ${m.Actors}</li>
                <li class="list-group-item">Plot  <br> ${m.Plot}</li>
              </ul>
            </div>
          </div>
         </div>` ;
         const modalBody = document.querySelector('.modal-body')
         modalBody.innerHTML = movieDetail ;
                })
              })
            })
 
        })
      })







})