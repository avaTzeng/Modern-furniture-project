<template>
    <div class="grid">
        <app-product-grid-item v-for="(product, index) in products" :key="index" :data="product"></app-product-grid-item>
    </div>
</template>

<script>
    import GridItem from './AppGridItem';
    export default {
        props: ['products'],
        components: {
            appProductGridItem: GridItem
        }
    }
</script>

<style scoped lang="scss">
    .grid {
        width: 100%;

        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 10rem;
        grid-column-gap: 5rem;

    }
</style>