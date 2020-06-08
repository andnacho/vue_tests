const MyLink = { template: '<div>Mi link</div>'};
const MyLogo = { template: '<div>Mi Logo</div>'};
import Main from "./Server/Main.vue";

export const routes = [
    { path: '/my-link', component: MyLink},
    { path: '/my-logo', component: MyLogo},
    { path: '/main', component: Main}
];