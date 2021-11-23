<template>
    <Head :title="title ? `${title} - Music` : 'Music'"/>
	<main>
        <slot />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Head } from '@inertiajs/inertia-vue3'

export default defineComponent({
	name: 'App',
	components: {
		Head,
	},
    props: {
       title: String,
    },
});
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
