//importações
import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import querystring from "querystring"
import { console } from "inspector"

const __filename = fileURLToPath(import.meta.url)//dirname
const __dirname = path.dirname(__filename)//dirname 
const PORT = 8080//número da porta
const app = express()//executa o express
const client_secret = '180d2f1825964e27928ae8a71d63deaa';//esse é o client secret, o meu id naquele site do spotify, ninguém pode ter acesso a ele além de mim
const client_id = '604aceaaeef840178bfa2e0d856e6b61';//esse é o id do client, esse outra pessoa pode ter acesso
const redirect_uri = 'http://127.0.0.1:8080/redirecionamentoSpotify';
const tokens = {}//essa const é pra salvar o token pra que a pessoa não precise ficar fazendo login direto 

app.use(express.static(path.join(__dirname, "../public")))//esse endpoint entrega todas as arquivos pedidos que está na pasta public

//esse endpoint é chamado quando ele aperta no botao entrar, que assim faz login
app.get('/login', function (req, res) {
    const scope = 'user-read-private user-read-email';// esse é o pedido que a gente quer, a gente envia isso pra pedir permissão pra usar os dados do client

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
        }));
});

app.get('/redirecionamentoSpotify', async (req, res) => {
    const code = req.query.code || null;

    const pedido = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
        },
        body: new URLSearchParams({
            code: code,
            redirect_uri: redirect_uri,
            grant_type: 'authorization_code'
        })
    })

    const { access_token, refresh_token } = await pedido.json()
    tokens.access_token = access_token
    tokens.refresh_token = refresh_token

    res.redirect('./app.html')
})

//entregas dos menus

app.get('/pedidoMusicaEArtistaTodos', async (req, res) => {
    console.log(tokens)
    const musicasPromisse = await fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track&limit=3', {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + tokens.access_token
        }
    })
    const artistasPromisse = await fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=artist&limit=5', {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + tokens.access_token
        }
    })

    const musica = []
    const artista = []

    const musicasRecebidas = await musicasPromisse.json();
    musicasRecebidas.tracks.items.forEach(element => {
        const { artists, id, name, album: album1, href } = element
        const artist = artists['0']['name']
        const album = album1.name
        const image = album1.images['0']['url']
        const audio = href
        musica.push({ name, artist, id, album, image, audio })
    });

    const artistasRecebidos = await artistasPromisse.json();
    artistasRecebidos.artists.items.forEach(element => {
        const { name, uri, id, followers, genres, images } = element
        const image = images['0']['url']
        artista.push({ name, uri, id, followers, genres, image })
    });

    console.log(musica, artista);
    res.end(JSON.stringify({ musica, artista }))
})

app.get('/pedidoMusica', async (req, res) => {
    console.log(tokens)
    const musicasPromisse = await fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track&limit=8', {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + tokens.access_token
        }
    })

    const musica = []

    const musicasRecebidas = await musicasPromisse.json();
    musicasRecebidas.tracks.items.forEach(element => {
        const { artists, id, name, album: album1, href } = element
        const artist = artists['0']['name']
        const album = album1.name
        const image = album1.images['0']['url']
        const audio = href
        musica.push({ name, artist, id, album, image, audio })
    });

    console.log(musica);
    res.end(JSON.stringify({ musica }))
})

app.get('/pedidoArtista', async (req, res) => {
    console.log(tokens)
    const artistasPromisse = await fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=artist&limit=18', {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + tokens.access_token
        }
    })
    const artista = []

    const artistasRecebidos = await artistasPromisse.json();
    artistasRecebidos.artists.items.forEach(element => {
        const { name, uri, id, followers, genres, images } = element
        const image = images['0']['url']
        artista.push({ name, uri, id, followers, genres, image })
    });

    console.log(artista);
    res.end(JSON.stringify({ artista }))
})

app.get('/pedidoAlbuns', async (req, res) => {
    console.log(tokens)
    const albunsPromisse = await fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album&limit=18', {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + tokens.access_token
        }
    })
    const album = []

    const albunsRecebidos = await albunsPromisse.json();
    albunsRecebidos.albums.items.forEach(element => {
        const { name, uri, id, images } = element
        const image = images['0']['url']
        album.push({ name, uri, id, image })
    });

    console.log(album);
    res.end(JSON.stringify({ album }))
})

