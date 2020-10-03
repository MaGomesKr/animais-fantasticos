// Navegação por tab
let isActive = 'ativo'

function startTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    //Está selecionando todas as tags li que estão dentro de 'js-tabmenu'(no HTML)
    //e atribuindo a variável 'tabMenu'

    const tabContent = document.querySelectorAll('.js-tabcontent section');
    //Está selecionando todas as tags li que estão dentro de 'js-tabcontent'(no HTML)
    // e atribuindo a variável 'tabContent'
  
    if(tabMenu.length && tabContent.length) {

      tabContent[0].classList.add(isActive);
    //Está adicionando a classe 'ativo' no primeiro item da variável 'tabContent'(primeira 'section')

    function activeTab(index) {
        //adicionar classe de acordo com o número do item(argumento 'index')
        tabContent.forEach((section) => {
          section.classList.remove(isActive);
        });
        tabContent[index].classList.add(isActive);
      }
  
      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
          activeTab(index);
        });
      });
    }
  }
  startTabNav();
    // Collapse down the hiden informations.

  function startAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    let isActive = 'ativo';
    
    if(accordionList.length) {
      accordionList[0].classList.add(isActive);
      accordionList[0].nextElementSibling.classList.add(isActive);
  
      function activeAccordion() {
        this.classList.toggle(isActive);
        this.nextElementSibling.classList.toggle(isActive);
      }
  
      accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
      });
    }
  }
  startAccordion();
  
  //Smooth internal link(why is it not working?) - probably chrome update
  function startScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
      });
  
      // forma alternativa
      // const topo = section.offsetTop;
      // window.scrollTo({
      //   top: topo,
      //   behavior: 'smooth',
      // });
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
  startScrollSuave();
  

  // Fade in to the right when scrolling down
  function startAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length) {
      const windowMetade = window.innerHeight * 0.7;
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;
          if(isSectionVisible)
            section.classList.add('ativo');
          else 
            section.classList.remove('ativo');
        })
      }
  
      animaScroll();
  
      window.addEventListener('scroll', animaScroll);
    }
  }
  startAnimacaoScroll();