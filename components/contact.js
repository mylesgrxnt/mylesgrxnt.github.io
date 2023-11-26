export function renderContact(contact) {
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