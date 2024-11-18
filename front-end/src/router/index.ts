import { createRouter, createWebHashHistory } from 'vue-router'
import RegisterView from '@/views/login/RegisterView.vue'
import LoginView from '@/views/login/LoginView.vue'
import ChatView from '@/views/chat/ChatView.vue'
import AnalyzeResultView from '@/views/code/analyze/AnalyzeResultView.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: ChatView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/analyze',
            component: AnalyzeResultView,
            props(to) {
                return { path: to.query.path }
            }
        }
    ]
})

export default router