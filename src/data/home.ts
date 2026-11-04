import alessandroBogliolo from "../assets/team/AlessandroBogliolo.jpg";
import raffaellaServadei from "../assets/team/raffaellaServadei.jpg";
import alessandroAldini from "../assets/team/alessandroAldini.jpg";
import cunoLorenzKlopfenstein from "../assets/team/cunoLorenzKlopfenstein.jpg";
import gabrieleMarra from "../assets/team/gabrieleMarra.png";
import fabioGiglietto from "../assets/team/fabioGiglietto.png";
import brendanDominicPaolini from "../assets/team/brendanDominicPaolini.jpg";
import saverioPriori from "../assets/team/saverioPriori.jpg";
import paoloPolidori from "../assets/team/paoloPolidori.jpg";
import francescaMartinuzzi from "../assets/team/francescaMartinuzzi.png";
import gianMarcoDiFrancesco from "../assets/team/gianMarcoDiFrancesco.png";
import miriamPetrocchi from "../assets/team/miriamPetrocchi.png";

import logoSpinOff from "../assets/partners/logo_spinoff.png";
import logoUniurb from "../assets/partners/logo_uniurb.png";
import logoPoloict from "../assets/partners/logo_poloict.png";
import logoGiunti from "../assets/partners/logo_giunti.png";
import logoCampuStore from "../assets/partners/logo_campustore.png";

export interface Feature {
  title: string;
  description: string;
  href: string;
}

export interface Person {
  name: string;
  role: string;
  image: ImageMetadata;
}

export interface Partner {
  name: string;
  href?: string;
  image: ImageMetadata;
}

export const hero = {
  title: "La tecnologia ha valore quando genera valore per le persone.",
  description:
    "DIGIT sviluppa ricerca, software e strumenti digitali per trasformare la conoscenza in innovazione concreta, accessibile e capace di produrre un impatto positivo sulla società.",
};

export const about = {
  label: "Su di noi",
  title: "L'unione tra sociale e digitale per un futuro migliore",
  items: [
    {
      title: "Cultura digitale",
      description:
        "Promuoviamo una maggiore consapevolezza nell’uso delle tecnologie, attraverso strumenti e progetti dedicati alla diffusione delle competenze digitali.",
      href: "#",
    },
    {
      title: "Pensiero computazionale",
      description:
        "Sviluppiamo attività e strumenti che utilizzano il coding per stimolare logica, creatività, capacità di analisi e risoluzione dei problemi.",
      href: "#",
    },
    {
      title: "Impatto concreto",
      description:
        "Progettiamo tecnologie capaci di generare valore reale: facilitare la partecipazione, rendere accessibile la conoscenza e favorire comportamenti positivi.",
      href: "#",
    },
  ] satisfies Feature[],
};

export const team = {
  label: "Conosciamoci",
  title: "Membri del team",
  description:
    "Competenze tecniche e soft skills complementari che aiutano a concretizzare i vostri e nostri obiettivi",
  members: [
    {
      name: "Alessandro Bogliolo",
      role: "Legale rappresentante",
      image: alessandroBogliolo,
    },
    {
      name: "Raffaella Servadei",
      role: "Socia",
      image: raffaellaServadei,
    },
    {
      name: "Alessandro Aldini",
      role: "Socio",
      image: alessandroAldini,
    },
    {
      name: "Cuno Lorenz Klopfenstein",
      role: "Socio & CTO",
      image: cunoLorenzKlopfenstein,
    },
    {
      name: "Gabriele Marra",
      role: "Socio",
      image: gabrieleMarra,
    },
    {
      name: "Fabio Giglietto",
      role: "Socio",
      image: fabioGiglietto,
    },
    {
      name: "Brendan Dominic Paolini",
      role: "Socio & CFO",
      image: brendanDominicPaolini,
    },
    {
      name: "Saverio Priori",
      role: "Socio",
      image: saverioPriori,
    },
    {
      name: "Paolo Polidori",
      role: "Socio",
      image: paoloPolidori,
    },
    {
      name: "Francesca Martinuzzi",
      role: "Socia",
      image: francescaMartinuzzi,
    },
    {
      name: "Gian Marco Di Francesco",
      role: "Programmatore Flutter",
      image: gianMarcoDiFrancesco,
    },
    {
      name: "Miriam Petrocchi",
      role: "Programmatrice web",
      image: miriamPetrocchi,
    },
  ] satisfies Person[],
};

export const services = {
  label: "Alla ricerca dell’innovazione",
  title: "I nostri servizi",
  items: [
    {
      title: "Ricerca e sviluppo",
      description:
        "Come Spin-Off dell’università di Urbino ‘Carlo Bo’ abbiamo risorse specifiche per R&S",
      href: "#",
    },
    {
      title: "Soluzioni software",
      description:
        "Sviluppo full-stack di prodotti software ad alto valore sociale e tecnologico, sia web che mobile cross-platform",
      href: "#",
    },
    {
      title: "Coding & educazione",
      description:
        "Strumenti e risorse per alunni, insegnanti, e chiunque sia interessato al mondo del coding",
      href: "#",
    },
  ] satisfies Feature[],
};

export const partners = {
  title: "Partner & collaborazioni",
  items: [
    {
      name: "Università di Urbino Carlo Bo",
      href: "https://www.uniurb.it/",
      image: logoUniurb,
    },
    {
      name: "Spin-off dell’Università di Urbino Carlo Bo",
      href: "https://www.uniurb.it/it/ateneo/spin-off",
      image: logoSpinOff,
    },
    {
      name: "Polo ICT Marche",
      href: "https://www.poloictmarche.it/",
      image: logoPoloict,
    },
    {
      name: "Giunti Editore",
      href: "https://www.giunti.it/",
      image: logoGiunti,
    },
    {
      name: "CampuStore",
      href: "https://www.campustore.it/",
      image: logoCampuStore,
    },
  ] as Partner[],
};
