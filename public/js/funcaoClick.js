import CriarCards from "./criarCards.js"
const criarCards = new CriarCards()

export default class FuncaoClick {
    clickCardAlbum = async (dadosDoAlbumId) => {
        fetch('/clicarCardAlbum', {
            method: 'POST',
            body: JSON.stringify(dadosDoAlbumId)
        }).then(r => r.json()).then(e => {
            this.criarAbaDoClickAlbum(e)
        })
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
        fetch('/clicarCardPlaylist', {
            method: 'POST',
            body: JSON.stringify(dadosDoPlaylistId)
        }).then(r => r.json()).then(e => {
            this.criarAbaDoClickPlaylist(e)
        })
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
        fetch('/clicarCardArtista', {
            method: 'POST',
            body: JSON.stringify(dadosDoArtistaId)
        }).then(r => r.json()).then(e => {
            this.criarAbaDoClickArtista(e)
        })
    }

    criarAbaDoClickArtista = (element) => {
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

        const divAlbumDosDadosRecebidos = document.createElement('div')
        divAlbumDosDadosRecebidos.id = "div-album-dos-dados-recebidos"

        sectionClick.appendChild(tituloAlbum)
        sectionClick.appendChild(subtituloMusicas)
        sectionClick.appendChild(divMusicasDosDadosRecebidos)
        sectionClick.appendChild(divAlbumDosDadosRecebidos)

        criarCards.criarCardsMusicas(element, "div-musicas-dos-dados-recebidos")
        criarCards.criarCardsAlbuns(element, "div-album-dos-dados-recebidos")
    }
}