import * as UI from "./interfaz.js";

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        const URL = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                if (data.lyrics) {
                    const { lyrics } = data;

                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
                } else {
                    UI.divMensajes.textContent =
                        "No se pudo encontrar la canción. Intenta nuevamente.";
                    UI.divMensajes.classList.add("error");

                    setTimeout(() => {
                        UI.divMensajes.textContent = "";
                        UI.divMensajes.classList.remove("error");
                    }, 3000);
                }
            })
            .catch((error) => console.log(error));
    }
}

export default API;
