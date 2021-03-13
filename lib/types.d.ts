
export type PageAccueil = {
  titrePrincipal: string;
  phraseDaccueil: string;
  boutonCtaSectionHero: string;
  texteSectionBleue: string;
  texteSuiteSectionBleue: string;
  boutonCtaSectionTechnos: string;
};

export type ImageProjet = {
  /** Hauteur de l'image */
  height: number;
  /** Largeur de l'image */
  width: number;
  /** Chemin de l'image */
  url: string;
};

export type AppercuProjet = {
  /**Titre du projet */
  titre: string;
  /**Sommaire représentant le projet */
  sommaire: string;
  /**Tableau des images du projet */
  images: ImageProjet[];
  /**Slug du projet, utilisé pour les chemins et url */
  slug: string;
};

export type ListeAppercuProjets = {
  /** Tableau des projets */
  projets: AppercuProjet[];
};

export type PropsForme = {
    /** type possible de la forme */
    typeForme: "sphere" | "cube" | "cone" | "dodecagone" | "torus" | "torusknot";
    /**position de la forme X Y Z */
    position: [number, number, number];
    /** couleur de la forme , string , hex, rgb */
    color?: string;
    /** opacité de la forme entre 0 et 1 */
    opacity?: number;
    /** vitesse de l'animation de wobble ou distortion */
    speed?: number;
    /** facteur de puissance de la distortion */
    factor?: number;
    /** délai de l'animation de position, en MS */
    delay?: number;
    /** constructeur de la forme */
    args?: number[];
    /** valeur minimale de l'animation de pos y */
    minRange?: number;
    /** valeur maximale de l'animation de pos y */
    maxRange?: number;
    /** masse de la forme */
    mass?: number;
    /** la force énergétique du spring */
    tension?: number;
    /** la résistance du spring */
    friction?: number;
    /** si vrai, l'animation ne vas pas overshoot */
    clamp?: boolean;
    /** si vrai, commencer l'animation dans l'autre sens */
    inverser?: boolean;
    /** valeur positive ou négative pour l'animation de rotation de la forme */
    valRotation: number;
    /** composants enfant de la forme */
    children?: ReactNode;
    /** fonction à exécuter au clic de la forme */
    onClick?: () => void;
    /** état actif ou non de l'élément */
    actif?: boolean;
    /** fonction a exécuter lors du survol de la forme */
    hoverIn?: () => void;
    /** fonction à exécuter quand on cesse de survoler la forme */
    hoverOut?: () => void;
  };
  