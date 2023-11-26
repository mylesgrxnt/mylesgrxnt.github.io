export function renderAboutMe(about) {
  return `<div id="about-me" class="info_container">
            <section class="about" data-aos="fade-up">
              <div class="about-image">
                <img src="images/IMG_1635.jpeg" alt="">
              </div>
              <div class="about-me-info">
                <h2>
                  ${about.header}
                </h2>
                <p>
                  ${about.quip1}
                </p>
                <br/>
                <p>
                  ${about.quip2}
                </p>
              </div>
            </section>
            <script src="components/section_move.js"></script>
          </div>`
}