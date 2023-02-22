import Home from '@/view/home/index.vue';
import Read from '@/view/read/index.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/read', component: Read, name: 'read' },
];
export default routes;
