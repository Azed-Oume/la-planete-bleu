# MCD - BDD PLANETE

## Entité "Lieu"

- ID_lieu (clé primaire) : Identifiant unique du lieu.
- type : Type de lieu (mer, montagne ou espace vert).
- nom : Nom du lieu (par exemple : "Mer Méditerranée", "Mont Everest", "Parc National Yellowstone").
- superficie : Superficie du lieu en kilomètres carrés.
- région : Région où se trouve le lieu.
- pays : Pays où se trouve le lieu.
- altitude : Altitude du lieu (uniquement applicable aux montagnes).
- type de végétation : Type de végétation présente dans le lieu (uniquement applicable aux espaces verts).

## Entité "Espece"

- ID_espece (clé primaire) : Identifiant unique de l'espèce.
- nom : Nom de l'espèce (par exemple : "mamiferes", "Aigle royal", "Séquoia géant").
- description : Description de l'espèce.
- habitat : Habitat naturel de l'espèce (par exemple : "Océan", "Montagne", "Forêt").
- régime alimentaire : Régime alimentaire de l'espèce (par exemple : "Carnivore", "Herbivore", "Omnivore").
- ID_lieu (clé étrangère vers l'entité "Lieu") : Lieu où l'espèce est présente.

## Entité "Photo"

- ID_photo (clé primaire) : Identifiant unique de la photo.
- nom du fichier : Nom du fichier de la photo.
- date de prise de vue : Date à laquelle la photo a été prise.
- emplacement : Emplacement précis où la photo a été prise.
- description : Description de la photo.
- ID_lieu (clé étrangère vers l'entité "Lieu") : Lieu où la photo a été prise.

## Entité "Animal"

- ID_animal (clé primaire) : Identifiant unique de l'animal.
- nom : Nom de l'animal.
- taille : Taille de l'animal.
- poids : Poids de l'animal.
- couleur : Couleur de l'animal.
- espèce (clé étrangère vers l'entité "Espece") : Espèce à laquelle appartient l'animal.
- ID_lieu (clé étrangère vers l'entité "Lieu") : Lieu où l'animal a été observé.

## Entité "Plante"

- ID_plante (clé primaire) : Identifiant unique de la plante.
- nom : Nom de la plante.
- taille : Taille de la plante.
- couleur : Couleur de la plante.
- espèce (clé étrangère vers l'entité "Espece") : Espèce à laquelle appartient la plante.
- ID_lieu (clé étrangère vers l'entité "Lieu") : Lieu où la plante a été observée.

