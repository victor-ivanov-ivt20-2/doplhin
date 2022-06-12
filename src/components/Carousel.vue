<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide">

        </slot>
    </div>    
</template>

<script>
import {ref} from "vue";
export default {
    setup() {
        const currentSlide = ref(2)

        return { currentSlide }
    }
}
</script>

<style>
</style>