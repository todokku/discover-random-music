class Releases{
    constructor(){
        this.client_key = 'XVNpCNdnFlCtmNPQhwec';
        this.secret_key = 'eJIgIRqTECknluHUTeDIJtnYwtxPpexf'
        this.per_page = 15;
        this.page = 1;
    }
    async getArtist(artist){
        const releasesResponse = await fetch(`https://api.discogs.com/artists/${artist}/releases?per_page=${this.per_page}&page=${this.page}`)

        const releases = await releasesResponse.json();
        return releases;
    }
}