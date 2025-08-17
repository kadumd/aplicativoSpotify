export default class Controller {
    constructor(model, criarCards) {
        this.model = model
        this.criarCards = criarCards
        this.pegarArtistasEMusicasAbaTodos()
        this.pegarMusicasAbaMusicas()
        this.pegarArtistasAbaArtistas()
        this.pegarAlbunsAbaAlbuns()
        // this.pegarPlaylistsAbaPlaylists()
    }
    pegarArtistasEMusicasAbaTodos = async () => {
        const dados = await this.model.receberDadosDasMusicasEArtistasAbaTodos()
        this.criarCards.criarCardsMusicas(dados, "lista-de-musicas")
        this.criarCards.criarCardsArtistas(dados, "lista-de-artistas")
    }

    pegarMusicasAbaMusicas = async () => {
        const dados = await this.model.receberDadosDasMusicasAbaMusicas()
        this.criarCards.criarCardsMusicas(dados, "section-musicas")
    }

    pegarArtistasAbaArtistas = async () => {
        const dados = await this.model.receberDadosDosArtistasAbaArtistas()
        this.criarCards.criarCardsArtistas(dados, "section-artistas")
    }

    pegarAlbunsAbaAlbuns = async () => {
        const dados = await this.model.receberDadosDosAlbunsAbaAlbuns()        
        this.criarCards.criarCardsAlbuns(dados, "section-albuns")
    }

    pegarPlaylistsAbaPlaylists = async () => {
        const dados = await this.model.receberDadosDasPlaylistsAbaPlaylists()
        this.criarCards.criarCardsPlaylists(dados, "section-playlists")
    }
}