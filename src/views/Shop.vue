<template>
    <main>
        <section class="section-shop">
            <nav class="navigation">
                <ul class="navigation__list">
                    <router-link to="/" tag="li"  class="navigation__list-item" active-class="active" exact>
                        <span class="navigation__list-icon">
                            <img src="../assets/images/shoppage/icon-table.png" alt="">
                        </span>

                        <span>
                            <span class="sub-title">table</span>
                            <p>Made from natural</p>
                        </span>
                    </router-link>

                    <router-link to="/" tag="li"  class="navigation__list-item" active-class="active" exact>
                        <span class="navigation__list-icon">
                            <img src="../assets/images/shoppage/icon-sofa.png" alt="">
                        </span>

                        <span>
                            <span class="sub-title">sofa</span>
                            <p>Made from natural</p>
                        </span>
                    </router-link>

                    <router-link to="/" tag="li"  class="navigation__list-item" active-class="active" exact>
                        <span class="navigation__list-icon">
                            <img src="../assets/images/shoppage/icon-lamp.png" alt="">
                        </span>

                        <span>
                            <span class="sub-title">light</span>
                            <p>Made from natural</p>
                        </span>
                    </router-link>

                    <router-link to="/" tag="li"  class="navigation__list-item" active-class="active" exact>
                        <span class="navigation__list-icon">
                            <img src="../assets/images/shoppage/icon-bed.png" alt="">
                        </span>

                        <span>
                            <span class="sub-title">bed</span>
                            <p>Made from natural</p>
                        </span>
                    </router-link>
                </ul>
            </nav>
            <div class="section-shop__product-grid">
                <div class="section-shop__product-grid-row">
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                </div>
                <div class="section-shop__product-grid-row">
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                </div>
                <div class="section-shop__product-grid-row">
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                </div>
            </div>
            <span class="section-shop__pagination">
                <a href="#">❮ Prev</a>
                <a href="#">Next ❯</a>
            </span>
        </section>
    </main>
</template>

<script>
    import ProductItem from '@/components/product/AppGridItem';
    export default {
        components: {
            appProductItem: ProductItem
        }
    }
</script>

<style lang="scss" scoped>

    .section-shop {
        @include flex-column-center;
        width: $row-max-width;
        margin: 0 auto;

//----------- NAVIGATION ----------- 
        .navigation {
            width: 100%;
            margin-top: 6rem;

            &__list {
                @include flex-row-center;
                justify-content: space-between;
                list-style: none;

                &-item {
                    @include flex-row-center;
                    cursor: pointer;

                    p {
                        margin-top: .1rem;
                        color: $color-grey-light;
                    }
                }

                &-icon {
                    height: 3rem;
                    margin-right: 1.4rem;

                    img {
                        height: 100%;
                        vertical-align: middle;
                    }
                }
            }
        }

//----------- PRODUCT-GRID ----------- 
        &__product-grid {
            @include flex-column-center;
            width: 100%;
            margin-top: 10rem;

            &-row {
                @include flex-row-center;
                width: 100%;
                justify-content: space-between;
            }

            & > div:not(:last-child) {
                margin-bottom: 8rem;
            }
        }


//----------- PAGINATION ----------- 
        &__pagination {
            margin-top: 7rem;
            margin-bottom: 15rem;
            align-self: flex-end;

            a {
                display: inline-block;
                padding: .7rem 1.2rem;
                font-family: $font-family-1;
                font-weight: 600;
                text-decoration: none;
                color: $color-black;
                background: $color-grey-bright;
                cursor: pointer;

                &:not(:last-child) {
                    margin-right: 1.2rem;
                }
            }
        }
    }

    
</style>