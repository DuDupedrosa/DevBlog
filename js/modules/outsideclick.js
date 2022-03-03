export default function outsideClick(element, callback) {
  const getHtml = document.documentElement;
  const atribute = "data-event";
  const events = ["click", "touchstart"];

  // verificando se o pai da nav
  // contém o evento de click ou não
  // caso contenha o código não é executado
  // se não contiver executamos toda a
  // funcionalidade
  function initOffMenuMobile(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(atribute);
      events.forEach((evento) => {
        getHtml.removeEventListener(evento, initOffMenuMobile);
      });
      callback();
    }
  }

  // primeiro add os eventos no html
  // mas antes verifica se contém um
  // atributo ou não, para com essa verificação
  // evite de ser add vários eventos de click
  // no html, só adiciona uma vez
  if (!element.hasAttribute(atribute)) {
    element.setAttribute(atribute, "");
    events.forEach((evento) => {
      getHtml.addEventListener(evento, initOffMenuMobile);
    });
  }
}
