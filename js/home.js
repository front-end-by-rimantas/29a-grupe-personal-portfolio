/* IMPORTS */
import { Intro } from "./components/Intro.js";
import { About } from "./components/About.js";
import { Feedback } from "./components/Feedback.js";
import { Interface } from './components/Interface.js';
import { interfaceData } from './data/interfaceData.js';

/* CODE EXECUTION */

/* HEADER START */
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
/* SERVICES END */

/* COUNTER START */
/* COUNTER END */

/* FEATURED PROJECTS START */
/* FEATURED PROJECTS END */

/* FEEDBACK START */
const feedback = new Feedback(".feedback", Interface, interfaceData);
feedback.init();

/* FEEDBACK END */

/* PLANS START */
/* PLANS END */

/* BLOG START */
/* BLOG END */

/* PARTNERS START */
/* PARTNERS END */

/* FOOTER START */
/* FOOTER END */