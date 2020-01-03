<template>
    <div>
        <header class="header">
            <span class="header__logo-box">
                <img src="./assets/images/brandLogo.png" alt="Logo">
            </span>
            <div class="header__contents">
                <app-navigation :isEnableActiveVfx="true"></app-navigation>
                <span class="header__info-pnl">
                    <svg class="header__shopping-cart-icon">
                        <use xlink:href="./assets/sprites_icon.svg#icon-shopping-cart"></use>
                    </svg>
                </span>
            </div>
        </header>

        <router-view></router-view>
        
        <footer class="footer">
            <app-navigation class="footer__nav" :isEnableActiveVfx="false"></app-navigation>
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
            <span class="footer__bg">
                <img src="./assets/images/cover_footer.png" alt="Footer background">
            </span>
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

