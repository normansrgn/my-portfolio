const images = import.meta.glob('./images/*.{png,jpg,jpeg,svg}', { eager: true });

export const ways = [
  {
    title: "Example Project 1",
    disc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: images['./images/01.svg'].default,
  },
  {
    title: "Example Project 2",
    disc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: images['./images/02.svg'].default,
  },
  {
    title: "Example Project 3",
    disc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: images['./images/03.svg'].default,
  },
  {
    title: "Example Project 4",
    disc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: images['./images/04.svg'].default,
  },
];
