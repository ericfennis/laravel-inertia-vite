<template>
    <h1>About</h1>
    <hr/>
    <Link href="/">Home page</Link>
    <HelloWorld msg="Laravel Vite Inertia"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Link } from '@inertiajs/inertia-vue3'
import HelloWorld from '@/js/components/HelloWorld.vue';
export default defineComponent({
	name: 'About',
	components: {
		HelloWorld,
        Link,
	},
});
</script>
