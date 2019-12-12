const releases = new Releases;
const ui = new UI;


const searchArtist = document.getElementById('searchArtist')
const albumDetails = document.querySelector('.moreDetails')

searchArtist.addEventListener('keyup', e => {
    const userSearch = e.target.value;
    if(userSearch !== ''){
        setTimeout(() => {
            releases.getArtist(userSearch)
            .then(data => {
                if(data.message === 'Artist not found.'){
                    ui.showAlert('Artist not found', 'alert alert-danger')
                } else {
                    ui.getReleases(data.releases);
                }
            })
        }, 500)
    }  else {
        //clear profile
        ui.clearProfile();
    }
});









