<template>
    <div class="page">
        <span class="page-title">{{ content.title }}</span>
        <span class="page-img-bg">
            <span :style="{'background-image': `url(${require(`@/assets/images/homepage/${content.bgFileName}`)})`}"></span>
        </span>
        <span class="page-img-product">
            <img :src="require(`@/assets/images/homepage/furniture/${content.productFileName}`)" alt="Product Photo">
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
            width: 55rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(calc(-50% + 10rem), calc(-50% - 3rem));
            z-index: 1;

            font-size: 7rem;
            font-family: $font-family-1;
            font-weight: 800;
            text-transform: uppercase;
            color: $color-black;
            white-space: initial;
        }

        &-img-bg {
            span {
                float: right;
                height: 100%;
                width: 80%;
                background-size: cover;
                background-attachment: fixed;
                filter: opacity(35%);
            }
        }

        &-img-product {
            height: 32rem;
            position: absolute;
            transform: translate(-2rem, 17rem);
            top: 0;
            left: 0;
            
            z-index: 6;
            img {
                opacity: 1;
                height: 100%;
            }
        }
    }
</style>