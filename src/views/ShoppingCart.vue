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

            <!-- ------- -->

            <div class="shopping-list-item">
                <img src="../assets/images/homepage/furniture/1.png" alt="Product">
                <div class="shopping-list-item__name">Lights throughout</div>
                <div class="shopping-list-item__price">150</div>
                <div class="shopping-list-item__quantity">
                    <button>
                        <svg><use xlink:href="../assets/sprites_icon_entypo.svg#icon-minus"></use></svg> 
                    </button>
                    <span>0</span>
                    <button>
                        <svg><use xlink:href="../assets/sprites_icon_entypo.svg#icon-plus"></use></svg>
                    </button>
                </div>
                <div class="shopping-list-item__total-price">150</div>
                <button class="shopping-list-item__delete-btn">
                    <svg><use xlink:href="../assets/sprites_icon_entypo.svg#icon-cross"></use></svg>
                </button>
            </div>

            <div class="shopping-list-item">
                <img src="../assets/images/homepage/furniture/1.png" alt="Product">
                <div class="shopping-list-item__name">Lights throughout</div>
                <div class="shopping-list-item__price">150</div>
                <div class="shopping-list-item__quantity">
                    <button>
                        <svg><use xlink:href="../assets/sprites_icon_entypo.svg#icon-minus"></use></svg> 
                    </button>
                    <span>0</span>
                    <button>
                        <svg><use xlink:href="../assets/sprites_icon_entypo.svg#icon-plus"></use></svg>
                    </button>
                </div>
                <div class="shopping-list-item__total-price">150</div>
                <button class="shopping-list-item__delete-btn">
                    <svg><use xlink:href="../assets/sprites_icon_entypo.svg#icon-cross"></use></svg>
                </button>
            </div>

            <div class="shopping-list-item">
                <img src="../assets/images/homepage/furniture/1.png" alt="Product">
                <div class="shopping-list-item__name">Lights throughout</div>
                <div class="shopping-list-item__price">150</div>
                <div class="shopping-list-item__quantity">
                    <button>
                        <svg><use xlink:href="../assets/sprites_icon_entypo.svg#icon-minus"></use></svg> 
                    </button>
                    <span>0</span>
                    <button>
                        <svg><use xlink:href="../assets/sprites_icon_entypo.svg#icon-plus"></use></svg>
                    </button>
                </div>
                <div class="shopping-list-item__total-price">150</div>
                <button class="shopping-list-item__delete-btn">
                    <svg><use xlink:href="../assets/sprites_icon_entypo.svg#icon-cross"></use></svg>
                </button>
            </div>

            <!-- ------- -->
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
                <div>
                    <div class="section-shopping-list__total-detail">
                        <span>Sub total:</span>
                        <span>150</span>
                    </div>
                    <div class="section-shopping-list__total-detail">
                        <span>Grand Total:</span>
                        <span>150</span>
                    </div>
                </div>
                <button>Checkout</button>
            </div>
        </div>

        

    </section>
</template>

<script>
    export default {
        
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
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            button {
                @include size(30rem, 4rem);
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

            & span {
                font-family: $font-family-1;
                font-weight: 600;
                font-size: 1.6rem;
                color: $color-black;
                line-height: 1;
            }
            

            &:not(:last-child) {
                margin-bottom: 3.8rem;
            }
        }
    }

    .shopping-list-item {
        display: flex;
        align-items: center;
        padding: 2.1rem 0 2.4rem 0;

        &::after {
            @include size(100%, 2px);
            content: "";
            background-color: $color-grey-bright;
            position: absolute;
            left: 0;
            bottom: 0;
            transform: translateY(50%);
        }

        & > img {
           width: 7rem; 
           height: 9.1rem;
           object-fit: cover;
           margin-right: 3rem;
        }

        &__name {
            width: 17rem;
            font-family: $font-family-2;
            color: $color-grey-light;
            font-size: 1.6rem;
            font-weight: 300;
            line-height: 1;
            margin-right: 3rem;
        }

        &__price {
            width: 7rem;
            font-family: $font-family-2;
            color: $color-grey-light;
            font-size: 1.6rem;
            font-weight: 300;
            line-height: 1;
            margin-right: 3rem;
        }

        &__quantity {
            width: 20rem;
            margin-right: 4.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 2px solid $color-grey-bright;

            font-family: $font-family-1;
            font-size: 2rem;
            font-weight: 700;

            & > span {
                flex: 1;
                text-align: center;
            }

            & > button {
                @include size(4rem, 4rem);
                border: none;
                outline: none;
                cursor: pointer;
                background-color: $color-white;
                transition: .15s;

                &:first-child {
                    border-right: 2px solid $color-grey-bright;
                }

                &:nth-of-type(2) {
                    border-left: 2px solid $color-grey-bright;
                }

                & > svg {
                    @include size(50%, 50%);
                    fill: $color-black;
                    vertical-align: top;
                    transition: .15s;
                }

                &:active {
                    background-color: $color-primary;

                    & > svg {
                        @include size(60%, 60%);
                    }
                }
            }
        }

        &__total-price {
            line-height: 1;
            font-family: $font-family-1;
            font-size: 1.6rem;
            font-weight: 600;
            color: $color-black;
        }

        &__delete-btn {
            @include size(4rem, 4rem);
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(0, -50%);
            border: 2px solid $color-grey-bright;
            outline: none;
            transition: .15s;
            svg {
                @include size(50%, 50%);
                @include abs-center;
                fill: $color-black;
                transition: .15s;
            }

            &:active {
                    background-color: $color-primary;

                    & > svg {
                        @include size(60%, 60%);
                    }
                }
        }


    }

</style>