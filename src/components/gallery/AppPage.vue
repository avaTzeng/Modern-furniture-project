<template>
    <div class="page">
        <span class="page-title">{{ content.title }}</span>
        <span class="page-img-product">
            <img :src="content.imgUrl_1x" :srcset="`${content.imgUrl_1x} 1x, ${content.imgUrl_2x} 2x`" alt="Product Photo">
        </span>
    </div>    
</template>

<script>
    export default {
        props: ['content'],   
    }
</script>

<style lang="scss" scoped>
    .page {
        display: inline-block;
        @include size(100%, 100%);
        
        &-title {
            width: 70rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(calc(-50% + 18rem), calc(-50% - 8rem));
            z-index: 1;

            font-size: 10rem;
            font-family: $font-family-1;
            font-weight: 800;
            text-transform: uppercase;
            color: $color-black;
            white-space: initial;
            line-height: 1;
        }

        &-img-product {
            width: 50%;
            position: absolute;
            transform: translate(0, 0);
            bottom: 0;
            left: 0;
            
            z-index: 6;
            img {
                opacity: 1;
                width: 100%;
            }
        }
    }
</style>