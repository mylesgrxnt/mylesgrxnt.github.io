export function renderRecent(news) {
  return `<section id="recent" class="timeline">
            <h1 class="timeline-header">Recent News</h1>
            <div class="search">
              <input type="search" name='news' placeholder="Search News...">
            </div>
            <ul class="news_list">
              ${news.map((p) => renderRecentInstance(p)).join("")}
            </ul>
          </section>
          <script src="components/timeline.js"></script>`
}

export function renderRecentInstance(event) {
  return `<li>
            <div>
              <b><time>${event.date}</time></b>
              <p>${event.description}</p>
            </div>
          </li>`
}