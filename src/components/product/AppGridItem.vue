<template>
    <div class="product-content">
        <router-link :to="{ name: 'shopDetail', params: { name: data.name, category: data.category }}">
            <img class="product-content__img" :src="data.imgUrl" :alt="data.name">    
        </router-link>
        
        <div>
            <div class="sub-title">{{ data.name }}</div>
            <div class="product-content__price sub-title">$ {{ data.price }}</div>
        </div>
        <button @click="addToCart" >
            <span class="btn__visible">add to cart</span>
            <span class="btn__invisible">click me</span>
        </button>
    </div>
</template>

<script>
    export default {
        props: ['data'],
        methods: {
            addToCart() {
                const shoppingItemData = {
                    name: this.data.name,
                    id: this.data.id,
                    price: this.data.price,
                    imgUrl: this.data.imgUrl,
                    count: 1
                };
                this.$store.dispatch('addShoppingCartItem', shoppingItemData);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .product-content {
        text-align: center;
        img {
            width: 100%;
            vertical-align: middle;
            margin-bottom: .5rem;
            border: 1rem solid transparent;

            &:active {
                border: 1rem solid $color-primary;
            }
        }

        &__price {
            margin-top: 1.7rem;
        }

        button {
            @include size(20rem, 4rem);
            border: none;
            display: inline-block;
            padding: .8rem 5rem;
            margin-top: 2.5rem;
            background-color: $color-black;
            cursor: pointer;
            font-family: $font-family-1;
            font-weight: 600;
            font-size: 1.3rem;
            text-decoration: none;
            text-transform: uppercase;
            color: $color-white;
            letter-spacing: 1px;
            transition: .15s;
            overflow: hidden;
            outline: none;

            &::after {
                @include abs-center;
                @include size(100%,100%);
                content: "";
                display: block;
                background-color: $color-primary;
                transform-origin: left;
                transform: translate(calc(-50% - .5rem), -50%) scaleX(0);
                transition: transform .35s;
            }

            &:hover,
            &:active {

                &::after {
                    transform: translate(calc(-50% - .5rem), -50%) scaleX(1.1);
                }
                
                color: $color-black;
                .btn__visible {
                    top: 3rem;
                }

                .btn__invisible {
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            &:active {
                 &::after {
                    background-color: darken($color-primary, 7%);
                }
            }

            & > * {
                display: inline-block;
                transition: all .2s;
            }

            .btn__visible {
                top: 0;
                z-index: 2;
            }

            .btn__invisible {
                position: absolute;
                left: 50%;
                top: -50%;
                transform: translate(-50%, 0);
                z-index: 2;
            }
        }
    }
</style>