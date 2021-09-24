import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Harjotus 1</h1>
`;

if (document.readyState !== "loading") {
  console.log("Document is ready");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting");
  });
}

function initializeCode() {
  const addTextButton = document.getElementById("add-comment");

  addTextButton.addEventListener("click", function () {
    const txtVal = document.getElementById("teksti");
    const listNode = document.getElementById("lista");

    let liNode = document.createElement("li");

    liNode.appendChild(document.createTextNode(txtVal.value));

    listNode.appendChild(liNode);
  });
}
