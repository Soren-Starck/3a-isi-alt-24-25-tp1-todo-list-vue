# Une liste de tâches

Dans cet exercice, vous devez créer une page web pour gérer une liste de tâches à faire (to-do list) en utilisant le framework Vue 3.

## Modalités
- Vous devez réaliser l'exercice en binôme.

## Consignes
Vous devrez créer une application de gestion de liste de tâches à l’exemple de [cette application](https://polytechlyon.github.io/3a-isi-alt-24-25-tp1-todo-list-examples/step4/).

Vous réaliserez votre application à partir de ce répertoire vide.

L'application doit être réalisée en utilisant Vue et Vue-Router, sans autres bibliothèques externes.

## Fonctionnalités

### Étape 1 : Une page de gestion d'une liste des tâches à faire
À l'exemple de [cette application](https://polytechlyon.github.io/3a-isi-alt-24-25-tp1-todo-list-examples/step3/),
vous devez animer la page HTML fournie avec un code JavaScript permettant les fonctionnalités suivantes.

La liste ne sera pas sauvegardée entre les rafraîchissements de page, ou lors que la page est fermée puis visitée à nouveau.

La page doit contenir un panneau permettant l’ajout d’un nouvel item.
L’item sera ajouté en bas de la liste.

La liste de tâches doit être affichée en permanence sur la page.
Chaque item doit être accompagné d'une case à cocher et de deux boutons : suppression et modification.

La case à cocher détermine si la tâche en question est accomplie.

Lorsqu’on actionne le bouton de suppression, l’item correspondant sera supprimé de la liste.

L’appui sur le bouton de modification active le mode de modification.
Un panneau sera affiché, permettant de modifier le texte de l’item grâce à un champ d’entrée.
On peut soit confirmer, soit annuler la modification grâce à deux boutons.
Dans les deux cas, le mode de modification sera désactivé.
Lorsque le mode de modification est actif, le panneau de création doit être masqué

### Étape 2 : Application de gestion d'une liste des tâches avec une page d'impression
À l'exemple de [cette application](https://polytechlyon.github.io/3a-isi-alt-24-25-tp1-todo-list-examples/step4/),
vous devez ajouter une vue d'impression à votre application qui affiche la liste des tâches en mode lecture seule.
La vue affiche un récapitulatif avec le nombre total des tâches ainsi que le nombre des tâches qui ne sont pas encore terminées.
Elle affiche aussi la liste de toutes les tâches, avec celles terminées en texte barré.

Cette vue doit être accessible depuis la vue principale, et la vue principale accessible depuis la vue d'impression.

Pensez à utiliser vue-router pour réaliser cette étape. La navigation ne doit pas recharger la totalité de la page.


## Outils
### Pour coder
Pour cet exercice, vous n'aurez besoin que d'un éditeur de texte, un terminal, et d'un navigateur web.
Vous pouvez toutefois utiliser un éditeur de développement intégré, comme VS Code ou WebStorm, pour réaliser votre développement.

Vous devrez avoir `npm` installé et fonctionnel pour la création du projet Vue.

### Pour tester
L'application doit s'afficher dans un navigateur web.
Vous pouvez tester le bon fonctionnement de votre application en lançant un serveur de développement local.

