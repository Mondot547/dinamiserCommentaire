document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const commentList = document.getElementById('comment-list');

    //Rendre invisible par defaut
    document.getElementById('error-message').style.display = 'none';

    form.addEventListener('submit', (event) => {

        //Empeche le rechargement de la page
        event.preventDefault();

        //Recupere les valeurs des inputs
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const message = document.getElementById('message').value;

        //Déclaration de la variable newComment
        let newComment;

        //Création de la fonction createComment
        function createComment() {

            //Créer le nouveau commentaire
            newComment = document.createElement('div');

            //Construire le contenu du commentaire
            newComment.innerHTML = `
                <div class="flex space-x-4 text-sm text-gray-500">
                    <div class="flex-1 py-10 border-t border-gray-200">
                        <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                        <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                            <p>${message}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        //condition pour afficher le message d'error en cas d'inputs vide
        if (firstName === '' || lastName === '' || message === '') {

            document.getElementById('error-message').style.display = 'block';

        } else {

            document.getElementById('error-message').style.display = 'none';

            //Ajout de la fonction de creation de commentaire
            createComment();

            //Inserer le nouveau commentaire
            commentList.append(newComment);
        }

        //Reinitialiser les valeurs des inputs
        form.reset();

    });
});
