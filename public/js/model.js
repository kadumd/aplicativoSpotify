export default class Model {
    receberDadosDasMusicasEArtistasAbaTodos = async () => {
        const pedidoMusicaEArtistaTodosPromisse = await fetch('/pedidoMusicaEArtistaTodos')
        const pedidoMusicaEArtistaTodos = await pedidoMusicaEArtistaTodosPromisse.json()

        return pedidoMusicaEArtistaTodos
    }

    receberDadosDasMusicasAbaMusicas = async() => {
        const pedidoMusicaPromisse = await fetch('/pedidoMusica')
        const pedidoMusica = await pedidoMusicaPromisse.json()

        return pedidoMusica
    }

    receberDadosDosArtistasAbaArtistas = async() => {
        const pedidoArtistaPromisse = await fetch('/pedidoArtista')
        const pedidoArtistas = await pedidoArtistaPromisse.json()

        return pedidoArtistas
    }

    receberDadosDosAlbunsAbaAlbuns = async() => {
        const pedidoAlbunsPromisse = await fetch('/pedidoAlbuns')
        const pedidoAlbuns = await pedidoAlbunsPromisse.json()

        return pedidoAlbuns
    }

    receberDadosDasPlaylistsAbaPlaylists = async() => {
        const pedidoPlaylistsPromisse = await fetch('/pedidoPlaylists')
        const pedidoPlaylists = await pedidoPlaylistsPromisse.json()

        return pedidoPlaylists
    }
}