<template>
    <main>
        <section class="section-shop">
            <nav class="navigation">
                <ul class="navigation__list">
                    <router-link to="/" tag="li"  class="navigation__list-item" active-class="navigation__list-item--active" exact>
                        <img class="navigation__list-icon" src="../assets/images/shoppage/icon-table.png" alt="">
                        <div>
                            <span class="sub-title">table</span>
                            <p>Made from natural</p>
                        </div>
                    </router-link>

                    <router-link to="/" tag="li"  class="navigation__list-item" active-class="navigation__list-item--active" exact>
                        <img class="navigation__list-icon" src="../assets/images/shoppage/icon-sofa.png" alt="">
                        <div>
                            <span class="sub-title">sofa</span>
                            <p>Made from natural</p>
                        </div>
                    </router-link>

                    <router-link to="/" tag="li"  class="navigation__list-item" active-class="navigation__list-item--active" exact>
                        <img class="navigation__list-icon" src="../assets/images/shoppage/icon-lamp.png" alt="">
                        <div>
                            <span class="sub-title">light</span>
                            <p>Made from natural</p>
                        </div>
                    </router-link>

                    <router-link to="/" tag="li"  class="navigation__list-item" active-class="navigation__list-item--active" exact>            
                        <img class="navigation__list-icon" src="../assets/images/shoppage/icon-bed.png" alt="">
                        <div>
                            <span class="sub-title">bed</span>
                            <p>Made from natural</p>
                        </div>
                    </router-link>
                </ul>
            </nav>
            <app-product-grid :products="null"></app-product-grid>
            <!-- <div class="section-shop__product-grid">
                <div class="section-shop__product-grid-row">
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                </div>
                <div class="section-shop__product-grid-row">
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                </div>
                <div class="section-shop__product-grid-row">
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                    <app-product-item></app-product-item>
                </div>
            </div> -->
            <span class="section-shop__pagination">
                <a href="#">❮ Prev</a>
                <a href="#">Next ❯</a>
            </span>
        </section>
    </main>
</template>

<script>
    import ProductGrid from '@/components/product/AppGrid';
    import axios from 'axios';

    export default {
        data() {
            return {
                dataMap: null,
                displayData: null,
                dataTypes: ['TABLE', 'SOFA', 'LAMP', 'BED']
            };
        },
        components: {
            appProductGrid: ProductGrid
        },
        methods: {
            async requestData() {
                axios.get('')
                    .then(response => {
                        const data = response.data;
                        if (data) {
                            data.forEach(el => {
                                for (let i = 0; i < this.dataTypes.length; i++) {
                                    const type = this.dataTypes[i];
                                    if (type === el.category) {
                                        this.dataMap.set(type, el.products);
                                        // console.log(`加入型態為${type}的資料，而資料有${el.products}`);
                                    }
                                }
                            });

                            // if (!displayData) {
                                
                            // }
                        }

                    }).catch(error => console.log(error));
            },
            injectData(type) {
                if (!this.dataMap.has(type)) {
                    console.log(`沒有 [ ${type} ] 的相關資料`);
                    return;
                }
                
                this.displayData = this.dataMap.get(type);
            }
        },
        mounted() {
            this.dataMap = new Map();
            this.requestData();
            // this.requestData().then(() => {
                // console.log("好了！" + this.dataMap.get('SOFA'));
            // });
        }
    }
</script>

<style lang="scss" scoped>

    .section-shop {
        @include flex-column-center;
        max-width: $row-max-width;
        margin: 0 auto;
        margin-top: 21rem;

//----------- NAVIGATION ----------- 
        .navigation {
            // border: 2px solid red !important;
            width: 100%;
            

            &__list {
                @include flex-row-center;
                justify-content: space-between;
                list-style: none;

                &-item {
                    @include flex-row-center;
                    align-items: flex-end;
                    justify-content: flex-start;
                    cursor: pointer;

                    & > div {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: space-between;
                        height: 4.5rem;
                        margin-left: 1rem;
                    }

                    p {
                        text-align: initial;
                        color: $color-grey-light;
                        line-height: 1;
                        width: 12.7rem;
                    }

                    &--active {
                        color: red;
                    }
                }

                &-icon {
                    height: 4.5rem;

                    img {
                        height: 100%;
                        vertical-align: middle;
                    }
                }
            }
        }

// //----------- PRODUCT-GRID ----------- 
//         &__product-grid {
//             @include flex-column-center;
//             width: 100%;
//             margin-top: 10rem;

//             &-row {
//                 @include flex-row-center;
//                 width: 100%;
//                 justify-content: space-between;
//             }

//             & > div:not(:last-child) {
//                 margin-bottom: 8rem;
//             }
//         }


//----------- PAGINATION ----------- 
        &__pagination {
            margin-top: 10rem;
            margin-bottom: 34.6rem;
            align-self: flex-end;

            a {
                display: inline-block;
                padding: .7rem 1.2rem;
                font-family: $font-family-1;
                font-weight: 600;
                font-size: 1.3rem;
                text-decoration: none;
                color: $color-black;
                background: $color-grey-bright;
                cursor: pointer;

                &:not(:last-child) {
                    margin-right: 1.2rem;
                }
            }
        }
    }

    
</style>