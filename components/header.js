export function renderNavbar() {
  const header = document.querySelector("header");
  header.innerHTML = `<nav class="larger-screen-header">
                        <li><a href="#landing-page">Home</a></li>
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#recent">Recent</a></li>
                        <li><a href="#skill">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                      </nav>
                      <nav class="smaller-screen-header">
                        <div class="dropdown">
                          <button class="dropbtn"><img src="images/menu.png" alt="">
                            <i class="fa fa-caret-down"></i>
                          </button>
                          <div class="dropdown-content">
                            <a href="#landing-page">Home</a>
                            <a href="#about-me">About Me</a>
                            <a href="#recent">Recent</a>
                            <a href="#skill">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                          </div>
                        </div>
                      </nav>`
}