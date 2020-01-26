<template>
    <div class="item">
        <img class="item-img" :src="data.imgUrl" alt="Product Photo">
        <div class="item-content">
            <span class="item-content-title">{{ data.name }}</span>
            <span class="item-content-price">{{ data.price }}€</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['data']        
    }
</script>

<style lang="scss" scoped>
    .item {
        @include size(23rem, 9rem);
        display: flex;

        &-img {
            @include size(7rem, 100%);
            object-fit: contain;
        }

        &-content {
            @include flex-column-center;
            align-items: flex-start;
            margin-left: 2rem;
            flex: 1;

            span:first-child {
                margin-bottom: 1.2rem;
            }  

            &-title {
                font-family: $font-family-2;
                font-size: 1.6rem;
                color: $color-grey-light;
                line-height: 1;
            }

            &-price {
                font-family: $font-family-1;
                font-weight: 700;
                font-size: 2rem;
                color: $color-black;
                line-height: 1;
            }
        }
    }
</style>
