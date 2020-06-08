<template>
    <div class="container text-center">
        <div class="appWindow">
            <transition name="newComponent" mode="out-in">
                <keep-alive>
                    <component :is="dynamicComponent" style="width: 100%"></component>
                </keep-alive>
            </transition>
        </div>
        <div class="container">
            <button @click="dynamicComponent = 'serverCmp'" class="btn btn-primary">Main</button>
            <button @click="dynamicComponent = 'gamesCmp'" class="btn btn-warning">Games</button>
            <button @click="dynamicComponent = 'formCmp'" class="btn btn-success">Form</button>
            <button @click="dynamicComponent = 'filterMixinsCmp'" class="btn bg-danger">Filters and mixing</button>
            <button v-customOn:click="clicked" class="btn btn-info">Custon directives</button>
        </div>
        <div>
            <h1>Hello my friend</h1>
            <p>
                <router-link to="/my-link">Vamos a buscar</router-link>
                <router-link to="/my-logo">Conocer todo</router-link>
                <router-link to="/main">Otra puesta en escena</router-link>
            </p>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Main from "./Server/Main.vue";
    import MainGames from "./games/Main.vue";
    import Form from "./form/Form.vue";
    import FilterMixing from "./filterMixins/Main.vue";

    export default {
        data() {
            return {
                dynamicComponent: 'serverCmp'
            }
        },
        directives: {
            customOn: {
                bind(el, binding) {
                    // el.onclick = function() {
                    //     binding.value();
                    // }
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        },
        components: {
            'serverCmp': Main,
            'gamesCmp': MainGames,
            'formCmp': Form,
            'filterMixinsCmp': FilterMixing
        },
        methods: {
            clicked() {
                alert('I was clicked')
            }
        }
    }

</script>

<style>
    .appWindow {
        min-height: 500px;
        border: 1px dotted olivedrab;
        margin: 1em;
        padding: 1em;
    }

    .newComponent-enter-active {
        animation: newComponent-in 0.2s ease-out forwards;
    }

    .newComponent-leave-active {
        animation: newComponent-out 0.2s ease-out forwards;
    }

    @keyframes newComponent-in {
        from {
           opacity: 0%;
        }
        to {
            opacity: 100%;
        }
    }

    @keyframes newComponent-out {
        from {
            opacity: 100%;
        }
        to {
            opacity: 0%;
        }
    }
</style>
