let container = document.querySelector(`.album`);
let playlist = document.querySelector(`.playlist`);

let search = new URLSearchParams(window.location.search)

let album = albums[search.get(`i`)];

container.innerHTML = `
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${album.img}" alt="" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-4">
                            <div class="card-body">
                                <h5 class="card-title">${album.title}</h5>
                                <p class="card-text">${album.description}</p>
                                <p class="card-text"><small class="text-muted">${album.year}</small></p>
                            </div>
                        </div>
                    </div>
              </div>`;

let tracks = album.tracks;
            
for(j = 0; j < tracks.length; j++){
    let track = tracks[j];
   playlist.innerHTML += `
        <li class="list-group-item d-flex align-items-center">
            <img src="assets/playlist-play.png" alt="" height="30px" class="me-3">
            <div>
                <div>${track.title}</div>
                <div class="text-secondary">${track.author}</div>
            </div>
            <div class="ms-auto">${track.time}</div>
            </li>` 
}
