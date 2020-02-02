<template>
    <div @click="handleClosingInfoPnl($event)">
        <div class="alert-pnl">
            <div class="alert-pnl__contents">
                <div class="alert-pnl__title">傢俱網頁作品並無製作 RWD 部分，若想觀看 RWD 的掌握度請參考另外一個作品</div>
                <div class="alert-pnl__links">
                    <div class="alert-pnl__qrcode">
                        <div>連結方式一： QR Code</div>
                        <img src="https://i.imgur.com/OPOO7lI.png" alt="Qrcode of another work">
                    </div>
                    <div class="alert-pnl__website-link">
                        <div>連結方式二： 網頁連結</div>
                        <div>
                            <a href="https://gustablo-restaurant-project.web.app/">Gustablo Restaurant</a>
                        </div>       
                    </div>
                </div>
            </div>
        </div>

        <header class="header">
            <router-link class="header__logo-box" to="/">
                <img src="https://i.imgur.com/taFwYNQ.png" alt="Logo">
            </router-link>
            <div class="header__contents">
                <app-navigation :isEnableActiveVfx="true"></app-navigation>
                <span id="infoPnl" class="info-pnl">
                    <button aria-label="Shopping cart" id="shoppingCartShortCutBtn" @click="isShowShoppingCart = !isShowShoppingCart">
                        <svg>
                            <use xlink:href="./assets/sprites_icon.svg#icon-shopping-cart"></use>
                        </svg>
                        <div v-if="shoppingCartItemsTotalCount > 0" id="shoppingCountBubble">
                            <span>{{ shoppingCartItemsTotalCount }}</span>
                        </div>
                    </button>

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
                                <button class="btn--black" @click="isShowShoppingCart = false">view cart</button>
                            </router-link>
                        </div>
                    </div>
                </span>   
            </div>
        </header>

        <router-view></router-view>
        
        <footer class="footer">
            <app-navigation class="footer__nav" :isEnableActiveVfx="false"></app-navigation>
            <ul class="footer__social-media-list">
                <li>
                    <a href="https://www.facebook.com/" target="_blank" aria-label="facebook link">
                        <svg><use xlink:href="./assets/sprites_icon.svg#icon-social-facebook"></use></svg>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/?lang=zh-tw" target="_blank" aria-label="twitter link">
                        <svg><use xlink:href="./assets/sprites_icon.svg#icon-social-twitter"></use></svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.pinterest.com/" target="_blank" aria-label="pinterest link">
                        <svg><use xlink:href="./assets/sprites_icon.svg#icon-social-pinterest"></use></svg>
                    </a>
                </li>
            </ul>
            <span class="footer__info">©2015 CopyRight HeadPassion. All rights reserved.</span>
            <img class="footer__bg" src="https://i.imgur.com/ztMQreS.png" alt="Footer background">
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
        methods: {
            handleClosingInfoPnl(event) {
                if(!event.target.closest('.info-pnl')) {
                    this.isShowShoppingCart = false;
                }
            }
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
            },
            shoppingCartItemsTotalCount() {
                return this.$store.getters.getTotalItemsCount;
            }
        },
        components: {
            appNavigation: Navigation,
            appShoppingCartItem: ShoppingCartItem
        },
        mounted() {
            window.addEventListener('scroll', () => {
                if(window.scrollY > 60) {
                    document.getElementById('shoppingCartShortCutBtn').classList.add('info-pnl__button-stick');
                    document.getElementById('infoPnl').classList.add('info-pnl--stick');
                } else {
                    document.getElementById('shoppingCartShortCutBtn').classList.remove('info-pnl__button-stick');
                    document.getElementById('infoPnl').classList.remove('info-pnl--stick');
                }
            });
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
    .alert-pnl {
        display: none;
        @include size(100%, 100vh);
        position: fixed;
        background-color: rgba($color-primary, .9);
        z-index: 10000;
        text-align: center;

        @media only screen and (max-width: 75em) { // 1200px = tab-land
             display: block;
        }

        &__contents {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, calc(-50% - 2rem));
            font-size: 2rem;
            width: 100%;


            & img {
                width: 20rem;
            }
        }

        &__title {
            width: 70%;
            margin: 0 auto;
            font-weight: 500;
            color: $color-black;
            margin-bottom: 4rem;
        }

        &__links {
            @include flex-column-center;
            width: 50rem;
            margin: 0 auto;
        }

        &__qrcode, &__website-link {
            font-size: 1.7rem;
            line-height: 1;
            & > div:first-child {
                padding: 1.2rem 1.2rem;
                background-color: $color-red;
                margin-bottom: 1.5rem;
                color: $color-white;
                border-radius: .8rem;
            }
        }

        &__website-link {
            margin-top: 5rem;

            a,
            a:link,
            a:visited {
                color: $color-black;
                font-size: 2rem;
                font-weight: 500;
                border-bottom: 1px solid $color-black;
                padding: 1px 0;
                text-decoration: none;
            }

            a:hover,
            a:active {
                font-weight: 700;
                border-bottom: 2px solid $color-black;
            }

           
        }
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4.2rem 7.5rem 0 7.5rem;

        &__logo-box {
            @include size(6rem, 6rem);

            img {
                width: 100%;
            }
        }

        &__contents {
            @include flex-row-center;
        }

        .info-pnl {
            margin-left: 4.5rem;

            // --- 將購物車快捷視窗變成 fixed
            position: fixed;
            top: 0;
            right: 0;
            transform: translate(-5rem, 5.6rem);
            transition: transform .2s ease-out;
            
            z-index: 5000;
            // ---------------------------
            
            // 按鈕黏住
            &__button-stick {

                &::after {
                    box-shadow: 0 .5rem 1rem rgba($color-black, .1);
                }
            }

            // 本身黏住
            &--stick {
                transform: translate(-4rem, 4rem);
            }

            & > button {
                @include size(2.8rem, 2.8rem);
                cursor: pointer;
                outline: none;
                border: none;
                background-color: transparent;

                &::after {
                    @include size(160%, 160%);
                    @include abs-center;
                    border-radius: 100%;
                    z-index: -1;
                    content: "";
                    display: block;
                    background-color: $color-white;
                }

                & svg {
                    @include size(100%, 100%);
                    fill: $color-black;
                    vertical-align: middle;
                }
            }

            & #shoppingCountBubble {
                @include size(2.5rem, 2.5rem);
                border-radius: 50%;
                position: absolute;
                top: 0;
                right: 0;
                transform: translate(50%, -50%);
                z-index: 10;
                background-color: $color-red;

                & span {
                    @include abs-center;
                    font-family: $font-family-2;
                    font-size: 1.6rem;
                    color: $color-white;
                    line-height: 1;
                }
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

                    &:hover {
                        letter-spacing: 3px;
                    }

                    &:active {
                        background-color: darken($color-black, 10%);
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

