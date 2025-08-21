export default class ControllerBack {
    constructor(model) {
        this.model = model
    }

    pedidoMusicaEArtistaTodos = async (req, res, tokens) => {
        const musicasPromisse = await this.model.pedidoMusicaTodos(tokens)
        const artistasPromisse = await this.model.pedidoArtistaTodos(tokens)
        const albunsPromisse = await this.model.pedidoAlbumTodos(tokens)
        const playlistsPromisse = await this.model.pedidoPlaylistTodos(tokens)

        const musica = []
        const artista = []
        const album = []
        const playlist = []

        const musicasRecebidas = await musicasPromisse.json();
        musicasRecebidas.tracks.items.forEach(element => {
            if (!element) return
            const { artists, id, name, album: album1, href } = element
            const artist = artists['0']['name']
            const album = album1.name
            const image = album1.images['0']['url']
            const audio = href
            musica.push({ name, artist, id, album, image, audio })
        });

        const artistasRecebidos = await artistasPromisse.json();
        artistasRecebidos.artists.items.forEach(element => {
            if (!element) return
            const { name, uri, id, followers, genres, images } = element
            const image = images['0']['url']
            artista.push({ name, uri, id, followers, genres, image })
        });

        const albunsRecebidos = await albunsPromisse.json();
        console.log(albunsRecebidos)
        albunsRecebidos.albums.items.forEach(element => {
            if (!element) return
            const { name, uri, id, images } = element
            const image = images['0']['url']
            album.push({ name, uri, id, image })
        });

        const playlistsRecebidos = await playlistsPromisse.json();
        playlistsRecebidos.playlists.items.forEach(element => {
            if (!element) return
            const { name, uri, id, images } = element
            const image = images['0']['url']
            playlist.push({ name, uri, id, image }) //quando sobrar só esse
        });

        res.end(JSON.stringify({ musica, artista, album, playlist }))  
    } 

    pedidoMusica = async (req, res, tokens) => {
        const musicasPromisse = await this.model.pedidoMusica(tokens)

        const musica = []

        const musicasRecebidas = await musicasPromisse.json();
        musicasRecebidas.tracks.items.forEach(element => {
            if (!element) return
            const { artists, id, name, album: album1, href } = element
            const artist = artists['0']['name']
            const album = album1.name
            const image = album1.images['0']['url']
            const audio = href
            musica.push({ name, artist, id, album, image, audio })
        });

        res.end(JSON.stringify({ musica }))
    }

    pedidoArtista = async (req, res, tokens) => {
        const artistasPromisse = await this.model.pedidoArtista(tokens)
        const artista = []

        const artistasRecebidos = await artistasPromisse.json();
        artistasRecebidos.artists.items.forEach(element => {
            if (!element) return
            const { name, uri, id, followers, genres, images } = element
            const image = images['0']['url']
            artista.push({ name, uri, id, followers, genres, image })
        });

        res.end(JSON.stringify({ artista }))
    }

    pedidoAlbuns = async (req, res, tokens) => {
        const albunsPromisse = await this.model.pedidoAlbuns(tokens)
        const album = []

        const albunsRecebidos = await albunsPromisse.json();
        albunsRecebidos.albums.items.forEach(element => {
            if (!element) return
            const { name, uri, id, images } = element
            const image = images['0']['url']
            album.push({ name, uri, id, image })
        });

        res.end(JSON.stringify({ album }))
    }

    pedidoPlaylists = async (req, res, tokens) => {
        const playlistsPromisse = await this.model.pedidoPlaylists(tokens)
        const playlist = []

        const playlistsRecebidos = await playlistsPromisse.json();
        playlistsRecebidos.playlists.items.forEach(element => {
            if (!element) return
            const { name, uri, id, images } = element
            const image = images['0']['url']
            playlist.push({ name, uri, id, image }) //quando sobrar só esse
        });

        res.end(JSON.stringify({ playlist }))
    }

    fazerPesquisa = async (req, res, tokens) => {
        req.on('data', async (body) => {
            const digitado = JSON.parse(body);
            if(digitado === '') return

            const dadosPromisse = await this.model.fazerPesquisa(tokens, digitado)

            const dados = await dadosPromisse.json();

            const musica = []
            const artista = []
            const album = []
            const playlist = []

            dados.tracks.items.forEach(element => {
                if (!element) return
                const { artists, id, name, album: album1, href } = element
                const artist = artists['0']['name']
                const album = album1.name
                const image = album1.images['0']['url']
                const audio = href
                musica.push({ name, artist, id, album, image, audio })
            });

            dados.artists.items.forEach(element => {
                if (!element) return
                const { name, uri, id, followers, genres, images } = element
                if(!images['0']) return
                const image = images['0']['url']
                artista.push({ name, uri, id, followers, genres, image })
            }); 

            dados.albums.items.forEach(element => {
                if (!element) return
                const { name, uri, id, images } = element
                const image = images['0']['url']
                album.push({ name, uri, id, image })
            });

            dados.playlists.items.forEach(element => {
                if (!element) return
                const { name, uri, id, images } = element
                const image = images['0']['url']
                playlist.push({ name, uri, id, image })
            });

            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ musica, artista, album, playlist }))
        })
    }

    clicarCardArtista = async (req, res, tokens) => {
        req.on('data', async (body) => {
            const idDoArtista = JSON.parse(body);

            const dadosPromisseMusicas = await this.model.clicarCardArtistaParteMusica(tokens, idDoArtista)
            const dadosMusicas = await dadosPromisseMusicas.json();

            const dadosPromisseAlbuns = await this.model.clicarCardArtistaParteAlbum(tokens, idDoArtista)
            const dadosAlbuns = await dadosPromisseAlbuns.json();

            const musica = []
            const album = []

            dadosMusicas.tracks.forEach(element => {
                if (!element) return
                const { artists, id, name, album: album1, href } = element
                const artist = artists['0']['name']
                const audio = href
                musica.push({ artist, id, audio, name })
            });

            dadosAlbuns.items.forEach(element => {
                if (!element) return
                const { name, uri, id, images } = element
                const image = images['0']['url']
                album.push({ name, uri, id, image })
            });


            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ musica, album }))
        })
    }

    clicarCardAlbum = async (req, res, tokens) => {
        req.on('data', async (body) => {
            const idDoAlbum = JSON.parse(body);

            const dadosPromisse = await this.model.clicarCardAlbum(tokens, idDoAlbum)
            const dados = await dadosPromisse.json();

            const musica = []

            dados.tracks.items.forEach(element => {
                if (!element) return
                const { artists, id, name, album: album1, href } = element
                const artist = artists['0']['name']
                const audio = href
                const { name: album, images } = dados
                const image = images['0']['url']
                musica.push({ album, artist, id, audio, name, image })
            });

            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ musica }))
        })
    }

    clicarCardPlaylist = async (req, res, tokens) => {
        req.on('data', async (body) => {
            const idDaPlaylist = JSON.parse(body);

            const dadosPromisse = await this.model.clicarCardPlaylist(tokens, idDaPlaylist)
            const dados = await dadosPromisse.json();

            const musica = []

            dados.tracks.items.forEach(element => {
                if (!element) return
                const { artists, id, name, album: album1, href } = element.track
                const artist = artists['0']['name']
                const audio = href
                const image = album1["images"]['0']['url']
                const album = album1.name
                musica.push({ album, artist, id, audio, name, image })
            });

            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ musica }))
        })
    }
}