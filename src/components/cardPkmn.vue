<template>

    <div>

        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="this.data.imageUrl" :img-alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body :title="this.data.name">
                        <b-card-text>
                            id : {{this.data.id}} <br />
                            Booster : {{this.data.set}} <br />
                            Rareté :  {{this.data.rarity}} <br />
                            Pv : {{this.data.hp}} <br />
                            Artiste : {{this.data.artist}} <br />
                            Nombre  : {{this.data.number}} <br />
                            Id National Dex : {{this.data.nationalPokedexNumber}}
                        </b-card-text>
                        <b-button href="#" variant="primary">Favoris</b-button>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>

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
