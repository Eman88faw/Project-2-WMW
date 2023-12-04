/*const nav = document.querySelector(".navbar")
fetch('/header.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data
    const parser =new DOMParser()
    const doc = parser.parseFromString(data,'text/html')
    eval(doc.querySelector('script').textContent)
})*/

var headerContainer = document.getElementById("header");
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    headerContainer.innerHTML = data;
    document.body.prepend(headerContainer);
    const navlink = document.querySelectorAll('.nav-link');
    navlink.forEach(box => {
        // ✅ Remove class from each element
        box.classList.remove('active');
      if(box.innerHTML==viewName)
         box.classList.add('active');
      });
  });

var footerContainer = document.getElementById("footer");
fetch("Footer.html")
  .then((response) => response.text())
  .then((data) => {
    footerContainer.innerHTML = data;
    document.body.appendChild(footerContainer);
  });

  