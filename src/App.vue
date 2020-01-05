<template>
    <div>
        <header class="header">
            <router-link class="header__logo-box" to="/">
                <img src="./assets/images/brandLogo.png" alt="Logo">
            </router-link>
            <div class="header__contents">
                <app-navigation :isEnableActiveVfx="true"></app-navigation>
                <span class="info-pnl" @mouseover="isShowShoppingCart=true" @mouseout="isShowShoppingCart=false">
                    <svg class="info-pnl__shopping-cart-icon">
                        <use xlink:href="./assets/sprites_icon.svg#icon-shopping-cart"></use>
                    </svg>
                </span>
                <div v-if="isShowShoppingCart" class="shopping-cart" @mouseover="isShowShoppingCart=true" @mouseout="isShowShoppingCart=false">
                    <div>
                        <app-shopping-cart-item class="shopping-cart__item"></app-shopping-cart-item>
                        <app-shopping-cart-item class="shopping-cart__item"></app-shopping-cart-item>
                        <app-shopping-cart-item class="shopping-cart__item"></app-shopping-cart-item>
                    </div>

                    <div class="shopping-cart__info">
                        <div class="shopping-cart__contents">
                            <span class="shopping-cart__title">Total:</span>
                            <span class="shopping-cart__total-price">150 €</span>
                        </div>
                        <div class="shopping-cart__btns">
                            <button class="btn--black"><span>view card</span></button>
                            <button class="btn--black"><span>check out</span></button>
                        </div>
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
            <span class="footer__bg">
                <img src="./assets/images/cover_footer.png" alt="Footer background">
            </span>
        </footer>
    </div>
</template>

<script>
    import Navigation from './components/ui/AppNavigation.vue';
    import ShoppingCartItem from './components/shoppingCart/AppListItem.vue';

    export default {
        data() {
            return {
                isShowShoppingCart: false
            };
        },
        components: {
            appNavigation: Navigation,
            appShoppingCartItem: ShoppingCartItem
        } 
    }
</script>

<style lang="scss">
    @import "./sass/base/_reset";
    @import "./sass/base/_typography";
    @import "./sass/component/_button.scss";
    @import "./sass/component/_paragraph.scss";
</style>

<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4rem 4rem 0 4rem;
        
        &__logo-box {
            @include size(5rem, 5rem);

            img {
                width: 100%;
            }
        }

        &__contents {
            @include flex-row-center;
        }

        .info-pnl {
            margin-left: 1.5rem;
            transform: scale(1);
            transition: .15s;

            &:hover {
                transform: scale(1.2);
            }

            &__shopping-cart-icon {
                @include size(2rem, 2rem);
                color: $color-black;
                vertical-align: middle;
            }
        }

//----- 購物車點出來的視窗 ------
        .shopping-cart {
            @include flex-column-center;
            position: absolute;
            right: 0;
            bottom: 0;
            transform: translateY(calc(100% + 1rem));
            z-index: 5;
            background-color: $color-white;
            padding: 2rem;
            box-shadow: 0 1rem 1rem rgba($color-black, .3);

            &__item:not(:last-child) {
                margin-bottom: 1rem;
            }

            &__info {
                @include flex-column-center;
                align-items: flex-start;
                width: 100%;
                margin-top: 3.5rem;

                &::before {
                    @include size(100%, 1px);
                    content: "";
                    display: block;
                    position: absoulte;
                    top: 0;
                    transform: translateY(-1.25rem);
                    background-color: $color-grey-light;
                }
            }

            &__contents {
                @include flex-row-center;
                justify-content: flex-start;
                margin-bottom: 1rem;
            }

            &__title {
                font-family: $font-family-2;
                font-size: 1.5rem;
                color: $color-grey-light;
            }

            &__total-price {
                margin-left: 3rem;
                font-family: $font-family-1;
                font-size: 1.5rem;
                font-weight: 700;
                color: $color-black;
            }

            &__btns {
                @include flex-column-center;
                width: 100%;

                button:first-child {
                    margin-bottom: 1rem;
                }

                button {
                    width: 100%;
                    padding: .8rem 0;
                    border: none;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 500;
                    transition: .15s;
                    overflow: hidden;

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
                        letter-spacing: 2px;
                        color: black;
                        &::before {
                            transform: translateY(-50%) scaleX(1);
                        }
                    }
                }
            }
        }
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 4rem 2rem 4rem;

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
                margin-left: 7rem;    
            }

            svg {
                @include size(2rem, 2rem);
                color: $color-black;
            }
        }

        &__info {
            font-family: $font-family-2;
        }

        &__bg {
            width: 100%;
            height: 65rem;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0);
            z-index: -2;
            overflow: hidden;

            img {
                height: 100%;
                left: -25rem;
                opacity: .5;
            }
        }
    }
</style>

