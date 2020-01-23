<template>

    <div style="padding: 10px;">

        <b-input-group>

            <template v-slot:prepend>
                <b-dropdown text="Types" variant="danger">
                    <b-dropdown-item>Ténebres</b-dropdown-item>
                    <b-dropdown-item>Dragon</b-dropdown-item>
                    <b-dropdown-item>Féé</b-dropdown-item>
                    <b-dropdown-item>Féé</b-dropdown-item>
                    <b-dropdown-item>Feu</b-dropdown-item>
                    <b-dropdown-item>Plante</b-dropdown-item>
                    <b-dropdown-item>Electrique</b-dropdown-item>
                    <b-dropdown-item>Acier</b-dropdown-item>
                    <b-dropdown-item>Psy</b-dropdown-item>
                    <b-dropdown-item>Eau</b-dropdown-item>
                </b-dropdown>
            </template>

            <b-form-input></b-form-input>

            <b-input-group-append>
                <b-button class="bg-danger">
                    <b-icon icon="search"></b-icon>
                </b-button>
            </b-input-group-append>

        </b-input-group>

        <div style="margin-top: 10px;">
            <List />
        </div>


    </div>

</template>

<script>

    import List from './List'

    export default {

        components: {
            List
        },

    }

</script>
