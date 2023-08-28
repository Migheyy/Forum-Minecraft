function addUser() {

    nomeArmazenado = document.getElementById("caixaDeTexto").value;

    localStorage.setItem("user_name", nomeArmazenado );

    window.location="forum_room.html";
}