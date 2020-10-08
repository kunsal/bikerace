import Home from "../../pages/Home";
import Location from "../../pages/Location";
import Photos from "../../pages/Photos";
import Bikers from "../../pages/Bikers";
import Biker from "../../pages/Biker";
import Contribution from "../../pages/Contribution";

export const navigationLinks = [
  {title: 'Home', component: Home, link: '/', exact: true, useInNavbar: true, transparentNav: true},
  {title: 'Bikers', component: Bikers, link: '/bikers', useInNavbar: true},
  {title: 'Bikers Location', component: Location, link: '/bikers-location', exact: true, useInNavbar: true},
  {title: 'Photos', component: Photos, link: '/photos', useInNavbar: true},
  {title: 'Biker', component: Biker, link: '/biker/:id', exact: true},
  {title: 'Contribute', component: Contribution, link: '/contribute', exact: true, useInNavbar: true},

]