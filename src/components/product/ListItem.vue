<template>
    <div class="product-content">
        <div class="product-content__img">
            <img src="https://www.ikea.com/ca/en/images/products/bekant-conference-table-white-stained-oak-veneer-black__0736335_PE740476_S5.JPG?f=xxl" alt="Product photo">
        </div>
        <div>
            <div class="sub-title">contain your time</div>
            <div class="product-content__price sub-title">150 €</div>
        </div>
        <span class="product-content__button">
            <a href="#">buy now</a>
        </span>
        
    </div>
</template>

<style lang="scss" scoped>
    .product-content {
        width: 20rem;
        text-align: center;
        img {
            width: 100%;
            vertical-align: middle;
        }

        &__price {
            margin-top: .4rem;
        }

        &__button {
            display: inline-block;
            padding: .6rem 5rem;
            margin-top: 1.7rem;
            background-color: $color-primary;
            
            a {
                font-family: $font-family-1;
                font-weight: 600;
                text-decoration: none;
                text-transform: uppercase;
                color: $color-black;
                letter-spacing: 1px;
            }
        }
    }
</style>