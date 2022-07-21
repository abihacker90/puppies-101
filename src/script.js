let modal = document.getElementById("modal");

let modalBtn = document.getElementById("openmodal");

let closeBtn = document.getElementById("close");

modalBtn.onclick = () => {
    modal.style.display = "block";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
  };

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};

