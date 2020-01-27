<template>
    <main>
        <section class="section-shop">
            <nav class="navigation">
                <ul class="navigation__list">
                    <router-link id="defaultActiveLink" to="/shop/table" tag="li"  class="navigation__list-item" active-class="navigation__list-item--active" exact>
                        <img class="navigation__list-icon" src="../assets/images/shoppage/icon-table.png" alt="">
                        <div>
                            <span class="sub-title">table</span>
                            <p>Made from natural</p>
                        </div>
                    </router-link>

                    <router-link to="/shop/sofa" tag="li"  class="navigation__list-item" active-class="navigation__list-item--active">
                        <img class="navigation__list-icon" src="../assets/images/shoppage/icon-sofa.png" alt="">
                        <div>
                            <span class="sub-title">sofa</span>
                            <p>Made from natural</p>
                        </div>
                    </router-link>

                    <router-link to="/shop/light" tag="li"  class="navigation__list-item" active-class="navigation__list-item--active">
                        <img class="navigation__list-icon" src="../assets/images/shoppage/icon-lamp.png" alt="">
                        <div>
                            <span class="sub-title">light</span>
                            <p>Made from natural</p>
                        </div>
                    </router-link>

                    <router-link to="/shop/bed" tag="li"  class="navigation__list-item" active-class="navigation__list-item--active">            
                        <img class="navigation__list-icon" src="../assets/images/shoppage/icon-bed.png" alt="">
                        <div>
                            <span class="sub-title">bed</span>
                            <p>Made from natural</p>
                        </div>
                    </router-link>
                </ul>
            </nav>

            <app-product-grid :products="getCurrentData"></app-product-grid>

            <span class="section-shop__pagination">
                <!-- <a href="#">❮ Prev</a>
                <a href="#">Next ❯</a> -->
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
                data: {
                    table: null,
                    sofa: null,
                    light: null,
                    bed: null
                },
                dataTypes: ['table', 'sofa', 'light', 'bed'],
                isInitState: true
            };
        },
        components: {
            appProductGrid: ProductGrid
        },
        computed: {
            getCurrentData() {
                if(this.isInitState) {
                    return this.data['table'];
                }

                return this.data[this.$route.params.id];
            }
        },
        methods: {
            async requestData() {
                axios.get('')
                    .then(response => {
                        const data = response.data;
                        if (data) {
                            data.forEach(el => {

                                for(let type of this.dataTypes) {
                                    if(type === el.category) {
                                        this.data[type] = el.products;
                                    }
                                }
                            });
                        }
                    }).catch(error => console.log(error));
            }
        },
        mounted() {
            this.requestData();

            document.getElementById('defaultActiveLink').classList.add('navigation__list-item--active');

            const linkItems = Array.from(document.querySelectorAll('.navigation__list-item'));

            for(let linkItem of linkItems) {
                linkItem.addEventListener('click', (event) => {
                    if(this.isInitState) {
                        if(!event.target.closest('#defaultActiveLink')) {
                            document.getElementById('defaultActiveLink').classList.remove('navigation__list-item--active');
                        } 
            
                        this.isInitState = false;
                    }

                });
            }
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
            margin-bottom: 10rem;
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

                         &::after {
                            @include size(55%, 25%);
                            content: "";
                            background-color: $color-primary;
                            position: absolute;
                            right: left;
                            top: 50%;
                            transform-origin: left;
                            transform: translateY(calc(-50% - 1rem)) scaleX(0);
                            z-index: -1;
                            transition: .2s ease-out;
                        }
                        
                    }

                    p {
                        text-align: initial;
                        color: $color-grey-light;
                        line-height: 1;
                        width: 12.7rem;
                    }

                    &--active {

                        & > div {
                            &::after {
                                transform: translateY(calc(-50% - 1rem)) scaleX(1);
                            }
                        }

                        p {
                            color: $color-black;
                        }
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