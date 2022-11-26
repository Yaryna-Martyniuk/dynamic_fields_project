
  const formfield = document.getElementById("formfield");

  function add() {
    let newField = document.createElement("input");
    newField.setAttribute("type", "text");
    newField.setAttribute("name", "text");
    newField.setAttribute("class", "text");
    newField.setAttribute("placeholder", "Optional Field");
    formfield.appendChild(newField);
  }

  function remove() {
    let inputTags = formfield.getElementsByTagName("input");
    if (inputTags.length > 2) {
      formfield.removeChild(inputTags[inputTags.length - 1]);
    }
  }
;
