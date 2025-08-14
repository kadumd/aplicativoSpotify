//importações
import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import querystring from "querystring"

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

    const url = 'https://accounts.spotify.com/api/token';
    const payload = {
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
    }

    const { access_token, refresh_token } = await fetch(url, payload)
    tokens.access_token = access_token
    tokens.refresh_token = refresh_token

    res.redirect('./app.html')
})
/////////////////////////////////////////////////////////////////////////////////////
app.get('/pedido', async (req, res) => {
    const scope = 'user-read-private user-read-email';// esse é o pedido que a gente quer, a gente envia isso pra pedir permissão pra usar os dados do client

    const url = 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg'
    const payload = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
        }
    }

    const ola = await fetch(url, payload)
    console.log(ola)
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})