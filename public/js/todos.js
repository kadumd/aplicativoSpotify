export default class Todos {
    constructor() {
        this.fazerPedido()
    }

    fazerPedido = async () => {
        const pedidoPromisses = await fetch("/pedido")
        const pedido = await pedidoPromisses.json()
        console.log(pedido)
    }

    adicionarHabilidadesNaSection = (habilidades) => {
        paginaQueEstaHabilidadeTexto.textContent = ''
        paginaQueEstaHabilidadeTexto.textContent = this.paginaQueEstaHabilidade
        const containerHabilidades = document.querySelector('#container-habilidade')
        containerHabilidades.innerHTML = ''
        setTimeout(() => {
            habilidades.forEach(element => {
                const card = document.createElement('div')
                card.classList.add('card')

                const vidro = document.createElement('div')
                vidro.classList.add('vidro')

                const nomeDaHabilidade = document.createElement('h3')
                nomeDaHabilidade.classList.add('nome-da-habilidade')
                nomeDaHabilidade.textContent = element.name

                const effectResumido = document.createElement('h3')
                effectResumido.classList.add('effect-resumido')
                effectResumido.innerHTML = element.short_effect.join('<br>')

                const effect = document.createElement('h3')
                effect.classList.add('effect')
                effect.textContent = element.effect
                effect.style.display = 'none'

                card.appendChild(vidro)
                card.appendChild(nomeDaHabilidade)
                card.appendChild(effectResumido)
                card.appendChild(effect)
                containerHabilidades.appendChild(card)


                vidro.addEventListener('click', () => {
                    this.abaComOsDetalhesGeraisDosHabilidades(element.name, element.effect, element.short_effect)
                })
            });
        }, 1000);
    }
}