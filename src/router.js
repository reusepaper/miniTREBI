import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CreatePost from "./views/WMCreatePostPage.vue";
import Test from "./views/Test.vue";
import WMPostPage from "./views/WMPostPage.vue"
import WMPostViewPage from "./views/WMPostViewPage.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/create",
      name: "create",
      component: CreatePost
    },
    {
      path: "/test",
      name: "test",
      component: Test
    },
    {
      path: "/postlist",
      name: "postlist",
      component: WMPostPage
    },
    {
      path: "/postview",
      name: "postview",
      component: WMPostViewPage
    }
  ]
});
