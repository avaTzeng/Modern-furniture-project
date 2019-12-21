<template>
    <!-- 網頁頂端的導覽區塊 -->
    <div>
        <header class="header-nav">
            <span class="header-nav__logo-box">
                <img src="./assets/images/brandLogo.png" alt="Logo">
            </span>
            <div class="header-nav__contents">
                <nav class="navigation">
                    <ul class="navigation__list">
                        <li class="navigation__item"><router-link to="/" class="navigation__link">Home</router-link></li>
                        <li class="navigation__item"><router-link to="/" class="navigation__link">About us</router-link></li>
                        <li class="navigation__item"><router-link to="/" class="navigation__link">Shop</router-link></li>
                        <li class="navigation__item"><router-link to="/" class="navigation__link">Contact</router-link></li>
                    </ul>
                </nav>
                <span class="header-nav__info-pnl">
                    <svg class="header-nav__shopping-cart-icon">
                        <use xlink:href="./assets/sprites_icon.svg#icon-shopping-cart"></use>
                    </svg>
                </span>
            </div>
        </header>
        <router-view></router-view>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    @import "./sass/base/_reset";
    @import "./sass/base/typography";
    @import "./sass/component/button.scss";
</style>

<style scoped lang="scss">
    .header-nav {
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

        &__shopping-cart-icon {
            @include size(2rem, 2rem);
            color: $color-black;
            vertical-align: middle;
        }
    }

    .navigation {
        margin-right: 1.5rem;

        &__list {
            list-style: none;
        }

        &__item {
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            line-height: 1.5rem;
            padding: 0 1.5rem;

            &:not(:last-child)::after {
                content: "";
                @include size(.2rem, 1.2rem);
                display: inline-block;
                background-color: $color-black;
                position: absolute;
                top: 50%;
                right: 0%;
                transform: translate(50%, -50%);
            }
        }

        &__link {
            text-decoration: none;
            color: $color-black;
            font-family: $font-family-1;
            font-weight: 700;
            font-size: 1.2rem;
        }
    }
</style>

