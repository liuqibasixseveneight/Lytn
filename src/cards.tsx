import acronymSearch from './assets/images/acronymSearch.webp';
import oneResponse from './assets/images/oneResponse.webp';
import cluedin from './assets/images/cluedin.webp';
import codesplanation from './assets/images/codesplanation.webp';
import portfolio from './assets/images/portfolio.webp';

export const cards = [
  {
    id: 0,
    name: 'cluedin',
    labels: {
      title: 'CluedIn',
      subtitle: 'Pioneering data integration solutions',
    },
    img: {
      src: cluedin,
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
      src: oneResponse,
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
      src: acronymSearch,
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
      src: codesplanation,
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
      src: portfolio,
      alt: 'Hand holding a lightbulb out towards the sky',
    },
  },
];
