// Navegação por tab
function startTabNav() {
    const isActive = 'ativo'

    const tabMenu = document.querySelectorAll('.js-tabmenu li')

    //Está selecionando todas as tags li que estão dentro de 'js-tabmenu'(no HTML)
    //e atribuindo a variável 'tabMenu'

    const tabContent = document.querySelectorAll('.js-tabcontent section') 

    //Está selecionando todas as tags li que estão dentro de 'js-tabcontent'(no HTML)
    // e atribuindo a variável 'tabContent'

    tabContent[0].classList.add(isActive)

    //Está adicionando a classe 'ativo' no primeiro item da variável 'tabContent'(primeira 'section')

    //adicionar classe de acordo com o número do item

    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove(isActive)
        });
        tabContent[index].classList.add(isActive)
    }
    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index)
        })
    })

}

startTabNav()

function startAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt') //selecionar o titulo da lista
    if(accordionList.length) {
        accordionList[0].classList.add('ativo')
        accordionList[0].nextElementSibling.classList.add('ativo')

            function activeAccordion() {
                this.classList.toggle('ativo')
                this.nextElementSibling.classList.toggle('ativo')
            }
            accordionList.forEach((item) => {
                item.addEventListener('click', activeAccordion)
            })
    }
}

startAccordion()