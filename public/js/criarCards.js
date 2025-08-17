export default class CriarCards {
    criarCardsMusicas = (dados, container = false) => {
        const parteMusica = dados.musica
        console.log(dados)
        const sectionMusicas = document.querySelector(`#${container}`)
        sectionMusicas.innerHTML = ''
        parteMusica.forEach(element => {
            const faixaDeMusica = document.createElement('div')
            faixaDeMusica.classList.add('faixa-de-musica')

            const caracteristicasPrincipaisMusica = document.createElement('div')
            caracteristicasPrincipaisMusica.classList.add('caracteristicas-principais-musica')

            const imagemDaMusica = document.createElement('img')
            imagemDaMusica.classList.add('imagem-da-musica')
            imagemDaMusica.src = element.image

            const detalhesPrincipaisDaFaixa = document.createElement('div')
            detalhesPrincipaisDaFaixa.classList.add('detalhes-principais-da-faixa')

            const nomeDaMusicaFaixa = document.createElement('p')
            nomeDaMusicaFaixa.classList.add('nome-da-musica-faixa')
            nomeDaMusicaFaixa.textContent = element.name
            nomeDaMusicaFaixa.style.fontSize = 15 + 'px'

            const nomeDoArtistasFaixa = document.createElement('p')
            nomeDoArtistasFaixa.classList.add('nome-do-artistas-faixa')
            nomeDoArtistasFaixa.textContent = element.artist.toString()

            const nomeDoAlbumDuracaoDaMusica = document.createElement('div')
            nomeDoAlbumDuracaoDaMusica.classList.add('nome-do-album-duracao-da-musica')

            const nomeDoAlbum = document.createElement('p')
            nomeDoAlbum.classList.add('nome-do-album')
            nomeDoAlbum.textContent = element.album

            const duracaoDaMusica = document.createElement('p')
            duracaoDaMusica.classList.add('duracao-da-musica')
            duracaoDaMusica.textContent = "Duração"


            detalhesPrincipaisDaFaixa.appendChild(nomeDaMusicaFaixa)
            detalhesPrincipaisDaFaixa.appendChild(nomeDoArtistasFaixa)
            caracteristicasPrincipaisMusica.appendChild(imagemDaMusica)
            caracteristicasPrincipaisMusica.appendChild(detalhesPrincipaisDaFaixa)
            nomeDoAlbumDuracaoDaMusica.appendChild(nomeDoAlbum)
            nomeDoAlbumDuracaoDaMusica.appendChild(duracaoDaMusica)
            faixaDeMusica.appendChild(caracteristicasPrincipaisMusica)
            faixaDeMusica.appendChild(nomeDoAlbumDuracaoDaMusica)
            sectionMusicas.appendChild(faixaDeMusica)
        });
    }

    criarCardsArtistas = (dados, container = false) => {
        const parteArtista = dados.artista
        console.log(dados)
        const sectionArtistas = document.querySelector(`#${container}`)
        sectionArtistas.innerHTML = ''
        parteArtista.forEach(element => {
            const cardDeArtista = document.createElement('div')
            cardDeArtista.classList.add('card-de-artista')

            const fotoDoArtista = document.createElement('img')
            fotoDoArtista.classList.add('foto-do-artista')
            fotoDoArtista.src = element.image

            const nomeDoArtista = document.createElement('p')
            nomeDoArtista.classList.add('nome-do-artista')
            nomeDoArtista.textContent = element.name

            cardDeArtista.appendChild(fotoDoArtista)
            cardDeArtista.appendChild(nomeDoArtista)
            sectionArtistas.appendChild(cardDeArtista)
        });
    }

    criarCardsAlbuns = (dados, container = false) => {
        const parteAlbum = dados.album
        console.log(dados)
        const sectionAlbuns = document.querySelector(`#${container}`)
        sectionAlbuns.innerHTML = ''
        parteAlbum.forEach(element => {
            const cardDeAlbuns = document.createElement('div')
            cardDeAlbuns.classList.add('card-de-albuns')

            const fotoDoAlbum = document.createElement('img')
            fotoDoAlbum.classList.add('foto-do-album')
            fotoDoAlbum.src = element.image

            const nomeDoAlbum = document.createElement('p')
            nomeDoAlbum.classList.add('nome-do-album')
            nomeDoAlbum.textContent = element.name

            cardDeAlbuns.appendChild(fotoDoAlbum)
            cardDeAlbuns.appendChild(nomeDoAlbum)
            sectionAlbuns.appendChild(cardDeAlbuns)
        });
    }

    criarCardsPlaylists = (dados, container = false) => {
        const partePlaylists = dados.playlist
        console.log(dados)
        const sectionPlaylists = document.querySelector()
        sectionPlaylists.innerHTML = ''
        partePlaylists.forEach(element => {
            const cardDePlaylists = document.createElement('div')
            cardDePlaylists.classList.add('card-de-playlists')

            const fotoDaPlaylist = document.createElement('img')
            fotoDaPlaylist.classList.add('foto-da-playlist')
            fotoDaPlaylist.src = element.image

            const nomeDaPlaylist = document.createElement('p')
            nomeDaPlaylist.classList.add('nome-da-playlist')
            nomeDaPlaylist.textContent = element.name

            cardDePlaylists.appendChild(fotoDaPlaylist)
            cardDePlaylists.appendChild(nomeDaPlaylist)
            sectionPlaylists.appendChild(cardDePlaylists)
        });
    }
}