import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CreatePost from "./views/WMCreatePostPage.vue";
import Loading from "./views/Loading.vue";
import WMPostPage from "./views/WMPostPage.vue";
import WMPostViewPage from "./views/WMPostViewPage.vue";
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
      path: "/create",
      name: "create",
      component: CreatePost
    },
    {
      path: "/postlist/*",
      name: "postlist",
      component: WMPostPage
    },
    {
      path: "/postview",
      name: "postview",
      component: WMPostViewPage
    },
    {
      path: "/loading",
      name: "loading",
      component: Loading
    }
    // {
    //   path: "/postlist/:id",
    //   name: "postview",
    //   component: WMPostViewPage
    // }
  ]
});
