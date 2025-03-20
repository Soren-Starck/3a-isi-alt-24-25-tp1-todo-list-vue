# Rapport de Projet - Liste de Tâches Vue.js

## Introduction

Ce document présente le rapport de développement d'une application de liste de tâches (todo list) réalisée avec le framework Vue.js 3.

## Structure du Projet

Le projet est structuré comme suit:

- `src/views/TodoList.vue` : Composant principal pour la gestion des tâches
- `src/views/PrintView.vue` : Composant pour la vue d'impression
- `src/store/todoStore.js` : Store pour partager les données entre les vues
- `src/router/index.js` : Configuration du routeur Vue

## Fonctionnalités Implémentées

### 1. Gestion de la Liste de Tâches

L'application permet les opérations suivantes sur la liste de tâches:

- Ajout d'une nouvelle tâche
- Suppression d'une tâche existante
- Modification du texte d'une tâche
- Marquage d'une tâche comme accomplie

#### Ajout d'une Tâche

L'utilisateur peut ajouter une nouvelle tâche en utilisant le champ de texte et le bouton "Ajouter" situés en haut de la liste. La tâche est ajoutée à la fin de la liste.

#### Suppression d'une Tâche

Chaque tâche dispose d'un bouton "Supprimer" qui permet de la retirer de la liste.

#### Modification d'une Tâche

L'utilisateur peut modifier le texte d'une tâche existante en cliquant sur le bouton "Modifier". Un formulaire de modification apparaît alors, permettant de changer le texte de la tâche. Deux options sont disponibles: confirmer ou annuler la modification.

#### Marquage comme Accomplie

Chaque tâche dispose d'une case à cocher permettant de la marquer comme accomplie. Les tâches accomplies sont visuellement différenciées par un style barré.

### 2. Vue d'Impression

L'application comprend une vue d'impression accessible depuis la vue principale. Cette vue affiche:

- Un récapitulatif avec le nombre total de tâches
- Le nombre de tâches non terminées
- La liste complète des tâches
- Les tâches terminées sont affichées avec un style barré

## Technologies Utilisées

- Vue.js 3: Framework JavaScript progressif pour la construction d'interfaces utilisateur
- Vue Router: Routeur officiel de Vue.js pour la navigation entre les vues
- JavaScript natif: Pour la logique métier

## Difficultés Rencontrées et Solutions

### Partage de l'État Entre les Vues

Pour partager les données de la liste de tâches entre la vue principale et la vue d'impression, nous avons créé un store simple avec Vue 3 Reactivity API. Ce store permet de centraliser l'état des tâches et de garantir que les modifications apportées dans une vue sont immédiatement reflétées dans l'autre.

## Conclusion

L'application réalisée répond aux exigences du cahier des charges. Elle offre une interface utilisateur intuitive pour la gestion d'une liste de tâches et permet d'imprimer ou de visualiser un récapitulatif des tâches dans une vue dédiée. 