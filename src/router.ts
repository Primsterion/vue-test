import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import BaseLayout from "@layouts/base-layout.vue";
import PageHome from "@pages/home/home.vue";
import PageOther from "@pages/other/other.vue";
import PageEmployerForm from "@pages/employer-form/employer-form.vue";
import PageLogin from "@pages/login/login.vue";


const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "layout",
      path: "/",
      component: BaseLayout,
      children: [
        {
          name:"home",
          path: "",
          component: PageHome
        },
        {
          name:"other",
          path: "other/:id?",
          component: PageOther,
          meta: {
            allowAnonymous: true
          }
        },
        {
          name: "employer",
          path: "employer/:id?",
          component: PageEmployerForm
        },
        {
          name: "login",
          path: "login",
          component: PageLogin,
          meta: {
            allowAnonymous: true
          }
        }

      
        // {
        //   path: "Новости",
        //   component: EmptyLayout,
        //   children:[
        //     {
        //       name: "news",
        //       path: "",
        //       component: PageNews,
        //       meta: {
        //         title: "Новости"
        //       }
        //     },
        //     {
        //       name: "news-detail",
        //       path: ":code",
        //       component: PageNewsDetail
        //     }
        //   ]
        // },
        
      ]
    }
    // {
    //     name: loginRoute.name,
    //     path: "/" + routeLangPrefix + "/login",
    //     component: LoginComponent,
    //     meta: {
    //         allowAnonymous: true,
    //         title: "Авторизация"
    //     }
    // },
    // {
    //     name: '404',
    //     path: "*",
    //     component: LoginComponent,
    //     meta: {
    //         allowAnonymous: true,
    //         title: "Авторизация"
    //     }
    // },
  ]
});

router.beforeEach((to, from, next) => {
  
  if(!to.meta.allowAnonymous){
    Vue.$mainStore.setLoading(true);
    Vue.$api.UserService.GetCurrentUserEvent.once(async (res) => {
      if(res.IsSuccess){
        Vue.$mainStore.setAuthorized(res.Value.IsAuthorized);

        if(!res.Value.IsAuthorized){
          router.push({name: 'login'});
        }else if(to.name == 'login'){
          router.push({name: to.name ?? 'home'});
        }

      }else{
        router.push({name: 'login'});
      }

      Vue.$mainStore.setLoading(false);
    })

    Vue.$api.UserService.GetCurrentUser();

  }else{
    if(to.name === 'login'){
      Vue.$api.UserService.GetCurrentUserEvent.once(async (res) => {
        if(res.IsSuccess){
          Vue.$mainStore.setAuthorized(res.Value.IsAuthorized);
          if(res.Value.IsAuthorized){
            router.push({name: 'home'});
          }
        }
  
        Vue.$mainStore.setLoading(false);
        
      })

      Vue.$api.UserService.GetCurrentUser();
    }
  }

 


//  console.log(to, from, next);
  //var title = Vue.$mainStore.PageTitle;
  // if (to.meta.title) {
  //   if (title) title = `${to.meta.title} | ${title}`;
  //   else title = to.meta.title;
  // }
  // document.title = title;
  // console.log("document.head.title", document.head.title);


  // if(!Vue.$mainStore.SchoolInfo){
  //   Vue.$api.SchoolService.GetSchoolInfoEvent.once(()=>{
  //     next();
  //   });
  //   Vue.$api.SchoolService.GetSchoolInfo();
  // }
  // else
    next();
  
});

export default router;
