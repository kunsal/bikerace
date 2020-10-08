import Home from "../../pages/Home";
import Athlete from "../../pages/Athlete";
import About from "../../pages/About";
import Photos from "../../pages/Photos";
import Bikers from "../../pages/Bikers";
import Biker from "../../pages/Biker";

export const navigationLinks = [
  {title: 'Home', component: Home, link: '/', exact: true, useInNavbar: true, transparentNav: true},
  {title: 'Athletes', component: Athlete, link: '/athlete', exact: true, useInNavbar: true},
  {title: 'Bikers', component: Bikers, link: '/bikers', useInNavbar: true},
  {title: 'Photos', component: Photos, link: '/photos', useInNavbar: true},
  {title: 'About', component: About, link: '/about', exact: true, useInNavbar: true},
  {title: 'Biker', component: Biker, link: '/biker/:id', exact: true},

]