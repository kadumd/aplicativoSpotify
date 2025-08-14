export default class MudancaDeAba {
    constructor() {
        this.detectarClicksEMudancasDeAbas()
    }
    home = document.querySelector('#iconeDeCasa')
    abaTodos = document.querySelector('#aba-todos')
    abaMusicas = document.querySelector('#aba-musicas')
    abaArtistas = document.querySelector('#aba-artistas')
    abaAlbuns = document.querySelector('#aba-albuns')
    abaPlaylists = document.querySelector('#aba-playlists')//butoes aba, acaba

    nav = document.querySelector('nav')
    abas = document.querySelectorAll('.abas')

    sectionInicial = document.querySelector('#section-inicial')
    sectionTodos = document.querySelector('#section-todos')
    sectionMusicas = document.querySelector('#section-musicas')
    sectionArtistas = document.querySelector('#section-artistas')
    sectionAlbuns = document.querySelector('#section-albuns')
    sectionPlaylists = document.querySelector('#section-playlists')
    sections = document.querySelectorAll('.section')    

    detectarClicksEMudancasDeAbas = () => {
        this.home.addEventListener('click', this.irParaOInicioOuAbaTodos)
        this.abaTodos.addEventListener('click', this.irParaOInicioOuAbaTodos)
        this.abaMusicas.addEventListener('click', this.irParaAbaMusicas)
        this.abaArtistas.addEventListener('click', this.irParaAbaArtistas)
        this.abaAlbuns.addEventListener('click', this.irParaAbaAlbuns)
        this.abaPlaylists.addEventListener('click', this.irParaAbaPlaylists)
    }

    irParaOInicioOuAbaTodos = () => {
        this.sections.forEach(e => {
            e.style.display = 'none'
            this.nav.style.display = 'flex'
            this.sectionTodos.style.display = 'flex'
        });
        this.abas.forEach(e => {
            e.style.color = 'white'
            e.style.backgroundColor = 'rgb(59, 59, 59)'
            this.abaTodos.style.color = 'rgb(59, 59, 59)'
            this.abaTodos.style.backgroundColor = 'white'
        });
    }

    irParaAbaMusicas = () => {
        this.sections.forEach(e => {
            e.style.display = 'none'
            this.sectionMusicas.style.display = 'grid'//flex, eu usei o grid pra resolver o problema do tamanho das divs mas tenho que ter cuidado pra isso não influenciar muito
        });
        this.abas.forEach(e => {
            e.style.color = 'white'
            e.style.backgroundColor = 'rgb(59, 59, 59)'
            this.abaMusicas.style.color = 'rgb(59, 59, 59)'
            this.abaMusicas.style.backgroundColor = 'white'
        });
    }

    irParaAbaArtistas = () => {
        this.sections.forEach(e => {
            e.style.display = 'none'
            this.sectionArtistas.style.display = 'flex'
        });
        this.abas.forEach(e => {
            e.style.color = 'white'
            e.style.backgroundColor = 'rgb(59, 59, 59)'
            this.abaArtistas.style.color = 'rgb(59, 59, 59)'
            this.abaArtistas.style.backgroundColor = 'white'
        });
    }

    irParaAbaAlbuns = () => {
        this.sections.forEach(e => {
            e.style.display = 'none'
            this.sectionAlbuns.style.display = 'flex'
        });
        this.abas.forEach(e => {
            e.style.color = 'white'
            e.style.backgroundColor = 'rgb(59, 59, 59)'
            this.abaAlbuns.style.color = 'rgb(59, 59, 59)'
            this.abaAlbuns.style.backgroundColor = 'white'
        });
    }
    
    irParaAbaPlaylists = () => {
        this.sections.forEach(e => {
            e.style.display = 'none'
            this.sectionPlaylists.style.display = 'flex'
        });
        this.abas.forEach(e => {
            e.style.color = 'white'
            e.style.backgroundColor = 'rgb(59, 59, 59)'
            this.abaPlaylists.style.color = 'rgb(59, 59, 59)'
            this.abaPlaylists.style.backgroundColor = 'white'
        });
    }
}