export function renderSkills(skills) {
  return `<section id="skill" class="skills">
            <h2><u>My Skills</u></h2>
            <div class="skill_description">
              <div class="grow skill_cell" data-aos="fade-up">
                <img src="images/skills_symbols/icons8-frontend-100.png">
                <h3>${skills[0].name}</h3>
                <p>${skills[0].description}</p>
              </div>
              <div class="grow skill_cell" data-aos="fade-up">
                <img src="images/skills_symbols/icons8-backend-100.png">
                <h3>${skills[1].name}</h3>
                <p>${skills[1].description}</p>
              </div>
              <div class="grow skill_cell" data-aos="fade-up">
                <img src="images/skills_symbols/icons8-graphic-design-100.png">
                <h3>${skills[2].name}</h3>
                <p>${skills[2].description}</p>
              </div>
            </div>
            <div class="skill_container">
              <div data-aos="fade-right"><img class="grow" src="images/skills_symbols/icons8-python-144.png"></div>
              <div data-aos="fade-right"><img class="grow" src="images/skills_symbols/icons8-java-144.png"></div>
              <div data-aos="fade-right"><img class="grow" src="images/skills_symbols/icons8-html5-144.png"></div>
              <div data-aos="fade-left"><img class="grow" src="images/skills_symbols/icons8-css3-144.png"></div>
              <div data-aos="fade-left"><img class="grow" src="images/skills_symbols/icons8-django-150.png"></div>
              <div data-aos="fade-left"><img class="grow" src="images/skills_symbols/icons8-c-programming-144.png"></div>
            </div>
          </section>`
}