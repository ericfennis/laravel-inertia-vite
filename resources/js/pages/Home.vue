<template>
    <h1>Home</h1>
    <hr/>
    <Link href="/about">About page</Link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Link } from '@inertiajs/inertia-vue3'

export default defineComponent({
	name: 'Home',
	components: {
        Link,
	},
});
</script>
