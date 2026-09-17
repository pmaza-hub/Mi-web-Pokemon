/* =====================================================
   POKÉMON AGUA — JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       DATOS
    ================================================= */

    const pokemon = [
        {
            id: 7,
            name: "Squirtle",
            category: "starter",
            categoryName: "Inicial",
            ability: "Torrent",
            strengths: "Fuego, Tierra y Roca",
            weaknesses: "Eléctrico y Planta",
            description:
                "Squirtle es un pequeño Pokémon de tipo Agua. Su caparazón le permite protegerse y desplazarse con facilidad por el agua."
        },

        {
            id: 8,
            name: "Wartortle",
            category: "evolution",
            categoryName: "Evolución",
            ability: "Torrent",
            strengths: "Fuego, Tierra y Roca",
            weaknesses: "Eléctrico y Planta",
            description:
                "Wartortle es la evolución de Squirtle. Es un Pokémon acuático ágil que utiliza sus orejas y cola para moverse."
        },

        {
            id: 9,
            name: "Blastoise",
            category: "evolution",
            categoryName: "Evolución",
            ability: "Torrent",
            strengths: "Fuego, Tierra y Roca",
            weaknesses: "Eléctrico y Planta",
            description:
                "Blastoise es un poderoso Pokémon de tipo Agua equipado con cañones que utiliza para lanzar potentes chorros."
        },

        {
            id: 54,
            name: "Psyduck",
            category: "all",
            categoryName: "Pokémon",
            ability: "Damp / Cloud Nine",
            strengths: "Fuego, Tierra y Roca",
            weaknesses: "Eléctrico y Planta",
            description:
                "Psyduck es un Pokémon de tipo Agua que suele sufrir fuertes dolores de cabeza relacionados con sus poderes psíquicos."
        },

        {
            id: 55,
            name: "Golduck",
            category: "evolution",
            categoryName: "Evolución",
            ability: "Damp / Cloud Nine",
            strengths: "Fuego, Tierra y Roca",
            weaknesses: "Eléctrico y Planta",
            description:
                "Golduck es la evolución de Psyduck y destaca por su velocidad y habilidad para desplazarse rápidamente por el agua."
        },

        {
            id: 129,
            name: "Magikarp",
            category: "all",
            categoryName: "Pokémon",
            ability: "Swift Swim",
            strengths: "Fuego, Tierra y Roca",
            weaknesses: "Eléctrico y Planta",
            description:
                "Magikarp es conocido por sus limitadas capacidades de combate, pero posee un enorme potencial evolutivo."
        },

        {
            id: 130,
            name: "Gyarados",
            category: "evolution",
            categoryName: "Evolución",
            ability: "Intimidate / Moxie",
            strengths: "Fuego, Tierra y Lucha",
            weaknesses: "Eléctrico y Roca",
            description:
                "Gyarados es un poderoso Pokémon de tipo Agua y Volador famoso por su enorme fuerza y temperamento."
        },

        {
            id: 131,
            name: "Lapras",
            category: "all",
            categoryName: "Pokémon",
            ability: "Water Absorb / Shell Armor",
            strengths: "Fuego, Agua y Hielo",
            weaknesses: "Eléctrico, Planta, Lucha y Roca",
            description:
                "Lapras es un Pokémon de tipo Agua y Hielo conocido por transportar personas a través de grandes extensiones de agua."
        },

        {
            id: 134,
            name: "Vaporeon",
            category: "evolution",
            categoryName: "Evolución",
            ability: "Water Absorb",
            strengths: "Fuego, Tierra y Roca",
            weaknesses: "Eléctrico y Planta",
            description:
                "Vaporeon es una de las evoluciones de Eevee. Su cuerpo se ha adaptado perfectamente a la vida acuática."
        },

        {
            id: 158,
            name: "Totodile",
            category: "starter",
            categoryName: "Inicial",
            ability: "Torrent",
            strengths: "Fuego, Tierra y Roca",
            weaknesses: "Eléctrico y Planta",
            description:
                "Totodile es un Pokémon inicial de tipo Agua. A pesar de su pequeño tamaño, posee una poderosa mandíbula."
        },

        {
            id: 160,
            name: "Feraligatr",
            category: "evolution",
            categoryName: "Evolución",
            ability: "Torrent / Sheer Force",
            strengths: "Fuego, Tierra y Roca",
            weaknesses: "Eléctrico y Planta",
            description:
                "Feraligatr es la evolución final de Totodile y destaca por su gran fuerza física y sus poderosas mandíbulas."
        },

        {
            id: 245,
            name: "Suicune",
            category: "legendary",
            categoryName: "Legendario",
            ability: "Pressure",
            strengths: "Fuego, Tierra y Roca",
            weaknesses: "Eléctrico y Planta",
            description:
                "Suicune es un Pokémon legendario de tipo Agua asociado con los lagos y la pureza del agua."
        }
    ];


    /* =================================================
       ELEMENTOS HTML
    ================================================= */

    const track =
        document.getElementById("pokemonTrack");

    const dotsContainer =
        document.getElementById("carouselDots");

    const prevButton =
        document.getElementById("prevButton");

    const nextButton =
        document.getElementById("nextButton");

    const searchInput =
        document.getElementById("searchInput");

    const searchPanel =
        document.getElementById("searchPanel");

    const clearSearch =
        document.getElementById("clearSearch");

    const filterButton =
        document.getElementById("filterButton");

    const filterPanel =
        document.getElementById("filterPanel");

    const catalogCounter =
        document.getElementById("catalogCounter");

    const noResults =
        document.getElementById("noResults");

    const openSearch =
        document.getElementById("openSearch");

    const heroSearch =
        document.getElementById("heroSearch");

    const catalogSearch =
        document.getElementById("catalogSearch");

    const modal =
        document.getElementById("pokemonModal");

    const modalContent =
        document.getElementById("modalContent");

    const modalClose =
        document.getElementById("modalClose");

    const modalBackground =
        document.getElementById("modalBackground");


    /* =================================================
       ESTADO
    ================================================= */

    let pokemonActuales = [...pokemon];

    let posicionActual = 0;

    let filtroActual = "all";


    /* =================================================
       CONFIGURACIÓN DEL CARRUSEL
    ================================================= */

    function obtenerTarjetasVisibles() {

        if (window.innerWidth <= 700) {
            return 1;
        }

        if (window.innerWidth <= 1000) {
            return 2;
        }

        return 3;
    }


    /* =================================================
       CREAR TARJETAS
    ================================================= */

    function mostrarPokemon() {

        track.innerHTML = "";

        pokemonActuales.forEach((poke) => {

            const card =
                document.createElement("article");

            card.className =
                "pokemon-card";

            card.innerHTML = `

                <div class="card-inner">

                    <img
                        class="card-image"
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png"
                        alt="${poke.name}"
                        loading="lazy"
                    >

                    <span class="card-number">
                        #${String(poke.id).padStart(3, "0")}
                    </span>

                    <h3>
                        ${poke.name}
                    </h3>

                    <span class="card-category">
                        ${poke.categoryName}
                    </span>

                    <p class="card-description">
                        ${poke.description}
                    </p>

                    <button
                        class="card-button"
                        data-id="${poke.id}"
                    >
                        Ver información
                    </button>

                </div>
            `;

            track.appendChild(card);
        });


        document
            .querySelectorAll(".card-button")
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const id =
                            Number(button.dataset.id);

                        abrirModal(id);
                    }
                );
            });


        crearDots();

        actualizarCarrusel();

        actualizarContador();
    }


    /* =================================================
       CONTADOR
    ================================================= */

    function actualizarContador() {

        const cantidad =
            pokemonActuales.length;

        catalogCounter.textContent =
            `Mostrando ${cantidad} Pokémon`;
    }


    /* =================================================
       DOTS
    ================================================= */

    function crearDots() {

        dotsContainer.innerHTML = "";

        const visibles =
            obtenerTarjetasVisibles();

        const totalPaginas =
            Math.max(
                1,
                Math.ceil(
                    pokemonActuales.length /
                    visibles
                )
            );

        for (
            let i = 0;
            i < totalPaginas;
            i++
        ) {

            const dot =
                document.createElement("button");

            dot.className =
                "carousel-dot";

            if (i === posicionActual) {
                dot.classList.add("active");
            }

            dot.addEventListener(
                "click",
                () => {

                    posicionActual = i;

                    actualizarCarrusel();
                }
            );

            dotsContainer.appendChild(dot);
        }
    }


    /* =================================================
       ACTUALIZAR CARRUSEL
    ================================================= */

    function actualizarCarrusel() {

        const visibles =
            obtenerTarjetasVisibles();

        const maxPosition =
            Math.max(
                0,
                Math.ceil(
                    pokemonActuales.length /
                    visibles
                ) - 1
            );

        if (posicionActual > maxPosition) {
            posicionActual = maxPosition;
        }

        const desplazamiento =
            posicionActual * 100;

        track.style.transform =
            `translateX(-${desplazamiento}%)`;


        document
            .querySelectorAll(".carousel-dot")
            .forEach((dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === posicionActual
                );
            });
    }


    /* =================================================
       SIGUIENTE
    ================================================= */

    nextButton.addEventListener(
        "click",
        () => {

            const visibles =
                obtenerTarjetasVisibles();

            const maxPosition =
                Math.max(
                    0,
                    Math.ceil(
                        pokemonActuales.length /
                        visibles
                    ) - 1
                );

            posicionActual++;

            if (
                posicionActual >
                maxPosition
            ) {
                posicionActual = 0;
            }

            actualizarCarrusel();
        }
    );


    /* =================================================
       ANTERIOR
    ================================================= */

    prevButton.addEventListener(
        "click",
        () => {

            const visibles =
                obtenerTarjetasVisibles();

            const maxPosition =
                Math.max(
                    0,
                    Math.ceil(
                        pokemonActuales.length /
                        visibles
                    ) - 1
                );

            posicionActual--;

            if (posicionActual < 0) {
                posicionActual =
                    maxPosition;
            }

            actualizarCarrusel();
        }
    );


    /* =================================================
       BUSCAR
    ================================================= */

    function buscarPokemon() {

        const texto =
            searchInput.value
                .trim()
                .toLowerCase();


        pokemonActuales =
            pokemon.filter((poke) => {

                const coincideNombre =
                    poke.name
                        .toLowerCase()
                        .includes(texto);

                const coincideId =
                    String(poke.id)
                        .includes(texto);

                return (
                    coincideNombre ||
                    coincideId
                );
            });


        posicionActual = 0;

        mostrarPokemon();


        if (
            pokemonActuales.length === 0
        ) {

            noResults.classList.remove(
                "hidden"
            );

        } else {

            noResults.classList.add(
                "hidden"
            );
        }
    }


    searchInput.addEventListener(
        "input",
        buscarPokemon
    );


    /* =================================================
       LIMPIAR BÚSQUEDA
    ================================================= */

    clearSearch.addEventListener(
        "click",
        () => {

            searchInput.value = "";

            filtroActual = "all";

            pokemonActuales =
                [...pokemon];

            posicionActual = 0;

            document
                .querySelectorAll(".filter-option")
                .forEach((button) => {

                    button.classList.toggle(
                        "active",
                        button.dataset.filter === "all"
                    );
                });

            noResults.classList.add(
                "hidden"
            );

            mostrarPokemon();

            searchInput.focus();
        }
    );


    /* =================================================
       ABRIR BUSCADOR
    ================================================= */

    function abrirBuscador() {

        searchPanel.classList.remove(
            "hidden"
        );

        filterPanel.classList.add(
            "hidden"
        );

        searchInput.focus();
    }


    openSearch.addEventListener(
        "click",
        abrirBuscador
    );

    heroSearch.addEventListener(
        "click",
        () => {

            document
                .getElementById("catalogo")
                .scrollIntoView({
                    behavior: "smooth"
                });

            setTimeout(
                abrirBuscador,
                500
            );
        }
    );

    catalogSearch.addEventListener(
        "click",
        () => {

            searchPanel.classList.toggle(
                "hidden"
            );

            filterPanel.classList.add(
                "hidden"
            );

            if (
                !searchPanel.classList.contains(
                    "hidden"
                )
            ) {
                searchInput.focus();
            }
        }
    );


    /* =================================================
       FILTROS
    ================================================= */

    filterButton.addEventListener(
        "click",
        () => {

            filterPanel.classList.toggle(
                "hidden"
            );

            searchPanel.classList.add(
                "hidden"
            );
        }
    );


    document
        .querySelectorAll(".filter-option")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    filtroActual =
                        button.dataset.filter;


                    document
                        .querySelectorAll(
                            ".filter-option"
                        )
                        .forEach((item) => {

                            item.classList.remove(
                                "active"
                            );
                        });


                    button.classList.add(
                        "active"
                    );


                    aplicarFiltro();
                }
            );
        });


    /* =================================================
       APLICAR FILTRO
    ================================================= */

    function aplicarFiltro() {

        if (
            filtroActual === "all"
        ) {

            pokemonActuales =
                [...pokemon];

        } else {

            pokemonActuales =
                pokemon.filter(
                    (poke) =>
                        poke.category ===
                        filtroActual
                );
        }


        const texto =
            searchInput.value
                .trim()
                .toLowerCase();


        if (texto !== "") {

            pokemonActuales =
                pokemonActuales.filter(
                    (poke) =>
                        poke.name
                            .toLowerCase()
                            .includes(texto) ||
                        String(poke.id)
                            .includes(texto)
                );
        }


        posicionActual = 0;

        mostrarPokemon();


        if (
            pokemonActuales.length === 0
        ) {

            noResults.classList.remove(
                "hidden"
            );

        } else {

            noResults.classList.add(
                "hidden"
            );
        }
    }


    /* =================================================
       MODAL
    ================================================= */

    function abrirModal(id) {

        const poke =
            pokemon.find(
                (item) =>
                    item.id === id
            );


        if (!poke) {
            return;
        }


        modalContent.innerHTML = `

            <div class="modal-pokemon">

                <div>

                    <img
                        class="modal-pokemon-image"
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png"
                        alt="${poke.name}"
                    >

                </div>

                <div>

                    <span class="modal-number">
                        #${String(poke.id).padStart(3, "0")}
                    </span>

                    <h2>
                        ${poke.name}
                    </h2>

                    <p class="modal-description">
                        ${poke.description}
                    </p>


                    <div class="modal-section modal-ability">

                        <h4>
                            Habilidad
                        </h4>

                        <p>
                            ${poke.ability}
                        </p>

                    </div>


                    <div class="modal-section modal-strength">

                        <h4>
                            Fortalezas
                        </h4>

                        <p>
                            ${poke.strengths}
                        </p>

                    </div>


                    <div class="modal-section modal-weakness">

                        <h4>
                            Debilidades
                        </h4>

                        <p>
                            ${poke.weaknesses}
                        </p>

                    </div>

                </div>

            </div>
        `;


        modal.classList.remove(
            "hidden"
        );

        document.body.style.overflow =
            "hidden";
    }


    /* =================================================
       CERRAR MODAL
    ================================================= */

    function cerrarModal() {

        modal.classList.add(
            "hidden"
        );

        document.body.style.overflow =
            "";
    }


    modalClose.addEventListener(
        "click",
        cerrarModal
    );

    modalBackground.addEventListener(
        "click",
        cerrarModal
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                !modal.classList.contains("hidden")
            ) {
                cerrarModal();
            }
        }
    );


    /* =================================================
       RESPONSIVE
    ================================================= */

    window.addEventListener(
        "resize",
        () => {

            crearDots();

            actualizarCarrusel();
        }
    );


    /* =================================================
       INICIALIZAR
    ================================================= */

    mostrarPokemon();

});