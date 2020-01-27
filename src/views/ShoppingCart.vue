<template>
    <section class="section-shopping-list">
        <div class="section-shopping-list__content-block">
             <div class="section-shopping-list__info section-shopping-list__content-block-title">
                <div>Image</div>
                <div>Product Name</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
            </div>

            <app-shopping-cart-item v-for="(item, index) in shoppingCartItems" :key="index" :data="item"></app-shopping-cart-item>

        </div>
       
        <div class="section-shopping-list__content-block">
            <div class="section-shopping-list__content-block-title">Shipping Information</div>
            <form action="">
                <div class="section-shopping-list__form-item">
                    <label for="firstname">First Name *</label>
                    <input id="firstname" type="text" required>
                </div>

                <div class="section-shopping-list__form-item">
                    <label for="lastname">Last Name *</label>
                    <input id="lastname" type="text" required>
                </div>

                <div class="section-shopping-list__form-item">
                    <label for="address">Address *</label>
                    <input id="address" type="text" placeholder="Street Address" required>
                </div>

                <div class="section-shopping-list__form-item">
                    <label for="city">Town / City *</label>
                    <input id="city" type="text" required>
                </div>

                <div class="section-shopping-list__form-item">
                    <label for="email">Email address *</label>
                    <input id="email" type="email" required>
                </div>

                <div class="section-shopping-list__form-item">
                    <label for="phone">Phone *</label>
                    <input id="phone" type="number" required>
                </div>
            
            </form>
        </div>
        
        <div class="section-shopping-list__content-block">
            <div class="section-shopping-list__content-block-title">Cart Total</div>
            <div class="section-shopping-list__cart-total">
                <div class="section-shopping-list__total-detail">
                    <span>Grand Total:</span>
                    <span>{{ shoppingCartTotalPrice }}€</span>
                </div>
                <router-link to="/thankYou">
                    <button @click="checkOut()">Checkout</button>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    import ShoppingCartItem from '../components/shoppingCart/AppNormalListItem';

    export default {
        methods: {
            checkOut() {
                this.$store.dispatch('checkOut');
            }
        },
        computed: {
            shoppingCartItems() {
                return this.$store.getters.getShoppingCartItems;
            },
            shoppingCartTotalPrice() {
                return this.$store.getters.getTotalPrice;
            }
        },
        components: {
            appShoppingCartItem: ShoppingCartItem
        }
    }
</script>

<style lang="scss" scoped>
    .section-shopping-list {
        max-width: 77rem;
        margin: 0 auto;
        margin-top: $u-margin-bottom-section-lg;
        margin-bottom: 49rem;

        &__content-block > div:first-child {
            margin-bottom: 3.5rem;
        }

        &__content-block:not(:last-child) {
            margin-bottom: 8.8rem;
        }

        &__content-block-title {
            height: 4.2rem;
            font-family: $font-family-1;
            font-size: 1.6rem;
            font-weight: 600;
            color: $color-black;
            border-bottom: 2px solid $color-black;
        }
        
        &__info {
            display: flex;
            justify-content: flex-start;
        
            & > div:first-child {
                width: 7rem;
                margin-right: 3rem;
            }

            & > div:nth-of-type(2) {
                width: 17rem;
                margin-right: 3rem;
            }

            & > div:nth-of-type(3) {
                width: 7rem;
                margin-right: 3rem;
            }

            & > div:nth-of-type(4) {
                width: 20rem;
                margin-right: 4.5rem;
            }
        }

        &__title {
            font-family: $font-family-1;
            font-size: 1.6rem;
            font-weight: 600;
            color: $color-black;
        }

        &__form-item {
            display: flex;
            align-items: flex-end;
            margin-top: 2.7rem;

            & label {
                display: inline-block;
                width: 17rem;
                margin-right: 2.2rem;
                font-family: $font-family-1;
                font-size: 1.6rem;
                font-weight: 600;
                text-transform: uppercase;
                color: $color-black;
                line-height: 1;
            }

            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0 30px $color-white inset !important;
                -webkit-text-fill-color: $color-black !important;
            }

            & input {
                flex: 1;
                height: 4rem;
                outline: none;
                border: none;
                border-bottom: 1px solid $color-grey-light;
                background-color: transparent;

                &::placeholder {
                    font-family: $font-family-2;
                    font-size: 1.6rem;
                    color: $color-grey-light;
                    font-weight: 300;
                }
            }
        }

        &__cart-total {

            button {
                @include size(30rem, 4rem);
                float: right;
                border: none;
                background-color: $color-primary;
                font-family: $font-family-1;
                font-size: 1.3rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 2px;
                outline: none;
                cursor: pointer;

                &:active {
                    background-color: darken($color-primary, 10%);
                }
            }
        }

        &__total-detail {
            width: 21.5rem;
            display: flex;
            justify-content: space-between;
            margin-bottom: 5rem;

            & span {
                font-family: $font-family-1;
                font-weight: 600;
                font-size: 1.6rem;
                color: $color-black;
                line-height: 1;
            }
        }
    }
</style>