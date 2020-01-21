<template>
    <div class="product-content">
        <div class="product-content__img">
            <img :src="data.imgUrl">
        </div>
        <div>
            <div class="sub-title">{{ data.name }}</div>
            <div class="product-content__price sub-title">$ {{ data.price }}</div>
        </div>
        <button>
            <span class="btn__visible">buy now</span>
            <span class="btn__invisible">click me</span>
        </button>
    </div>
</template>

<script>
    export default {
        props: ['data']
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
            margin-top: 1.7rem;
        }

        button {
            border: none;
            display: inline-block;
            padding: .8rem 5rem;
            margin-top: 2.5rem;
            background-color: $color-black;
            cursor: pointer;
            font-family: $font-family-1;
            font-weight: 600;
            text-decoration: none;
            text-transform: uppercase;
            color: $color-white;
            letter-spacing: 1px;
            transition: .15s;
            overflow: hidden;

            &::after {
                @include abs-center;
                @include size(100%,100%);
                content: "";
                display: block;
                background-color: $color-primary;
                transform-origin: left;
                transform: translate(calc(-50% - .5rem), -50%) scaleX(0);
                transition: all .35s;
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