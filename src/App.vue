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

        <router-view></router-view>
        
        <footer class="footer">
            <app-navigation class="footer__nav"></app-navigation>
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
    import Navigation from './components/ui/AppNavigation.vue';

    export default {
        components: {
            appNavigation: Navigation
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
        padding: 2.5rem 3rem 0 3rem;
        
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

    

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        // margin-top: 15rem;
        padding: 0 3rem 2.5rem 3rem;

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
    }

    
</style>

