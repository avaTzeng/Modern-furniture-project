<template>
    <!-- 網頁頂端的導覽區塊 -->
    <header class="header-nav">
        <span class="header-nav__logo-box">
            <img src="./assets/images/brandLogo.png" alt="Logo">
        </span>
        <nav class="navigation">
            <ul class="navigation__list">
                <li class="navigation__item">
                    <span class="navigation__link"><router-link to="/" class="navigation__link-text">Home</router-link></span>
                </li>
                <span class="navigation__divider"></span>
                <li class="navigation__item">
                    <span class="navigation__link"><router-link to="/about" class="navigation__link-text">About us</router-link></span>
                </li>
                <span class="navigation__divider"></span>
                <li class="navigation__item">
                    <span class="navigation__link"><router-link to="/shop" class="navigation__link-text">Shop</router-link></span>
                </li>
                <span class="navigation__divider"></span>
                <li class="navigation__item">
                    <span class="navigation__link"><router-link to="/contact" class="navigation__link-text">Contact</router-link></span>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    @import "./sass/base/_reset";
</style>

<style scoped lang="scss">
    .header-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 5rem; 
        
        &__logo-box {
            @include size(5rem, 5rem);

            img {
                width: 100%;
            }
        }
    }

    .navigation {
        &__list {
            @include flex-row-center;
            list-style: none;
        }

        &__item {
            @include size(6.5rem, 2rem);
            text-align: center;
            border: 2px solid red;
            // margin: 0 .1rem;

            // &::after {
            //     content: "";
            //     @include size(.3rem, 3rem);
            //     display: inline-block;
            //     background-color: blue;
            //     position: absolute;
            //     top: 50%;
            //     transform: translateY(-50%);
            //     right: 0rem;
            // }
        }

        &__link {
            @include abs-center;
            width: 100%;

            &-text {
                text-decoration: none;
                color: $color-black;
                font-family: $font-family-1;
                font-weight: 700;
            }
        }

        &__divider {
            @include size(.2rem, 1.2rem);
            background-color: blue;
            margin: 0 .1rem;
        }
    }
</style>

