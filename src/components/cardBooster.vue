<template>

    <div>

        <router-link :to="'/pkmnInBooster/' + this.data.code">
            <b-card
                    :img-src="this.data.logoUrl"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
            </b-card>
        </router-link>

    </div>

</template>

<script>

    import Vue from 'vue';
    import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';

    Vue.use(BootstrapVue);
    Vue.use(IconsPlugin);

    export default {
        props: ['data'],
        data: function () {
            return {
                item: this.data
            }
        }
    }

</script>
