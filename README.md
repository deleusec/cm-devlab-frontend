# Projet DevLab - Frontend

## Dashboard de gestion de l'usure professionnelle des salariés de Châtenay-Malabry

### Sommaire

- [Introduction](#introduction)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Mise en route](#mise-en-route)
- [Fonctionnalités](#fonctionnalités)
- [Contribuer au projet](#contribuer-au-projet)
- [Licence](#licence)

### Introduction

Le projet a pour but de développer un outil automatisé pour anticiper l'usure professionnelle chez les agents, en prenant en compte leurs profils spécifiques et des critères facilement renseignables. L'objectif est d'identifier les agents susceptibles de présenter une usure professionnelle et de les orienter vers des formations adaptées, permettant ainsi une reconversion professionnelle pour conclure leur carrière dans un autre métier.

### Technologies utilisées

Ce projet est développé avec React et TypeScript, et utilise Vite.js comme outil de build pour une expérience de développement optimale. Voici une liste des principales librairies et outils utilisés :

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
- ![Vite.js](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)
- ![Emotion](https://img.shields.io/badge/-Emotion-DB7093?logo=emotion&logoColor=white)
- ![MUI](https://img.shields.io/badge/-MUI-007FFF?logo=mui&logoColor=white)
- ![AG-Grid](https://img.shields.io/badge/-AG--Grid-008000?logo=ag-grid&logoColor=white)
- ![Axios](https://img.shields.io/badge/-Axios-671DDF?logo=axios&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
- Et plus encore...

### Installation

Avant de commencer, assurez-vous que `pnpm` est installé globalement sur votre machine. Si ce n'est pas le cas, suivez les instructions sur [pnpm.io](https://pnpm.io/install) pour l'installer.

> **Note:** Il est essentiel d'avoir le projet côté backend ouvert et en cours d'exécution pour le bon fonctionnement de cette application. Le projet backend est accessible à l'adresse suivante : [cm-devlab-backend](https://github.com/QuentinDrouet/cm-devlab-backend).

Pour mettre en place et exécuter ce projet localement, suivez ces étapes :

1. Clonez le dépôt :

```bash
git clone https://github.com/deleusec/cm-devlab-frontend.git
```

2. Accédez au répertoire du projet :

```bash
cd cm-devlab-frontend
```

3. Installez les dépendances avec `pnpm` :

```bash
pnpm install
```

### Mise en route

Pour démarrer le serveur de développement :

```bash
pnpm run dev
```

Pour construire le projet pour la production :

```bash
pnpm run build
```

Pour prévisualiser la version de production :

```bash
pnpm run preview
```

### Fonctionnalités

- Tableau de bord interactif pour le suivi de l'usure professionnelle
- Analyse personnalisée basée sur les profils des agents
- Interface utilisateur intuitive et réactive

### Contribuer au projet

Nous accueillons chaleureusement les contributions. Si vous souhaitez contribuer, veuillez suivre les instructions suivantes :

1. Forkez le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
