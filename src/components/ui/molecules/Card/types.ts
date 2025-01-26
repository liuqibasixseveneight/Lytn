export type CardProps = {
  id: number;
  name: string;
  labels: {
    title: string;
    subtitle: string;
  };
  img: {
    src: string;
    alt: string;
  };
};
