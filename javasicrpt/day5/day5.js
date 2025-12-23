document.getElementById("myInput").value =
    localStorage.getItem("text") || sessionStorage.getItem("text") || "";

  function saveLocal() {
    var value = document.getElementById("myInput").value;
    localStorage.setItem("text", value);
    alert("Saved in LocalStorage");
  }

  function saveSession() {
    var value = document.getElementById("myInput").value;
    sessionStorage.setItem("text", value);
    alert("Saved in SessionStorage");
  }

  function deleteText() {
    document.getElementById("myInput").value = "";
    localStorage.removeItem("text");
    sessionStorage.removeItem("text");
    alert("Text deleted");
  }