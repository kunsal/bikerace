import Home from "../../pages/Home";
import Athlete from "../../pages/Athlete";
import About from "../../pages/About";

export const navigationLinks = [
  {title: 'Home', component: Home, link: '/', exact: true, useInNavbar: true, transparentNav: true},
  {title: 'Athletes', component: Athlete, link: '/athlete', exact: true, useInNavbar: true},
  {title: 'About', component: About, link: '/about', exact: true, useInNavbar: true},
]