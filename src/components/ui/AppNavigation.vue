<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item"><router-link to="/" class="navigation__link">Home</router-link></li>
            <li class="navigation__item"><router-link to="/about" class="navigation__link">About us</router-link></li>
            <li class="navigation__item"><router-link to="/shop" class="navigation__link">Shop</router-link></li>
            <li class="navigation__item"><router-link to="/contact" class="navigation__link">Contact</router-link></li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">

    .navigation {
        
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
                @include size(1px, 1.2rem);
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
            letter-spacing: 1px;
            font-family: $font-family-1;
            font-weight: 700;
            font-size: 1.2rem;
        }
    }

</style>