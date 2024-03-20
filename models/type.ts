interface InfoItem {
  name: string;
  info: string;
  icon: JSX.Element;
}

interface AboutSectionItem {
  header: string;
  description: string;
  content: string;
  btnText: string;
  link: string;
  image: string;
}

interface MenuIcon {
  name: string;
  desc: string;
  icon: JSX.Element;
}

interface Event {
  name: string;
  desc: string;
  image: string;
}

interface Testimonial {
  name: string;
  location: string;
  customerImage: string;
  feedback: string;
  comment: string;
}

interface Blog {
  title: string;
  time: string;
  image: string;
  desc?: string;
}

export type { InfoItem, MenuIcon, Event, Testimonial, Blog, AboutSectionItem };