import cardImage1 from './assets/images/card-1.webp';
import cardImage2 from './assets/images/card-2.webp';
import cardImage3 from './assets/images/card-3.webp';
import cardImage4 from './assets/images/card-4.webp';
import cardImage5 from './assets/images/card-5.webp';

export const cards = [
  {
    id: 0,
    name: 'cluedin',
    labels: {
      title: 'CluedIn',
      subtitle: 'Pioneering data integration solutions',
    },
    img: {
      src: cardImage1,
      alt: 'Man holding laptop showing software integration',
    },
  },
  {
    id: 1,
    name: 'oneResponse',
    labels: {
      title: 'OneResponse',
      subtitle: 'Medical patient data application',
    },
    img: {
      src: cardImage2,
      alt: 'Ambulance moving fast with emergency lights on',
    },
  },
  {
    id: 2,
    name: 'acronymSearch',
    labels: {
      title: ' Acronym Search',
      subtitle: 'Defence industry acronym search web application',
    },
    img: {
      src: cardImage3,
      alt: 'Different hands surrounding an iPad',
    },
  },
  {
    id: 3,
    name: 'codesplanation',
    labels: {
      title: 'Codesplanation',
      subtitle: 'Learning tool for code explanation',
    },
    img: {
      src: cardImage4,
      alt: 'Varied lines of code displayed on a computer screen',
    },
  },
  {
    id: 4,
    name: 'portfolio',
    labels: {
      title: 'Portfolio',
      subtitle: 'Personal portfolio website',
    },
    img: {
      src: cardImage5,
      alt: 'Hand holding a lightbulb out towards the sky',
    },
  },
];
