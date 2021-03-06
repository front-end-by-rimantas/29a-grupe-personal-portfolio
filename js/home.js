/* IMPORTS */
import { Intro } from "./components/Intro.js";
import { FeaturedProjects } from "./components/featured-projects/FeaturedProjects.js"
import { featuredProjectsData } from "./components/featured-projects/featuredProjectsData.js";
import { About } from "./components/About.js";
import { Feedback } from "./components/Feedback.js";
import { Interface } from './components/Interface.js';
import { interfaceData } from './data/interfaceData.js';
import { Services } from "./components/services.js";
import { Counter } from "./components/counter.js";
import { Footer } from "./components/footer.js";
import { Menu } from "./components/Menu.js";

/* CODE EXECUTION */

/* HEADER START */
const menu = new Menu(".headerContainer");
menu.init();
/* HEADER END */

/* INTRODUCTION START */
const intro = new Intro(".intro");
intro.init();

/* INTRODUCTION END */

/* ABOUT START */
const about = new About(".about");
about.init();

/* ABOUT END */

/* SERVICES START */
const services = new Services(".services");
services.init();
/* SERVICES END */

/* COUNTER START */
const count = new Counter(".counteris");
count.init();
/* COUNTER END */

/* FEATURED PROJECTS START */
const featuredProjects = new FeaturedProjects(".featured-projects", featuredProjectsData);
featuredProjects.init();
/* FEATURED PROJECTS END */

/* FEEDBACK START */
const feedback = new Feedback(".feedback", Interface, interfaceData);
feedback.init();

/* FEEDBACK END */

/* PLANS START */
import { planData } from './data/planData.js';
import { planCards } from './components/plan.js';
planCards(planData);
/* PLANS END */

/* BLOG START */
/* BLOG END */

/* PARTNERS START */
/* PARTNERS END */

/* FOOTER START */
const footer = new Footer(".footer");
footer.init();
/* FOOTER END */