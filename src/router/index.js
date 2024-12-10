import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Education from '../components/Education.vue';
import Projects from '../components/Projects.vue';
import Blog from '../components/Blog.vue';
import Contact from '../components/Contact.vue';
import Post from '../components/Post.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/education', name: 'Education', component: Education },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/post/:id', name: 'Post', component: Post },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
