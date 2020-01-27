<template>
    <section class="section-shop-detail">
        <div class="section-shop-detail__photos">
            <div class="section-shop-detail__main-photo">
                <img :src="data.imgUrl" alt="The photo of the product">
            </div>
            
            <div class="section-shop-detail__sub-photos">
                <div>
                    <img :src="data.imgUrl" alt="The photo of the product">
                </div>
                <div>
                    <img :src="data.imgUrl" alt="The photo of the product">
                </div>
                <div>
                    <img :src="data.imgUrl" alt="The photo of the product">
                </div>
            </div>
        </div>

        <div class="section-shop-detail__contents">
            <h2>{{ data.name }}</h2>
            <div class="section-shop-detail__short-description">{{ data.shortDescription }}</div>
            <div class="section-shop-detail__price">
                <span>Price:</span>
                <span>{{ data.price }} €</span>
            </div>
            <div class="section-shop-detail__count">
                <button @click="subtractProductCount()">
                    <svg>
                        <use xlink:href="../assets/sprites_icon_entypo.svg#icon-minus"></use>
                    </svg> 
                </button>
                <span>{{ productCount }}</span>
                <button @click="addProductCount()">
                    <svg>
                        <use xlink:href="../assets/sprites_icon_entypo.svg#icon-plus"></use>
                    </svg>
                </button>
            </div>

            <button class="section-shop-detail__add-to-cart-btn" @click="addToCart()">Add to cart</button>

            <div>
                <div class="section-shop-detail__description">
                    <h3>Product Description</h3>
                    <span>&bull; Side length {{ data.sideLength }}</span>
                    <span>&bull; Back length {{ data.backLength }}</span>
                    <p>{{ data.description }}</p>
                </div>

                 <div class="section-shop-detail__description">
                    <h3>Additional Imformation</h3>
                    <p>{{ data.additionalImformation }}</p>
                </div>
            </div>
        </div>


    </section>
</template>

<script>
    import axios from 'axios';

    export default {
     data() {
         return {
             data: {},
             productCount: 0
         }
     },
     methods: {
         addProductCount() {
             if(this.productCount < this.data.stock) {
                 this.productCount++;
             }
         },
         subtractProductCount() {
             if(this.productCount <= 0)
                return;

            this.productCount--;
         },
         async requestData() {
             axios.get('')
                .then(response => {
                    const data = response.data;

                    data.forEach(el => {
                        if(el.category === this.$route.params.category) {
                            for(let product of el.products) {
                                if(product.name === this.$route.params.name) {
                                    this.data = product;
                                }
                            }
                        }
                    });

                }).catch(error => console.log(error));
         },
         addToCart() {
             if(this.productCount === 0)
                return;

            const shoppingItemData = {
                name: this.data.name,
                id: this.data.id,
                price: this.data.price,
                imgUrl: this.data.imgUrl,
                count: this.productCount
            };
            this.$store.dispatch('addShoppingCartItem', shoppingItemData);
        }
     },
     mounted() {
         window.scrollTo(0, 0);
         this.requestData();
     }   
    }
</script>

<style lang="scss" scoped>
    .section-shop-detail {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        max-width: $row-max-width;
        margin: 0 auto;
        margin-top: $u-margin-bottom-section-lg;
        
        margin-bottom: 44.5rem;

    // ------ 照片部分 ------
        &__photos {
            @include flex-column-center;
            width: 60rem;
        }

        &__main-photo {
            @include size(100%, 58rem);
            overflow: hidden;
            margin-bottom: 2rem;

            img {
                height: 100%;
            }
        }

        &__sub-photos {
            @include flex-row-center;

            & > div {
                height: 18rem;
                flex: 1;
                overflow: hidden;

                img {
                    width: 101%;
                }

                &:not(:last-child) {
                    margin-right: 3rem;
                }
            }
        }
    // ------ 商品相關資訊部分 ------
        &__contents {
            flex: 1;
            margin-left: 7rem;
        }

        &__short-description {
            margin-top: 1.5rem;
            font-size: 1.3rem;
            font-family: $font-family-1;
            font-weight: 600;
            color: $color-black;
            line-height: 1;
        }

        &__price {
            margin-top: 3.3rem;
            margin-bottom: 4.2rem;

            & > span:first-child {
                color: $color-grey-light;
                font-family: $font-family-2;
                font-size: 1.6rem;
                margin-right: 1.6rem;
                line-height: 1;
            }

            & > span:nth-child(2) {
                color: $color-black;
                font-family: $font-family-1;
                font-size: 2rem;
                font-weight: 800;
                line-height: 1;
            }
        }

        &__count {
            width: 30rem;
            margin-bottom: 2.3rem;
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

        &__add-to-cart-btn {
            @include size(30rem, 4rem);
            cursor: pointer;
            border: none;
            background-color: $color-primary;
            font-family: $font-family-1;
            font-size: 1.3rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            outline: none;
            transition: letter-spacing .15s, font-size .15s;

            &:hover {
                letter-spacing: .25rem;
                font-size: 1.35rem;
            }

            &:active {
                background-color: darken($color-primary, 7%);
            }
        }

        &__description {
            margin-top: 5.3rem;
            & > span {
                display: block;
                font-size: 1.6rem;
                font-family: $font-family-2;
                line-height: 1;
                color: $color-grey-light;
                font-weight: 300;
            }

            & > span:nth-of-type(1) {
                margin-top: 3rem;
            }

            & > span:nth-of-type(2) {
                margin-top: 1rem;
            }

            & > p {
                margin-top: 2rem;
            }
        }

        h3 {      
            text-indent: 5rem;

            &::before {
                @include size(4rem, 1px);
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(calc(-50% + 2rem), calc(-50%));
                background-color: $color-black;
            }
        }

        p {
            color: $color-grey-light;
            text-align: initial;
        }

    }
</style>