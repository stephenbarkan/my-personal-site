const body = document.querySelector("body");
const activeApplet = body.getAttribute("data-applet");
const applets = document.querySelectorAll("[data-js='applet']");

applets.forEach((applet) => {
  applet.addEventListener("click", () => {
    const thisApplet = applet.getAttribute("data-applet");
    if (thisApplet !== activeApplet) {
      body.setAttribute("data-applet", thisApplet);
    } else {
      return;
    }
  });
});
