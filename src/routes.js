import appContact from './components/appContact.vue';
import appAbout from "./components/appAbout.vue";
import appWork from "./components/appWork.vue";
import appHome from "./components/appHome.vue";



export const routes = [
    { path:'/contact', component:appContact },
    { path:'/about', component:appAbout },
    { path:'/work', component:appWork },
    { path:'/', component:appHome }
    
    
 

];