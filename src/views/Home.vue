<template>
    <main>
        <section class="section-header">
            <nav>
                <ul>
                    <li><a href="#">01</a><span></span></li>
                    <li><a href="#">02</a><span></span></li>
                    <li><a href="#">03</a><span></span></li>
                    <li><a href="#">04</a><span></span></li>
                    <li><a href="#">05</a><span></span></li>
                </ul>
                <div class="chevron-btns-grp">
                    <span class="chevron-btns-grp__icon">
                        <svg>
                            <use xlink:href="../assets/sprites_icon_entypo.svg#icon-triangle-up"></use>
                        </svg>
                    </span>
                    
                    <span class="chevron-btns-grp__icon">
                        <svg>
                            <use xlink:href="../assets/sprites_icon_entypo.svg#icon-triangle-down"></use>
                        </svg>
                    </span>
                </div>
            </nav>
            
            <div class="section-header__contents">
                <span class="section-header__title">softness in the arms of nature</span>
                <span class="section-header__img-bg">
                    <img src="../assets/images/homepage/cover_01.jpeg" alt="Mountain Photo">
                </span>
                <span class="section-header__img-product">
                    <img src="../assets/images/furniture/bed/bed_01.png" alt="Product Photo">
                </span>
            </div>
        </section>
        <section class="section-intro">
            
            <div class="section-intro__story">
                <span class="section-intro__block">
                    <span class="section-intro__contents">
                        <h2>inspiration from nature</h2>
                        <p class="p--fore-line">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <a href="#" class="btn btn--normal">view more</a>
                    </span>
                    <img src="../assets/images/homepage/cover_02.jpg" alt="Mountain Photo">
                </span>
            </div>
            
            
            <div class="section-intro__banner">
                <span class="section-intro__banner-contents">
                    <span>furniture creative</span>
                    <h2>latest collection</h2>
                    <a href="#" class="btn btn--normal">show all</a>
                </span>
    
                <span class="section-intro__banner-img">
                    <img src="../assets/images/homepage/moreCollection.jpg" alt="Collection 1">
                </span>
                <span class="section-intro__banner-img">
                    <img src="../assets/images/homepage/moreCollection.jpg" alt="Collection 2">
                </span>
            </div>
        </section>

        <section class="section-product">
            <div class="section-product__slogan">product creative</div>
            <div class="section-product__title">
                <h2>creative world in your hands</h2>
                <span class="section-product__title-sub">view all product</span>
            </div>
            
             <app-product-grid :products="showOffProducts"></app-product-grid>
             
        </section>
        <section class="section-customer">
            <span class="section-customer__img">
                <img src="../assets/images/homepage/companyLogos.png" alt="Companies's logo">
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
        </section>
    </main>
</template>

<script>
    import ProductGrid from '@/components/product/AppGrid';
    export default {
        data() {
            return {
                // products: this.$store.state.dataMap.get('SHOW_OFF')
            };
        },
        components: {
            appProductGrid: ProductGrid
        },
        computed: {
            showOffProducts() {
                return this.$store.state.dataMap.get('SHOW_OFF');
            }
        }
    }
</script>



<style scoped lang="scss">

