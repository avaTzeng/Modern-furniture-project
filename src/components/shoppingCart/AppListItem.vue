<template>
    <div class="item">
        <span class="item-img"></span>
        <span class="item-content">
            <span class="item-content-title">Light throughout</span>
            <span class="item-content-price">150 €</span>
        </span>
    </div>
</template>

<style lang="scss" scoped>
    .item {
        @include flex-row-center;

        &-img {
            @include size(5.3rem, 6rem);
            background-color: blue;
        }

        &-content {
            @include flex-column-center;
            align-items: flex-start;
            margin-left: 2rem;

            span:first-child {
                margin-bottom: .15rem;
            }  

            &-title {
                font-family: $font-family-2;
                font-size: 1.3rem;
                color: $color-grey-light;
            }

            &-price {
                font-family: $font-family-1;
                font-weight: 700;
                font-size: 1.4rem;
                color: $color-black;
            }
        }
    }
</style>

