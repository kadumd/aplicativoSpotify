export default class Pesquisa {
    constructor(criarCards, model) {
        this.criarCards = criarCards
        this.model = model
        this.pesquisarEventListener()
    }
    pesquisaInput = document.querySelector('#barraDePesquisa')

    pesquisarEventListener = () => {
        this.pesquisaInput.addEventListener('keydown', (e) => {
            const tecla = e.key
            if (tecla === 'Enter') {
                this.pesquisar()
            }
        })
    }

    pesquisar = async () => {
        const pesquisaValor = this.pesquisaInput.value
        const response = await this.model.fazerPesquisa(pesquisaValor)

        const sections = document.querySelectorAll('.section')
        const sectionPesquisa = document.querySelector('#section-pesquisa')
        const nav = document.querySelector('nav')
        sections.forEach(e => {
            e.style.display = 'none'
            nav.style.display = 'flex'
            sectionPesquisa.style.display = 'flex'
        });
        this.adicionarMusicasNaAbaPesquisa(response, "resultadoDaPesquisaMusicas")
        this.adicionarArtistasNaAbaPesquisa(response, "resultadoDaPesquisaArtistas")
        this.adicionarAlbunsNaAbaPesquisa(response, "resultadoDaPesquisaAlbuns")
        this.adicionarPlaylistsNaAbaPesquisa(response, "resultadoDaPesquisaPlaylists")
    }

    adicionarMusicasNaAbaPesquisa = async (dados, idConteiner) => {
        this.criarCards.criarCardsMusicas(dados, idConteiner)
    }

    adicionarArtistasNaAbaPesquisa = async (dados, idConteiner) => {
        this.criarCards.criarCardsArtistas(dados, idConteiner)
    }

    adicionarAlbunsNaAbaPesquisa = async (dados, idConteiner) => {
        this.criarCards.criarCardsAlbuns(dados, idConteiner)
    }

    adicionarPlaylistsNaAbaPesquisa = async (dados, idConteiner) => {
        this.criarCards.criarCardsPlaylists(dados, idConteiner)
    }
}