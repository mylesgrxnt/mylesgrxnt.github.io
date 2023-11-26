export function renderProjects(projects) {
  return `<div id="projects" class="bottom">
            <section class="project_container" data-aos="zoom-in">
            <h2>Projects</h2>
            <ul class="gallery">
              ${projects.map((p) => renderProjectInstance(p)).join("")}
            </ul>
            </section>
          </div>`
}

export function renderProjectInstance(instance) {
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