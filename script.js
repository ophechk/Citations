const citations = [
    {
        texte: "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.",
        auteur: "Nelson Mandela"
    },
    {
        texte: "La vraie richesse d'un homme en ce monde se mesure au bien qu'il a fait autour de lui.",
        auteur: "Mahomet"
    },
    {
        texte: "C'est de l'enfer des pauvres qu'est fait le paradis des riches.",
        auteur : "Victor Hugo"
    },
    {
        texte : "La beauté est dans les yeux de celui qui regarde.",
        auteur : "Oscar Wilde"
    },
    {
        texte : "Deux choses sont infinies : l'Univers et la bêtise humaine. Mais en ce qui concerne l'Univers, je n'en ai pas encore acquis la certitude absolue.",
        auteur : "Albert Einstein"
    },
    {
        texte : "Je pense, donc je suis.",
        auteur : "Réné Descartes"
    },
    {
        texte : "Fais de ta vie un rêve, et d'un rêve, une réalité.",
        auteur : "Antoine de Saint-Exupéry"
    },
    {
        texte : "L'amour d'une mère pour son enfant ne connaît ni loi, ni pitié, ni limite. Il pourrait anéantir impitoyablement tout ce qui se trouve en travers de son chemin.",
        auteur : "Agatha Christie"
    },
    {
        texte : "La musique est la langue des émotions.",
        auteur : "Emmanuel Kant"
    },
    {
        texte : "Le souvenir, c'est la présence invisible.",
        auteur : "Victor Hugo"
    }
]


function AfficherCitation() {
    const indexAleatoire = Math.floor(Math.random() * citations.length);
    const citation = citations[indexAleatoire];

    console.log(citation.texte);
    console.log("– " + citation.auteur);

    document.getElementById("texte").textContent = "Citation : " + citation.texte;
    document.getElementById("auteur").textContent = "Auteur : " + citation.auteur;
}
