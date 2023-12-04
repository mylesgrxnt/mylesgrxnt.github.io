import { renderNavbar } from "./components/header.js"
import { renderHome } from "./components/home.js";
import { renderAboutMe } from "./components/aboutme.js";
import { renderRecent, renderRecentInstance } from "./components/news.js";
import { renderSkills } from "./components/skills.js";
import { renderProjects } from "./components/projects.js";
import { renderContact } from "./components/contact.js";

fetch('data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
  renderNavbar();
  renderMain(data);
});

// One page website, so renderMain() wouldn't make sense in another file
function renderMain(data) {
  const main = document.querySelector("main");
  main.innerHTML = renderHome(data.about);
  main.innerHTML += renderAboutMe(data.about);
  main.innerHTML += renderRecent(data.news);
  main.innerHTML += renderSkills(data.skills);
  main.innerHTML += renderProjects(data.projects);
  main.innerHTML += renderContact(data.contact)

  nodeScriptReplace(document.getElementsByTagName("body")[0]);

  const search = document.querySelector('.search');
  search.addEventListener("input", e => {
    const filtered = data.news.filter(newsitem => newsitem.description.includes(e.target.value));
    const list = document.querySelector(".news_list");
    list.innerHTML = filtered.map(newsitem =>renderRecentInstance(newsitem)).join("");
  });
}


// Code to replace scripts with executable scripts
// MUST BE IN INDEX.JS
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