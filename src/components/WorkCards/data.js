const images = import.meta.glob('./images/*.{png,jpg,jpeg,svg}', { eager: true });

export const ways = [
  {
    title: "Example Project 1",
    disc: "Create impressive web applications with my expertise. I turn your concepts into functional and stylish websites that attract and retain customers.",
    img: images['./images/01.svg'].default,
  },
  {
    title: "Example Project 2",
    disc: "Enhance your online presence with our expert web development services. Transform your ideas into stunning, responsive websites that engage users.",
    img: images['./images/02.svg'].default,
  },
  {
    title: "Example Project 3",
    disc: "Optimize your business with my innovative web development solutions. I build fast and interactive websites that deliver an exceptional user experience.",
    img: images['./images/03.svg'].default,
  },
  {
    title: "Example Project 4",
    disc: "Elevate your brand with my custom web development services. I design unique and effective websites that perfectly align with your business goals and user needs.",
    img: images['./images/04.svg'].default,
  },
];
