class UI{
    constructor(){
        this.release = document.getElementById('artistReleases');
    }

getReleases(artist){
    let output = '';
    artist.forEach(album =>{
        output  += `
    <div class="col-sm">
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                        <img class="img-fluid" src="https://www.electronicbeats.net/app/uploads/2015/03/discogs1.png"/>
                        <h5 class="card-title">${album.title}</h5>
                        <p class="card-text"><strong>${album.artist}</strong></p>
                        <p class="card-text">${album.year}</p>
                        <a target="_blank"class="btn btn-info btn-sm" href="https://www.youtube.com/results?search_query=${album.artist} - ${album.title}">Go to Youtube and listen</a>
                </div>
        </div>
    </div>
        `
    })
    document.getElementById('artistReleases').innerHTML = output;
    }

    //Show Alerts
showAlert(msg, className){
            //clear any remaining alerts
            this.clearAlert();
            //create a div
            const div = document.createElement('div');
            //add class
            div.className = className;
            //add text
            div.appendChild(document.createTextNode(msg));
            //get parent
            const container = document.querySelector('.jumbotron');
            //GET THE search box
            const search = document.querySelector('.userSearch');
            //insert the alert
            container.insertBefore(div, search)
             //timeout after 3 secs    
             setTimeout(() => {
                this.clearAlert()
             }, 3000);
        }
    
        clearAlert(){
            const currentAlert = document.querySelector('.alert');
            if(currentAlert){
                currentAlert.remove();
            }
        }
    }



