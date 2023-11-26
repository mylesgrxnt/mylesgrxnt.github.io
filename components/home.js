export function renderHome(about) {
  return `<section id="landing-page" class="landing_page section">
            <div class="introduction animate__animated animate__backInLeft">
              <h1>Hi there,<br>I'm Myles.</h1>
              <h3>
                ${about.occupation}
              </h3>
            </div>
            <div class="bg-move"></div>
          </section>
          <div class="arrow_down">
            <a class="animate__animated animate__bounce" href="#about-me"><img src="images/downarrow.png"></a>
          </div>`;
}