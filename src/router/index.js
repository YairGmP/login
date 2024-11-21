import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter,createWebHistory } from "vue-router";

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        { path:"/",component: () => import("../components/Home.vue")},
        { path:"/Register", component: () => import("../components/register.vue")},
        { path:"/Sign-in", component: () => import("../components/SignIn.vue")},
        { 
            path:"/Feed", 
            component: () => import("../components/feed.vue"),
            meta: {
                requiresAuth: true,
            },
        },
    ]
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            }, 
            reject
        );
    });
};

router.beforeEach((async(to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        const user = await getCurrentUser();
        if (user) {
            next();
        } else {
            alert("You dont have access!")
            next("/sing-in")
        }
    } else {
        next();
    }
}));

export default router;