import CriarCards from "./criarCards.js"
const criarCards = new CriarCards()

export default class FuncaoClick {
    constructor(model) {
        this.model = model
    }

    clickCardAlbum = async (dadosDoAlbumId) => {
        const pedido = await this.model.pedidoClicar('/clicarCardAlbum', dadosDoAlbumId)
        console.log(pedido)
        this.criarAbaDoClickAlbum(pedido)
    }

    criarAbaDoClickAlbum = (element) => {
        const sections = document.querySelectorAll('.section')
        const sectionClick = document.querySelector('#section-click')
        sectionClick.innerHTML = ''
        sections.forEach(e => {
            e.style.display = 'none'
            sectionClick.style.display = 'flex'
        });
        const tituloAlbum = document.createElement('div')
        tituloAlbum.classList.add("subtitulo")
        tituloAlbum.textContent = element['musica']['0']['name']

        const subtituloMusicas = document.createElement('div')
        subtituloMusicas.classList.add("subtituloMusicas")
        subtituloMusicas.textContent = 'Músicas'

        const divMusicasDosDadosRecebidos = document.createElement('div')
        divMusicasDosDadosRecebidos.id = "div-musicas-dos-dados-recebidos"

        sectionClick.appendChild(tituloAlbum)
        sectionClick.appendChild(subtituloMusicas)
        sectionClick.appendChild(divMusicasDosDadosRecebidos)

        criarCards.criarCardsMusicas(element, "div-musicas-dos-dados-recebidos")
    }

    clickCardPlaylist = async (dadosDoPlaylistId) => {
        const pedido = await this.model.pedidoClicar('/clicarCardPlaylist', dadosDoPlaylistId)
        console.log(pedido)
        this.criarAbaDoClickPlaylist(pedido)
    }

    criarAbaDoClickPlaylist = (element) => {
        console.log(element)
        const sections = document.querySelectorAll('.section')
        const sectionClick = document.querySelector('#section-click')
        sectionClick.innerHTML = ''
        sections.forEach(e => {
            e.style.display = 'none'
            sectionClick.style.display = 'flex'
        });
        const tituloAlbum = document.createElement('div')
        tituloAlbum.classList.add("subtitulo")
        tituloAlbum.textContent = element['musica']['0']['name']

        const subtituloMusicas = document.createElement('div')
        subtituloMusicas.classList.add("subtituloMusicas")
        subtituloMusicas.textContent = 'Músicas'

        const divMusicasDosDadosRecebidos = document.createElement('div')
        divMusicasDosDadosRecebidos.id = "div-musicas-dos-dados-recebidos"

        sectionClick.appendChild(tituloAlbum)
        sectionClick.appendChild(subtituloMusicas)
        sectionClick.appendChild(divMusicasDosDadosRecebidos)

        criarCards.criarCardsMusicas(element, "div-musicas-dos-dados-recebidos")
    }

    clickCardArtista = async (dadosDoArtistaId) => {
        const pedido = await this.model.pedidoClicar('/clicarCardArtista', dadosDoArtistaId)
        console.log(pedido)
        this.criarAbaDoClickArtista(pedido)
    }

    criarAbaDoClickArtista = (element) => {
        const sections = document.querySelectorAll('.section')
        const sectionClick = document.querySelector('#section-click')
        sectionClick.innerHTML = ''
        sections.forEach(e => {
            e.style.display = 'none'
            sectionClick.style.display = 'flex'
        });
        const tituloAlbum = document.createElement('div')
        tituloAlbum.classList.add("subtitulo")
        tituloAlbum.textContent = element['musica']['0']['name']

        const subtituloMusicas = document.createElement('div')
        subtituloMusicas.classList.add("subtituloMusicas")
        subtituloMusicas.textContent = 'Músicas'

        const divMusicasDosDadosRecebidos = document.createElement('div')
        divMusicasDosDadosRecebidos.id = "div-musicas-dos-dados-recebidos"

        const subtituloAlbum = document.createElement('div')
        subtituloAlbum.classList.add("subtituloAlbum")
        subtituloAlbum.textContent = 'Albuns'

        const divAlbumDosDadosRecebidos = document.createElement('div')
        divAlbumDosDadosRecebidos.id = "div-album-dos-dados-recebidos"

        sectionClick.appendChild(tituloAlbum)
        sectionClick.appendChild(subtituloMusicas)
        sectionClick.appendChild(divMusicasDosDadosRecebidos)
        sectionClick.appendChild(subtituloAlbum)
        sectionClick.appendChild(divAlbumDosDadosRecebidos)

        criarCards.criarCardsMusicas(element, "div-musicas-dos-dados-recebidos")
        criarCards.criarCardsAlbuns(element, "div-album-dos-dados-recebidos")
    }
}