//importações
import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import querystring from "querystring"
import { console } from "inspector"
import ModelBack from "./modelBack.js"
const modelBack = new ModelBack()
import ControllerBack from "./controllerBack.js"
const controllerBack = new ControllerBack(modelBack)

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
    controllerBack.pedidoMusicaEArtistaTodos(req, res, tokens)
})

app.get('/pedidoMusica', async (req, res) => {
    controllerBack.pedidoMusica(req, res, tokens)
})

app.get('/pedidoArtista', async (req, res) => {
    controllerBack.pedidoArtista(req, res, tokens)
})

app.get('/pedidoAlbuns', async (req, res) => {
    controllerBack.pedidoAlbuns(req, res, tokens)
})

app.get('/pedidoPlaylists', async (req, res) => {
    controllerBack.pedidoPlaylists(req, res, tokens)
})

//pesquisa

app.post('/fazerPesquisa', async (req, res) => {
    controllerBack.fazerPesquisa(req, res, tokens)
})

//sistema de click
app.post('/clicarCardArtista', async (req, res) => {
    controllerBack.clicarCardArtista(req, res, tokens)
})

app.post('/clicarCardAlbum', async (req, res) => {
    controllerBack.clicarCardAlbum(req, res, tokens)
})

app.post('/clicarCardPlaylist', async (req, res) => {
    controllerBack.clicarCardPlaylist(req, res, tokens)
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})