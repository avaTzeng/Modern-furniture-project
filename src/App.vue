<template>
    <div>
        <header class="header">
            <router-link class="header__logo-box" to="/">
                <img src="./assets/images/brandLogo.png" alt="Logo">
            </router-link>
            <div class="header__contents">
                <app-navigation :isEnableActiveVfx="true"></app-navigation>
                <span class="info-pnl">
                    <svg class="info-pnl__shopping-cart-icon" @click="isShowShoppingCart = !isShowShoppingCart">
                        <use xlink:href="./assets/sprites_icon.svg#icon-shopping-cart"></use>
                    </svg>
                </span>

                <div v-if="isShowShoppingCart" class="shopping-cart">
                    <div class="shopping-cart__items">
                        <app-shopping-cart-item v-for="(item, index) in shoppingCartItems" :key="index" :data="item"></app-shopping-cart-item>
                        <span v-if="isShoppingCartItemTooMuch" class="shopping-cart__more-items">more ...</span>    
                    </div>
                    
                    <div class="shopping-cart__info">
                        <div class="shopping-cart__contents">
                            <span class="shopping-cart__title">Total:</span>
                            <span class="shopping-cart__total-price">{{ shoppingCartTotalPrice }} €</span>
                        </div>

                        <router-link class="shopping-cart__btn" to="/shoppingcart">
                            <button class="btn--black"><span>view cart</span></button>
                        </router-link>
                    </div>
                </div>
            </div>
        </header>

        <router-view></router-view>
        
        <footer class="footer">
            <app-navigation class="footer__nav" :isEnableActiveVfx="false"></app-navigation>
            <ul class="footer__social-media-list">
                <li>
                    <a href="https://www.facebook.com/" target="_blank">
                        <svg><use xlink:href="./assets/sprites_icon.svg#icon-social-facebook"></use></svg>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/?lang=zh-tw" target="_blank">
                        <svg><use xlink:href="./assets/sprites_icon.svg#icon-social-twitter"></use></svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                        <svg><use xlink:href="./assets/sprites_icon.svg#icon-social-pinterest"></use></svg>
                    </a>
                </li>
            </ul>
            <span class="footer__info">©2015 CopyRight HeadPassion. All rights reserved.</span>
            <img class="footer__bg" src="./assets/images/cover_footer.png" alt="Footer background">
        </footer>
    </div>
</template>

<script>
    import Navigation from './components/ui/AppNavigation.vue';
    import ShoppingCartItem from './components/shoppingCart/AppShortCutListItem.vue';

    export default {
        data() {
            return {
                isShowShoppingCart: false,
                shoppingCartMaxCount: 4
            };
        },
        computed: {
            shoppingCartItems() {
                if(this.isShoppingCartItemTooMuch) {
                    return this.$store.getters.getShoppingCartItems.slice(0, this.shoppingCartMaxCount);
                } else {
                    return this.$store.getters.getShoppingCartItems;
                }
            },
            shoppingCartTotalPrice() {
                return this.$store.getters.getTotalPrice;
            },
            isShoppingCartItemTooMuch() {
                const result = (this.$store.getters.getShoppingCartItems.length > this.shoppingCartMaxCount) ? true : false;
                return result;
            }
        },
        components: {
            appNavigation: Navigation,
            appShoppingCartItem: ShoppingCartItem
        } 
    }
</script>

<style lang="scss">
    @import "./sass/base/_reset";
    @import "./sass/base/_grid";
    @import "./sass/base/_typography";
    @import "./sass/component/_button";
    @import "./sass/component/_paragraph";
</style>

<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4.2rem 7.5rem 0 7.5rem;
        
        &__logo-box {
            @include size(8rem, 8rem);

            img {
                width: 100%;
            }
        }

        &__contents {
            @include flex-row-center;
        }

        .info-pnl {
            margin-left: 4.5rem;

            &__shopping-cart-icon {
                @include size(2.8rem, 2.8rem);
                cursor: pointer;
                fill: $color-black;
                vertical-align: middle;
            }
        }

//----- 購物車點出來的視窗 ------
        .shopping-cart {
            @include flex-column-center;
            position: absolute;
            right: 0;
            bottom: 0;
            transform: translateY(calc(100% + 2.7rem));
            z-index: 5;
            background-color: $color-white;
            padding: 3rem 0 3rem 0;
            width: 30rem;
            box-shadow: 0 .5rem 2rem rgba($color-black, .2);

            &__items {
                margin-bottom: 4.5rem;
                text-align: center;

                & div:not(:last-child) {
                    margin-bottom: 1rem;
                }
            }

            &__more-items {
                font-family: $font-family-2;
                font-size: 1.6rem;
                line-height: 0;
                color: $color-grey-light;
                letter-spacing: 1px;
            }
 
            &__info {
                @include flex-column-center;
                width: 100%;
            
                &::before {
                    @include size(100% , 1px);
                    content: "";
                    display: block;
                    position: absoulte;
                    top: 0;
                    left: 0;
                    transform: translateY(-2.5rem);
                    background-color: $color-grey-light;
                }
            }

            &__contents {
                @include flex-row-center;
                width: 23rem;
                justify-content: flex-start;
                margin-bottom: 2.3rem;
            }

            &__title {
                font-family: $font-family-2;
                font-size: 2rem;
                color: $color-black;
                line-height: 1;
            }

            &__total-price {
                margin-left: 5.2rem;
                font-family: $font-family-1;
                font-size: 2rem;
                font-weight: 700;
                color: $color-black;
                line-height: 1;
            }

            &__btn {
                @include flex-column-center;
                width: 23rem;

                text-decoration: none;

                button {
                    width: 100%;
                    height: 4rem;
                    border: none;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: 500;
                    font-size: 1.3rem;
                    transition: .15s;
                    overflow: hidden;
                    outline: none;

                    span {
                        z-index: 2;
                    }

                    &::before {
                        @include size(105%, 105%);
                        content: "";
                        display: block;
                        background-color: $color-primary;
                        position: absolute;
                        top: 50%;
                        left: 0;
                        transform-origin: left;
                        transform: translateY(-50%) scaleX(0);
                        z-index: 1;
                        transition: .2s;
                    }

                    &:hover {
                        letter-spacing: 3px;
                        color: black;
                        &::before {
                            transform: translateY(-50%) scaleX(1);
                        }
                    }

                    &:active {
                        &::before {
                            background-color: darken($color-primary, 10%);
                        }
                    }
                }
            }
        }
    }

    .footer {
        width: 100%;
    
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 7.5rem 6.2rem 7.5rem;

        &__nav {
            margin-left: -1.8rem;
        }

        &__social-media-list {
            @include flex-row-center;
            list-style: none;

            li {
                cursor: pointer;
            }

            li:not(:first-child) {
                margin-left: 9rem;    
            }

            svg {
                @include size(2.5rem, 2.5rem);
                fill: $color-black;
            }
        }

        &__info {
            font-family: $font-family-2;
            font-size: 1.6rem;
            color: $color-black;
        }

        &__bg {
            width: 100%;
            height: auto;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0);
            z-index: -2;
            overflow: hidden;
            opacity: .5;
        }
    }
</style>

