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
    var txtVal = document.getElementById("teksti").value,
      listNode = document.getElementById("lista"),
      liNode = document.createElement("LI"),
      txtNode = document.createTextNode(txtVal);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
  });
}
