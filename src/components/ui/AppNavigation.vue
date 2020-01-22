<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item"><router-link to="/" class="navigation__item-link" :active-class="(isEnableActiveVfx ? 'navigation__item-link--active' : '')" exact>Home</router-link></li>
            <li class="navigation__item"><router-link to="/about" class="navigation__item-link" :active-class="(isEnableActiveVfx ? 'navigation__item-link--active' : '')">About us</router-link></li>
            <li class="navigation__item"><router-link to="/shop/table" class="navigation__item-link" :active-class="(isEnableActiveVfx ? 'navigation__item-link--active' : '')">Shop</router-link></li>
            <li class="navigation__item"><router-link to="/contact" class="navigation__item-link" :active-class="(isEnableActiveVfx ? 'navigation__item-link--active' : '')">Contact</router-link></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: ['isEnableActiveVfx']        
    }
</script>

<style scoped lang="scss">
    .navigation {
        // border: 1px solid red;
        
        &__list {
            list-style: none;
        }

        &__item {
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            line-height: 1;
            padding: 0 1.7rem;

            &:not(:last-child)::after {
                content: "";
                @include size(1px, 1.5rem);
                display: inline-block;
                background-color: $color-black;
                position: absolute;
                top: 50%;
                right: 0%;
                transform: translate(50%, -50%);
            }
            
            &-link {
                padding: 0rem .5rem;
                text-decoration: none;
                color: $color-black;
                letter-spacing: 1px;
                font-family: $font-family-1;
                font-weight: 600;
                font-size: 1.6rem;
                transition: .15s;
                top: 0;

                transform: rotateZ(5deg);

                &::before {
                    @include size(115%,1rem);
                    @include abs-center;
                    content: "";
                    display: block;
                    background-color: $color-primary;
                    transform-origin: left;
                    transform: translate(-50%, -50%) scaleX(0);
                    transition: .2s;
                    z-index: -1;
                }

                &:hover {
                    top: -.5rem;
                }

                &--active {
                    &::before {
                        transform: translate(-50%, -50%) scaleX(1);
                    }
                }
            }
        }
    }

</style>