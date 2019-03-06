import appContact from './components/appContact.vue';
import appAbout from "./components/appAbout.vue";
import appWork from "./components/appWork";
import appHamubrgerMenu from "./components/appHamubrgerMenu";


export const routes = [
    { path:'/contact', component:appContact },
    { path:'/about', component:appAbout },
    { path:'/work', component:appWork },
    { path:'/menu', component:appHamubrgerMenu },
    
 

];