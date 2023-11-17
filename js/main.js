fetch('data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
  renderMain(data);
});

function renderNavbar() {}
function renderMain(data) {
  const main = document.querySelector("main");
  main.innerHTML = renderHome(data.about);
  main.innerHTML += renderAboutMe(data.about);
  main.innerHTML += renderRecent(data.news);
  main.innerHTML += renderSkills(data.skills);
  main.innerHTML += renderProjects(data.projects);
  main.innerHTML += renderContact(data.contact)
  console.log(data.projects);
  nodeScriptReplace(document.getElementsByTagName("body")[0]);
}
function renderHome(about) {
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
function renderAboutMe(about) {
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
            <script src="js/section_move.js"></script>
          </div>`
}
function renderRecent(news) {
  return `<section id="recent" class="timeline">
            <h1 class="timeline-header">Recent News</h1>
            <ul>
              ${news.map((p) => renderRecentInstance(p)).join("")}
            </ul>
          </section>
          <script src="js/timeline.js"></script>`
}
function renderRecentInstance(event) {
  return `<li>
            <div>
              <time>${event.date}</time>
              <p>${event.description}</p>
            </div>
          </li>`
}
function renderSkills(skills) {
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

function renderProjects(projects) {
  return `<div id="projects" class="bottom">
            <section class="project_container" data-aos="zoom-in">
            <h2>Projects</h2>
            <ul class="gallery">
              ${projects.map((p) => renderProjectInstance(p)).join("")}
            </ul>
            </section>
          </div>`
}
function renderProjectInstance(instance) {
return `<li style="background-color: #FFF;">
          <h3>${instance.title}</h3>
          <br>
          <p>
            ${instance.problem}
            <br><br>${instance.solution}
          </p>
          <br>
          <div class="img-and-a-container">
            <a href="${instance.link}"><b>Check it out here</b></a>
          </div>
          <br>
          <div class="img-and-a-container">
            <img src="${instance.image}" alt="Canvas Reminder">
          </div>
        </li>`
}
function renderContact(contact) {
  return `<div id="contact" class="contact">
            <p>
              Phone: ${contact.phone}
            </p>
            <p>
              Email: ${contact.email}
            </p><p><a href="images/resume.pdf">Resume</a></p>
            <p><a href="https://www.github.com/mylesgrxnt"><b>Github</b></a></p>
            <p><a href="https://www.linkedin.com/in/myles-grant-bccs/"><b>LinkedIn</b></a></p>
          </div>`
}


// Code to replace scripts with executable scripts
function nodeScriptReplace(node) {
  if ( nodeScriptIs(node) === true ) {
          node.parentNode.replaceChild( nodeScriptClone(node) , node );
  }
  else {
          var i = -1, children = node.childNodes;
          while ( ++i < children.length ) {
                nodeScriptReplace( children[i] );
          }
  }

  return node;
}
function nodeScriptClone(node){
  var script  = document.createElement("script");
  script.text = node.innerHTML;

  var i = -1, attrs = node.attributes, attr;
  while ( ++i < attrs.length ) {                                    
        script.setAttribute( (attr = attrs[i]).name, attr.value );
  }
  return script;
}

function nodeScriptIs(node) {
  return node.tagName === 'SCRIPT';
}