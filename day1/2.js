
const parent = document.querySelector("#parentBlock");
console.log(parent);

window.addEventListener("load", () => {
  console.log("ON.LOAD");

  const parent = document.querySelector("#parentBlock");
  console.log("INSIDE.LOAD", parent);

  let list = [
    { id: 1, title: "Javascript" },
    { id: 2, title: "HTML" },
    { id: 2, title: "CSS" },
    { id: 1, title: "DOM" },
    { id: 2, title: "AJAX" },
    { id: 2, title: "XML" },
    { id: 2, title: "JSON" },
  ];

  
  for (let i = 0; i < list.length; i++) {
    let item = list[i];

    
    const newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";

    
    newElement.children[0].innerHTML = item.title;

   
    parent.insertBefore(newElement, parent.firstChild);
  }
});