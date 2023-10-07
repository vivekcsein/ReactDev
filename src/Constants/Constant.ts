import { Images_logo } from "./Assets.js";
import { Valorant_agents_info } from "./Agents.js";

export const Valorant_agents = Valorant_agents_info;

export const products_DropDown = [
  { value: 1, href: "#products1", label: "Products 1" },
  { value: 2, href: "#products2", label: "Products 2" },
  { value: 3, href: "#products3", label: "Products 3" },
];

export const nav_Links = [
  { value: 1, href: "#home", label: "Home", dropdown: false },
  { value: 2, href: "#about-us", label: "About Us", dropdown: false },
  {
    value: 3,
    href: "#products",
    label: "Products",
    dropdown: true,
    details: products_DropDown,
  },
  { value: 4, href: "#contact-us", label: "Contact Us", dropdown: false },
];

export const log_Sign = [
  { key: "log", label: "log in", href: "#log" },
  { key: "sign", label: "sign in", href: "#sign" },
];

export const social_Media = [
  { src: Images_logo[1].href, alt: "logo_facebook" },
  { src: Images_logo[2].href, alt: "logo_twitter" },
  { src: Images_logo[3].href, alt: "logo_instagram" },
];

export const monthy_Theme = [
  { id: 1, label: "jan", theme: "skyblue" },
  { id: 2, label: "feb", theme: "pink" },
  { id: 3, label: "mar", theme: "voilet" },
  { id: 4, label: "april", theme: "yellow" },
  { id: 5, label: "may", theme: "red" },
  { id: 6, label: "june", theme: "hotpink" },
];

export const season_Theme = [
  { id: 1, label: "Spring", theme: "pink" },
  { id: 2, label: "Summer", theme: "yellow" },
  { id: 3, label: "Rainy", theme: "skyblue" },
  { id: 4, label: "Winter", theme: "skyblue" },
];

export const footer = {
  footer_message: "Copyright © 2023 FRENZZ Pvt. Ltd All Right are Reserved",

  footer_Links: [
    {
      id: 1,
      title: "Top Products",
      links: [
        { id: 1, name: "Valorant", link: "/" },
        { id: 2, name: "CS 2", link: "/" },
        { id: 3, name: "Farlight 84", link: "/" },
        { id: 4, name: "GTA 5", link: "/" },
        { id: 5, name: "Mp Game", link: "/" },
      ],
    },
    {
      id: 2,
      title: "About US",
      links: [
        { id: 1, name: "About us", link: "/" },
        { id: 2, name: "FAQs", link: "/" },
        { id: 3, name: "How it works", link: "/" },
        { id: 4, name: "Privacy policy", link: "/" },
        { id: 5, name: "Payment policy", link: "/" },
      ],
    },
    {
      id: 3,
      title: "Get in touch",
      links: [
        { id: 1, name: "customer@frnz.com", link: "mailto:customer@frnz.com" },
        // { id: 2, name: "Phone", link: "tel:+91555" },
      ],
    },
  ],
};

export const Card_List = [
  {
    value: 1,
    src: "https://i.ibb.co/jfzT9yV/frnz-tom-01.png.png",
    alt: "frnz-tom-01",
    label: "Labrador",
    details: "Like Subscribe & share",
  },
  {
    value: 1,
    src: "https://i.ibb.co/yfKfB71/frnz-tom-02.png",
    alt: "frnz-tom-02",
    label: "Pomerian",
    details: "Like Subscribe & share",
  },
  {
    value: 1,
    src: "https://i.ibb.co/9VzqKLC/frnz-tom-03.png",
    alt: "frnz-tom-03",
    label: "Skye",
    details: "Like Subscribe & share",
  },
  {
    value: 1,
    src: "https://i.ibb.co/nnJ6F6q/frnz-tom-04.png",
    alt: "frnz-tom-04",
    label: "Sage",
    details: "Like Subscribe & share",
  },
];
