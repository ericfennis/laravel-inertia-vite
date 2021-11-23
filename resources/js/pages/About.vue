<template>
    <h1>About</h1>
    <hr/>
    <Link href="/">Home page</Link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Link } from '@inertiajs/inertia-vue3'

export default defineComponent({
	name: 'About',
	components: {
        Link,
	},
});
</script>
