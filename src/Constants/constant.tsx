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
  { value: 1, label: "jan", theme: "sky" },
  { value: 2, label: "feb", theme: "pink" },
  { value: 3, label: "mar", theme: "voilet" },
  { value: 4, label: "april", theme: "yellow" },
  { value: 5, label: "may", theme: "red" },
  { value: 6, label: "june", theme: "hotpink" },
];

export const footer_Links = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@frnz.com", link: "mailto:customer@frnz.com" },
      { name: "+91555", link: "tel:+91555" },
    ],
  },
];

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

// export const val_agent = [
//   {
//     value: 1,
//     src: "https://i.ibb.co/FH0K3j8/valorant-sage.png",
//     alt: "valorant-Sage",
//     label: "Sage",
//     role: "Sentinel",
//     discription: "",
//     redirect: "/",
//     details: "Barrier Orb, Slow Orb , Healing Orb , Resurrection",
//     abilities: {
//       First: {
//         value: 1,
//         quantity: 1,
//         type: "First",
//         power: "Wall",
//         icon: "",
//         discription: "Sage Wall Stops the enemies pushes",
//       },
//       Second: {
//         value: 1,
//         quantity: 1,
//         type: "Second",
//         power: "slow orbs",
//         icon: "",
//         discription: "Sage Wall is the best Wall",
//       },
//       Main: {
//         value: 1,
//         quantity: 1,
//         type: "main",
//         power: "Heal",
//         icon: "",
//         discription: "Sage Wall is the best Wall",
//       },
//       Ultimate: {
//         value: 1,
//         quantity: 1,
//         type: "Ultimate",
//         power: "Revive",
//         icon: "",
//         discription: "Sage Wall is the best Wall",
//       },
//     },
//   },
//   {
//     value: 2,
//     src: "https://i.ibb.co/v4nD0g4/valorant-jett.png",
//     alt: "valorant-Jett",
//     label: "Jett",
//     role: "Duelist",
//     discription: "",
//     redirect: "/",
//     details: "Cloudburst,Updraft, Tailwind , Blade Storm",
//   },
//   {
//     value: 3,
//     src: "https://i.ibb.co/LdTYnC3/valorant-skye.png",
//     alt: "valorant-Skye",
//     label: "Skye",
//     role: "Initiator",
//     discription: "",
//     redirect: "/",
//     details: "TRAILBLAZER, REGROWTH, GUIDING LIGHT , SEEKERS",
//   },
//   {
//     value: 4,
//     src: "https://i.ibb.co/2FpPJqq/valorant-reyna.png",
//     alt: "valorant-Reyna",
//     label: "Reyna",
//     role: "Duelist",
//     discription: "",
//     redirect: "/",
//     details: "DEVOUR, DISMISS, LEER , EMPRESS",
//   },
//   {
//     value: 5,
//     src: "https://i.ibb.co/VBtV8jD/valorant-fade.png",
//     alt: "valorant-Fade",
//     label: "Fade",
//     role: "Initiators",
//     discription: "",
//     redirect: "/",
//     details: "Seize, Prowler, Haunt , Nightfall",
//   },
//   {
//     value: 6,
//     src: "https://i.ibb.co/p18z6w5/valorant-yoru.png",
//     alt: "valorant-Yoru",
//     label: "Yoru",
//     role: "Duelist",
//     discription: "",
//     redirect: "/",
//     details: "FAKEOUT,BLINDSIDE, GATECRASH,  DIMENSIONAL DRIFT",
//   },
//   {
//     value: 7,
//     src: "https://i.ibb.co/cTdL6rL/valorant-brim.png",
//     alt: "valorant-Brim",
//     label: "Brimstone",
//     role: "Controller",
//     discription: "",
//     redirect: "/",
//     details: "STIM BEACON, INCENDIARY, SKY SMOKE,ORBITAL STRIKE",
//   },
// ];
