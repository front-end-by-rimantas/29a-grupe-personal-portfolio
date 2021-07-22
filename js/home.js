/* IMPORTS */
import { Intro } from "./components/Intro.js";
import { FeaturedProjects } from "./components/featured-projects/FeaturedProjects.js"
import { featuredProjectsData } from "./components/featured-projects/featuredProjectsData.js";
/* CODE EXECUTION */

/* HEADER START */
/* HEADER END */

/* INTRODUCTION START */
const intro = new Intro(".intro");
intro.init();

/* INTRODUCTION END */

/* ABOUT START */
/* ABOUT END */

/* SERVICES START */
/* SERVICES END */

/* COUNTER START */
/* COUNTER END */

/* FEATURED PROJECTS START */
const featuredProjects = new FeaturedProjects(".featured-projects", featuredProjectsData);
featuredProjects.init();
/* FEATURED PROJECTS END */

/* FEEDBACK START */
/* FEEDBACK END */

/* PLANS START */
/* PLANS END */

/* BLOG START */
/* BLOG END */

/* PARTNERS START */
/* PARTNERS END */

/* FOOTER START */
/* FOOTER END */