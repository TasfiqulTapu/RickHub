console.log("Rick is here")
const title = document.getElementsByTagName('title')[0];
const page = document.getElementsByTagName('body')[0];
const INDEX_URL = browser.runtime.getURL("index.html");

title.innerText = "Free Rick Videos & Rick Movies - Rick, 🔥, Rick Tube | Rickhub"
page.innerHTML = `<iframe src="${INDEX_URL}" style="min-width: 100vw;min-height: 100vh;" frameborder="0"></iframe>`;

