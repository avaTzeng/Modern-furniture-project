<template>
    <div class="product-content">
        <div class="product-content__img">
            <img :src="data.imgUrl">
        </div>
        <div>
            <div class="sub-title">{{ data.name }}</div>
            <div class="product-content__price sub-title">$ {{ data.price }}</div>
        </div>
        <button class="product-content__button">
            <!-- <span class="btn__visible">Book now</span>
            <span class="btn__invisible">Onlu 4 rooms left</span> -->
            <span>buy now</span>
        </button>
    </div>
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {
                isHover: false
            };
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    .product-content {
        text-align: center;
        img {
            width: 100%;
            vertical-align: middle;
        }

        &__price {
            margin-top: .4rem;
        }

        button {
            border: none;
            display: inline-block;
            padding: .8rem 5rem;
            margin-top: 1.7rem;
            background-color: $color-primary;
            cursor: pointer;
            font-family: $font-family-1;
            font-weight: 600;
            text-decoration: none;
            text-transform: uppercase;
            color: $color-black;
            letter-spacing: 1px;

            &:hover,
            &:active {
                filter: brightness(105%);
            }
        }
    }
</style>