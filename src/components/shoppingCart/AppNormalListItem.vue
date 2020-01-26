<template>
    <div class="shopping-list-item">
        <img :src="data.imgUrl" alt="Product">
        <div class="shopping-list-item__name">{{ data.name }}</div>
        <div class="shopping-list-item__price">{{ data.price }}€</div>
        <div class="shopping-list-item__quantity">
            <button @click="decreaseItemCount()">
                <svg><use xlink:href="../../assets/sprites_icon_entypo.svg#icon-minus"></use></svg> 
            </button>
            <span>{{ getItemTotalCount }}</span>
            <button @click="increaseItemCount()">
                <svg><use xlink:href="../../assets/sprites_icon_entypo.svg#icon-plus"></use></svg>
            </button>
        </div>
        <div class="shopping-list-item__total-price">{{ getCertainItemTotalPrice }}€</div>
        <button class="shopping-list-item__delete-btn" @click="deleteItems()">
            <svg><use xlink:href="../../assets/sprites_icon_entypo.svg#icon-cross"></use></svg>
        </button>
    </div>
</template>

<script>
    export default {
        props: ['data'],
        methods: {
            increaseItemCount() {
                this.$store.dispatch('increaseShoppingCartItemCount', this.data.id);
            },
            decreaseItemCount() {
                this.$store.dispatch('decreaseShoppingCartItemCount', this.data.id);
            },
            deleteItems() {
                this.$store.dispatch('deleteShoppingCartItems', this.data.id);
            }
        },
        computed: {
            getItemTotalCount() {
                const items = this.$store.getters.getShoppingCartItems;
                const index = items.findIndex(el => el.id === this.data.id);

                return items[index].count;
            },
            getCertainItemTotalPrice() {
                let totalPrice = 0;
                totalPrice += this.getItemTotalCount * this.data.price;

                return Math.floor(totalPrice * 100) / 100;
            }
        }  
    }   
</script>

<style lang="scss" scoped>
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
           object-fit: contain;
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
            cursor: pointer;
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