import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(boxMenu, button, listMenu, classe) {
    this.boxMenu = document.querySelector(boxMenu);
    this.button = document.querySelector(button);
    this.listMenu = document.querySelector(listMenu);
    this.classe = classe;
    this.events = ["click", "touchstart"];

    // dando o bind para redirecionar o this
    this.onMenuMobile = this.onMenuMobile.bind(this);
  }

  // simplesmente add uma classe que ativa
  // o menu mobile e após, ativamos callback
  // que faz toda a verificação do click
  // outside para garantir, que somente, quando
  // clicar fora, vai ocorrer a ação
  onMenuMobile(event) {
    event.preventDefault();
    this.button.classList.add(this.classe);
    this.listMenu.classList.add(this.classe);
    outsideClick(this.boxMenu, () => {
      this.button.classList.remove(this.classe);
      this.listMenu.classList.remove(this.classe);
    });
  }

  // add event no button do menu
  addEventButton() {
    this.events.forEach((evento) => {
      this.button.addEventListener(evento, this.onMenuMobile);
    });
  }

  init() {
    if (this.button && this.boxMenu) {
      this.addEventButton();
    }
    return this;
  }
}
