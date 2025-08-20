export default class Model {
    receberDadosDasMusicasEArtistasAbaTodos = async () => {
        const pedidoMusicaEArtistaTodosPromisse = await fetch('/pedidoMusicaEArtistaTodos')
        const pedidoMusicaEArtistaTodos = await pedidoMusicaEArtistaTodosPromisse.json()

        return pedidoMusicaEArtistaTodos
    }

    receberDadosDasMusicasAbaMusicas = async () => {
        const pedidoMusicaPromisse = await fetch('/pedidoMusica')
        const pedidoMusica = await pedidoMusicaPromisse.json()

        return pedidoMusica
    }

    receberDadosDosArtistasAbaArtistas = async () => {
        const pedidoArtistaPromisse = await fetch('/pedidoArtista')
        const pedidoArtistas = await pedidoArtistaPromisse.json()

        return pedidoArtistas
    }

    receberDadosDosAlbunsAbaAlbuns = async () => {
        const pedidoAlbunsPromisse = await fetch('/pedidoAlbuns')
        const pedidoAlbuns = await pedidoAlbunsPromisse.json()

        return pedidoAlbuns
    }

    receberDadosDasPlaylistsAbaPlaylists = async () => {
        const pedidoPlaylistsPromisse = await fetch('/pedidoPlaylists')
        const pedidoPlaylists = await pedidoPlaylistsPromisse.json()

        return pedidoPlaylists
    }

    //click
    pedidoClicar = async (pedido, dadosDoArtistaId) => {
        console.log(dadosDoArtistaId)
        return fetch(`${pedido}`, {
            method: 'POST',
            body: JSON.stringify(dadosDoArtistaId)
        }).then(r => r.json()).then(e => {
            console.log(e)
            return e
        })
    }

    fazerPesquisa = (pesquisaValor) => {
        console.log(pesquisaValor)
        return fetch('/fazerPesquisa', {
            method: 'POST',
            body: JSON.stringify(pesquisaValor)
        }).then(r => r.json()).then(response => {
            return response
        })
    }
}