//-------------------- SECTION-HEADER --------------------
    .section-header {
        margin-bottom: $u-margin-bottom-section-md;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        overflow: hidden;

        nav {
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translate(6rem, 0);

            ul {
                list-style: none;
                margin-bottom: 9rem;

                li {
                    padding: 1.5rem;

                    &:not(:last-child) {
                        margin-bottom: 1rem;
                    }

                    &:hover {
                        a {
                            color: $color-black;
                            font-size: 2rem;
                            transform: translate(calc(-50% - 1.4rem), -50%);
                            transform-origin: top right;
                        }

                        span {
                            height: 3rem;
                            opacity: 1;
                            transform: translate(calc(50% - .8rem), -50%);
                        }
                    }
                }

                a {
                    @include abs-center;
                    font-family: $font-family-1;
                    font-size: 1.3rem;
                    font-weight: 300;
                    text-decoration: none;
                    cursor: default;
                    color: $color-grey-light;
                    transition: .15s ease-in-out;
                }

                span {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translate(calc(50% - .8rem), -50%);
                    width: .1rem;
                    height: 0rem;
                    background-color: $color-black;
                    opacity: 0;
                    transition: .2s ease-in-out;
                }
            }

            .chevron-btns-grp {
                @include flex-column-center;
                right: .65rem;

                &__icon {
                    @include size(100%, 3rem);
                    background-color: $color-grey-bright-2;

                    &:first-child {
                        margin-bottom: .5rem;
                    }

                    svg {
                        @include abs-center;
                        @include size(50%, 50%);
                        fill: $color-black;
                    }
                }
            }
        }

        &__contents {
            width: 105rem;
            height: 50rem;
            img {
                width: 100%;
            }
        }

        &__title {
            width: 55rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(calc(-50% + 5rem), calc(-50% - 1rem));
            z-index: 1;

            font-size: 7rem;
            font-family: $font-family-1;
            font-weight: 800;
            text-transform: uppercase;
            color: $color-black;
        }

        &__img-bg {
            img {
                opacity: 0.5;
            }
        }

        &__img-product {
            width: 58rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(calc(-50% - 45rem), calc(-50% + 8rem));
            z-index: 6;
            img {
                opacity: 1;
            }
        }
    }
//-------------------- SECTION-INTRO --------------------
    .section-intro {
        margin-bottom: $u-margin-bottom-section-md * 2;

        &::before {
            @include abs-center;
            @include size(100%, 100%);
            content: "";
            background-image: url("../assets/images/homepage/cover_03.jpg");
            background-size: cover;
            background-position: top;
            opacity: .2;
            z-index: -1;
        }
        
        &__story {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            overflow: hidden;
        }

        &__block {
            width: 85rem;
            height: 50rem;
            img {
                width: 100%;
            }
        }

        &__contents {
            width: 45rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(calc(-50% + 50rem), calc(-50% - 2rem));
            z-index: 1;
            color: $color-black;

            p {
                width: 80%;
                margin-top: 1.8rem;
                margin-bottom: 3rem;
            }
        }

        &__banner {
            @include flex-row-center;
            position: relative;
            margin: 0 auto;
            width: $row-max-width;
            padding: $u-margin-bottom-section-md 0;

            &-contents {
                @include abs-center;
                @include flex-column-center;
                z-index: 1;
                color: $color-black;

                span {
                    text-transform: uppercase;
                    font-family: $font-family-1;
                    font-weight: 800;
                    letter-spacing: .1rem;
                    
                }

                h2 {
                    margin-top: 1.5rem;
                    margin-bottom: 2rem;
                }
            }

            &-img {
                @include size(50%, 27rem);
                background-color: yellow;
                overflow: hidden;

                &:first-child {
                    img {
                        left: 0;
                    }
                }

                &:last-child {
                    margin-left: 2rem;
                    img {
                        right: 50%;
                    }
                }

                img {
                    height: 100%;
                }
            }
        }
    }
//-------------------- SECTION-PRODUCT --------------------
    .section-product {
        max-width: $row-max-width;
        margin: 0 auto;

        &__slogan {
            color: $color-primary;
            text-transform: uppercase;
            font-family: $font-family-1;
            font-weight: 800;
            margin-bottom: 1.5rem;
        }

        &__title {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 7rem;

            h2 {
                display: inline-block;
            }

            &-sub {
                text-transform: uppercase;
                font-family: $font-family-1;
                font-weight: 600;
                letter-spacing: .2rem;
                color: $color-black;
                font-size: 1rem;
                
                &::before {
                    @include size(4rem, 1px);                
                    content: "";
                    background-color: $color-black;
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translate(calc(-50% - 3rem), -50%);
                }

            }
        }
    }

//-------------------- SECTION-CUSTOMER --------------------
    .section-customer {
        @include flex-column-center;
        margin-top: 25rem;
        margin-bottom: 15rem;

        p {
            margin-top: 3.5rem;
            margin-bottom: 2.5rem;
            width: 60rem;
            text-align: center;
            color: $color-grey-light;
        }

        &__img {
            width: 85rem;
            img {
                vertical-align: middle;
                width: 100%;
            }
        }
    }
</style>