app.get('/pedidoPlaylists', async (req, res) => {
    const playlistsPromisse = await fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=playlist&limit=18', {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + tokens.access_token
        }
    })
    const playlist = []

    const playlistsRecebidos = await playlistsPromisse.json();
    playlistsRecebidos.playlists.items.forEach(element => {
        if (!element) return
        const { name, uri, id, images } = element
        const image = images['0']['url']
        playlist.push({ name, uri, id, image }) //quando sobrar só esse
    });

    res.end(JSON.stringify({ playlist }))
})

//pesquisa

app.post('/fazerPesquisa', async (req, res) => {
    req.on('data', async (body) => {
        const digitado = JSON.parse(body);

        console.log(digitado)
        const dadosPromisse = await fetch(`https://api.spotify.com/v1/search?q=${digitado}&type=album%2Cplaylist%2Cartist%2Ctrack`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
        const dados = await dadosPromisse.json();

        const musica = []
        const artista = []
        const album = []
        const playlist = []

        dados.tracks.items.forEach(element => {
            const { artists, id, name, album: album1, href } = element
            const artist = artists['0']['name']
            const album = album1.name
            const image = album1.images['0']['url']
            const audio = href
            musica.push({ name, artist, id, album, image, audio })
        });

        dados.artists.items.forEach(element => {
            const { name, uri, id, followers, genres, images } = element
            const image = images['0']['url']
            artista.push({ name, uri, id, followers, genres, image })
        });

        dados.albums.items.forEach(element => {
            const { name, uri, id, images } = element
            const image = images['0']['url']
            album.push({ name, uri, id, image })
        });

        dados.playlists.items.forEach(element => {
            if (!element) return
            const { name, uri, id, images } = element
            const image = images['0']['url']
            playlist.push({ name, uri, id, image }) //quando sobrar só esse
        });
        //falta playlist
        console.log(dados);
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ musica, artista, album, playlist }))
    })
})

//sistema de click
app.post('/clicarCardArtista', async (req, res) => {
    req.on('data', async (body) => {
        const idDoAlbum = JSON.parse(body);

        const dadosPromisseMusicas = await fetch(`https://api.spotify.com/v1/artists/${idDoAlbum}/top-tracks`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
        const dadosMusicas = await dadosPromisseMusicas.json();

        const dadosPromisseAlbuns = await fetch(`https://api.spotify.com/v1/artists/${idDoAlbum}/albums`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
        const dadosAlbuns = await dadosPromisseAlbuns.json();

        const musica = []
        const album = []

        dadosMusicas.tracks.forEach(element => {
            const { artists, id, name, album: album1, href } = element
            const artist = artists['0']['name']
            const audio = href
            musica.push({ artist, id, audio, name })
        });

        dadosAlbuns.items.forEach(element => {
            const { name, uri, id, images } = element
            const image = images['0']['url']
            album.push({ name, uri, id, image })
        });


        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ musica, album }))
    })
})

app.post('/clicarCardAlbum', async (req, res) => {
    req.on('data', async (body) => {
        const idDoAlbum = JSON.parse(body);

        const dadosPromisse = await fetch(`https://api.spotify.com/v1/albums/${idDoAlbum}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
        const dados = await dadosPromisse.json();

        const musica = []

        dados.tracks.items.forEach(element => {
            const { artists, id, name, album: album1, href } = element
            const artist = artists['0']['name']
            const audio = href
            const { name: album, images } = dados
            const image = images['0']['url']
            musica.push({ album, artist, id, audio, name, image })
        });

        console.log(dados);
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ musica }))
    })
})

app.post('/clicarCardPlaylist', async (req, res) => {
    req.on('data', async (body) => {
        const idDaPlaylist = JSON.parse(body);

        const dadosPromisse = await fetch(`https://api.spotify.com/v1/playlists/${idDaPlaylist}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + tokens.access_token
            }
        })
        const dados = await dadosPromisse.json();

        const musica = []

        dados.tracks.items.forEach(element => {
            const { artists, id, name, album: album1, href } = element.track
            const artist = artists['0']['name']
            const audio = href
            const image = album1["images"]['0']['url']
            const album = album1.name
            musica.push({ album, artist, id, audio, name, image })
        });

        console.log(dados);
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ musica }))
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})