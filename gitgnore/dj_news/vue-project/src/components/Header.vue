<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    cocktai: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div>
        <h1>Python</h1>

        <nav>
            <li><a>Home</a></li>
            <li><a>block</a></li>
            <li><a>aboute</a></li>
        </nav>
    </div>
</template>