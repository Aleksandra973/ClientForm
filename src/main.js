import Vue from 'vue'
import './styte-test.sass'
import App from "./App.vue";
import Vuelidate from "vuelidate/src";

Vue.use(Vuelidate)

new Vue({
    render: h => h(App),
}).$mount('#app')
