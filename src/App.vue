<template>
    <!-- 網頁頂端的導覽區塊 -->
    <div>
        <header class="header">
            <span class="header__logo-box">
                <img src="./assets/images/brandLogo.png" alt="Logo">
            </span>
            <div class="header__contents">
                <app-navigation></app-navigation>
                <span class="header__info-pnl">
                    <svg class="header__shopping-cart-icon">
                        <use xlink:href="./assets/sprites_icon.svg#icon-shopping-cart"></use>
                    </svg>
                </span>
            </div>
        </header>

        <main>
            <router-view></router-view>
            <section class="section-customer">
                <span class="section-customer__img">
                    <img src="./assets/images/homepage/companyLogos.png" alt="Companies's logo">
                </span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
            </section>
        </main>
        
        <footer class="footer">
            <app-navigation></app-navigation>
            <ul class="footer__social-media-list">
                <li>
                    <a href="#">
                        <svg><use xlink:href="./assets/sprites_icon.svg#icon-social-facebook"></use></svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg><use xlink:href="./assets/sprites_icon.svg#icon-social-twitter"></use></svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg><use xlink:href="./assets/sprites_icon.svg#icon-social-pinterest"></use></svg>
                    </a>
                </li>
            </ul>
            <span class="footer__info">©2015 CopyRight HeadPassion. All rights reserved.</span>
        </footer>
    </div>
    
</template>

<script>
    import Navigation from './components/ui/Navigation.vue';

    export default {
        components: {
            appNavigation: Navigation
        }
    }
</script>

<style lang="scss">
    @import "./sass/base/_reset";
    @import "./sass/base/typography";
    @import "./sass/component/button.scss";
</style>

<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2.5rem 3rem; 
        
        &__logo-box {
            @include size(5rem, 5rem);

            img {
                width: 100%;
            }
        }

        &__contents {
            @include flex-row-center;
        }

        &__info-pnl {
            margin-left: 1.5rem;
        }

        &__shopping-cart-icon {
            @include size(2rem, 2rem);
            color: $color-black;
            vertical-align: middle;
        }
    }

    .section-customer {
        @include flex-column-center;
        margin-top: 28rem;

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
                width: 100%;
            }
        }
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 15rem 2.5rem 2rem 2.5rem;

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
    }

    
</style>

