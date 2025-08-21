export default class ModelBack {
    pedidoMusicaTodos = async (tokens) => {
        return fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track&limit=10', {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
    } 
 
    pedidoArtistaTodos = (tokens) => {
        return fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=artist&limit=5', {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
    }

    pedidoAlbumTodos = (tokens) => {
        return fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album&limit=5', {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
    }

    pedidoPlaylistTodos = (tokens) => {
        return fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=playlist&limit=8', {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
    }

    pedidoMusica = async (tokens) => {
        return fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track&limit=8', {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
    }

    pedidoArtista = async (tokens) => {
        return fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=artist&limit=18', {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
    }

    pedidoAlbuns = async (tokens) => {
        return fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album&limit=18', {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
    }

    pedidoPlaylists = async (tokens) => {
        return fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=playlist&limit=18', {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
    }

    fazerPesquisa = async (tokens, digitado) => {
        return fetch(`https://api.spotify.com/v1/search?q=${digitado}&type=album%2Cplaylist%2Cartist%2Ctrack`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
    }

    clicarCardArtistaParteMusica = async (tokens, idDoArtista) => {
        return fetch(`https://api.spotify.com/v1/artists/${idDoArtista}/top-tracks`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
    }

    clicarCardArtistaParteAlbum = async (tokens, idDoArtista) => {
        return fetch(`https://api.spotify.com/v1/artists/${idDoArtista}/albums`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
    }

    clicarCardAlbum = async (tokens, idDoAlbum) => {
        return fetch(`https://api.spotify.com/v1/albums/${idDoAlbum}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
    }

    clicarCardPlaylist = async (tokens, idDaPlaylist) => {
        return fetch(`https://api.spotify.com/v1/playlists/${idDaPlaylist}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
    }
} 