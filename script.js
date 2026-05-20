AOS.init();

function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      /// EXAM: COMPLÉTEZ LE CODE ICI !
      console.log(data);
      

      // TODO 1: REMPLIR LE HEADER

      let headerHtml = document.querySelector('header');
      let headerContainer = document.querySelector('header .container');
      let headerTitre = document.querySelector('header #nom-journal');
      let headerDescription = document.querySelector('header #phrase-accroche');

      headerTitre.textContent = data.journal.nomJournal
      headerDescription.textContent = data.journal.phraseAccroche

      // TODO 2: REMPLIR LA NAVIGATION

      let nav = document.getElementById("themes-nav")
      
      let bouton1 = `<button class="nav-theme-btn active">TOUS</button>`;

      nav.insertAdjacentHTML("beforeend", bouton1);
      
      function creerBouton(bouton) {
        let bouton2 = `<button class="nav-theme-btn">${bouton.theme}</button>`;

      nav.insertAdjacentHTML("beforeend", bouton2);
      }


      data.journal.articles.forEach(theme => {
        creerBouton(theme)
      });
      

      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL


      let hero = document.getElementsByClassName(`hero`)
      let heroContainer = document.getElementsByClassName(`container-full`)
      let articlePrincipal = document.getElementById(`article-principal`)

      console.log(hero);
      console.log(heroContainer);
      console.log(articlePrincipal);

      let div = `<img id="hero-image" src="one-piece.jpeg" alt="">
            <div class = "hero-info" data-aos="fade-up">
            <p class="theme-badge">${data.journal.articlePrincipal.theme}</p>
            <h4 id="hero-titre">${data.journal.articlePrincipal.titre} </h4>
            <p id="hero-description">${data.journal.articlePrincipal.description}.</p>
            <p class="date">${data.journal.articlePrincipal.date}</p>
            </div>`

      articlePrincipal.insertAdjacentHTML("beforeend", div)
      

   

      // TODO 4: REMPLIR LA GRILLE D'ARTICLES

      let article = document.getElementById(`articles-grid`)
      console.log(article);
      
      // let divArticle = `<div class="article-card">
      //             <img src="assets/images/image1.png" alt="">
      //             <div class="article-content">
      //             <p class="theme-badge">${data.journal.articles[0].theme}</p>
      //             <h3>${data.journal.articles[0].titre}</h3>
      //             <p>${data.journal.articles[0].date}</p>
      //          </div>`;

      // article.insertAdjacentHTML("beforeend", divArticle)

      data.journal.articles.forEach(infos => {

        let divArticle = `<div class="article-card" data-aos="zoom-in-up" >
                  <img src="${infos.image}" alt="">
                  <div class="article-content">
                  <p class="theme-badge">${infos.theme}</p>
                  <h3>${infos.titre}</h3>
                  <p>${infos.date}</p>
               </div>`;

        article.insertAdjacentHTML("beforeend", divArticle)
      });

      // TODO 5: REMPLIR LES THEMES

      let themes = document.getElementById(`themes-list`)
      console.log(themes);
      
      function creerThemes(theme) {
          let divTheme = `<div class="theme-item" data-aos="flip-right"><h3>${theme.nom}</h3>
            <p>${theme.description}</p></div>
         </div>`

         themes.insertAdjacentHTML("beforeend", divTheme)
         }


         data.journal.themes.forEach(theme => {
        //   let divTheme = `<div class="theme-item"><h3>${infos.nom}</h3>
        //     <p>${infos.description}</p></div>
        //  </div>`

        //  themes.insertAdjacentHTML("beforeend", divTheme)

        creerThemes(theme)
         });



         
         



      // TODO 6: REMPLIR LES AUTEURS

      let auteurListe = document.getElementById(`authors-list`);
  

         data.journal.auteurs.forEach(auteur => {
          creerAuteur(auteur)
         });
         
      
            function creerAuteur(auteur) {
              let divAuteur = `<div class="author-card" data-aos="fade-up"
              data-aos-duration="500">
               <img class="author-image" src="${auteur.photo}" alt="">
               <h3>${auteur.prenom}</h3>
               <p class="author-role">${auteur.typeExperience}</p>
               <p class="author-bio">${auteur.presentation}</p>
            </div>`
              
              
            auteurListe.insertAdjacentHTML("beforeend", divAuteur)

            }

      // TODO 7: REMPLIR LE CALL TO ACTION

      let divCta = document.getElementById("call-to-action")

      
      let texteCTA = `<div data-aos="fade-down"><p>${data.journal.texteAppelAction}</p>
              <button class="cta-button">S'abonner</button><div>`
      

     divCta.insertAdjacentHTML("beforeend", texteCTA)

     let bouton = document.querySelector(".cta-button")

     bouton.addEventListener("click", function () {
      alert("Merci pour votre abonnement !")
  })


      /// FIN DU CODE

      

      // BONUS 1 : Alert sur le bouton CTA

      // BONUS 2 : Filtrage par thème

      // BONUS 3 : Tri par popularité
    })

  
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}


getData();
