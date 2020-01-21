<template>
    <main>
        <section class="section-header">
            <nav>
                <ul>
                    <li id="section-header__list-item-0" class="section-header__list-item section-header__list-item--active"><a>01</a><span></span></li>
                    <li id="section-header__list-item-1" class="section-header__list-item"><a>02</a><span></span></li>
                    <li id="section-header__list-item-2" class="section-header__list-item"><a>03</a><span></span></li>
                    <li id="section-header__list-item-3" class="section-header__list-item"><a>04</a><span></span></li>
                    <li id="section-header__list-item-4" class="section-header__list-item"><a>05</a><span></span></li>
                </ul>
                <div class="chevron-btns-grp">
                    <span id="chevron-btn-up" class="chevron-btns-grp__icon">
                        <svg>
                            <use xlink:href="../assets/sprites_icon_entypo.svg#icon-triangle-up"></use>
                        </svg>
                    </span>
                    
                    <span id="chevron-btn-down" class="chevron-btns-grp__icon">
                        <svg>
                            <use xlink:href="../assets/sprites_icon_entypo.svg#icon-triangle-down"></use>
                        </svg>
                    </span>
                </div>
            </nav>
            
            <div class="section-header__gallery">
                <div class="section-header__gallery-bg"></div>
                <div class="section-header__gallery-page-container">            
                    <app-gallery-page :content="galleryContents[0]"></app-gallery-page>
                    <app-gallery-page :content="galleryContents[1]"></app-gallery-page>
                    <app-gallery-page :content="galleryContents[2]"></app-gallery-page>
                    <app-gallery-page :content="galleryContents[3]"></app-gallery-page>
                    <app-gallery-page :content="galleryContents[4]"></app-gallery-page>
                </div>
            </div>
        </section>
        <section class="section-intro">
            
            <div class="section-intro__story">
                <span class="section-intro__block">
                    <span class="section-intro__contents">
                        <h2 id="storyTitle">inspiration from nature</h2>
                        <p id="storyParagraph" class="p--fore-line">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <a id="storyBtn" href="#" class="btn btn--normal"><span>view more</span></a>
                    </span>
                    <img src="../assets/images/homepage/cover_02.jpg" alt="Mountain Photo">
                </span>
            </div>
            
            
            <div class="section-intro__banner">
                <span class="section-intro__banner-contents">
                    <span id="bannerSubTitle" class="section-intro__banner-sub-title">furniture creative</span>
                    <h2 id="bannerTitle">latest collection</h2>
                    <a id="bannerBtn" href="#" class="btn btn--normal"><span>show all</span></a>
                </span>
    
                <span class="section-intro__banner-img">
                    <img src="../assets/images/homepage/moreCollection.jpg" alt="Collection 1">
                </span>
                <span class="section-intro__banner-img">
                    <img src="../assets/images/homepage/moreCollection.jpg" alt="Collection 2">
                </span>
            </div>
        </section>

        <section class="section-product">
            <div id="productSlogan" class="section-product__slogan">product creative</div>
            <div class="section-product__title">
                <h2 id="productTitle">creative world in your hands</h2>
                <span id="productSubTitle" class="section-product__title-sub">view all product</span>
            </div>
            
             <app-product-grid :products="data"></app-product-grid>
             
        </section>
        <section class="section-customer">
            <span id="customerImg" class="section-customer__img">
                <img src="../assets/images/homepage/companyLogos.png" alt="Companies's logo">
            </span>
            <p id="customerParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
        </section>
    </main>
</template>
 

<script>
    import ProductGrid from '@/components/product/AppGrid';
    import GalleryPage from '@/components/gallery/AppPage';
    import AnimConfig from '@/config/ScrollRevealConfig.js';
    import axios from 'axios';

    export default {
        data() {
            return {
                data: null,
                dataType: 'SHOW_OFF',
                galleryContents: [  // mocked data
                    {
                        title: 'softness in the arms of nature 1',
                        productFileName: '7.png'
                    },
                    {
                        title: 'softness in the arms of nature 2',
                        productFileName: '1.png'
                    },
                    {
                        title: 'softness in the arms of nature 3',
                        productFileName: '2.png'
                    },
                    {
                        title: 'softness in the arms of nature 4',
                        productFileName: '3.png'
                    },
                    {
                        title: 'softness in the arms of nature 5',
                        productFileName: '4.png'
                    }
                ],
            };
        },
        components: {
            appProductGrid: ProductGrid,
            appGalleryPage: GalleryPage
        },
        mounted() {
            this.requestData();

            window.onload = () => {
            // ----------------- GALLERY ANIMATION CONTROL ----------------- 
            let page = 0;

            const ACTIVE_LIST_ITEM_CLASS_NAME = 'section-header__list-item--active';
            const LIST_COUNT = 5;

            const listItemsArr = [];
            const chevronUpBtn = document.getElementById('chevron-btn-up');
            const chevronDownBtn = document.getElementById('chevron-btn-down');
            const galleryContainer = document.querySelector('.section-header__gallery-page-container');

            for (let i = 0; i < LIST_COUNT; i++) {
                const el = document.getElementById(`section-header__list-item-${i}`);
                listItemsArr.push(el);
            }

            chevronUpBtn.addEventListener('click', () => prevPage());
            chevronDownBtn.addEventListener('click', () => nextPage());

            setInterval(() => {
                nextPage();
            }, 3000);

            function nextPage() {
                listItemsArr[page].classList.remove(ACTIVE_LIST_ITEM_CLASS_NAME);
                page += 1;
                if (page > (listItemsArr.length - 1)) {
                    page = 0;
                }
                listItemsArr[page].classList.add(ACTIVE_LIST_ITEM_CLASS_NAME);
                galleryContainer.style.right = `${ page * 100 }%`;
            }

            function prevPage() {
                listItemsArr[page].classList.remove(ACTIVE_LIST_ITEM_CLASS_NAME);
                page -= 1;
                if (page < 0) {
                    page = (listItemsArr.length - 1);
                }
                listItemsArr[page].classList.add(ACTIVE_LIST_ITEM_CLASS_NAME);
                galleryContainer.style.right = `${ page * 100 }%`;
            }


            // ----------------- SCROLL ANIMATION ----------------- 
            ScrollReveal().reveal('#storyTitle', AnimConfig.CONTENT_LEFTWARD);
            ScrollReveal().reveal('#storyParagraph', AnimConfig.CONTENT_LEFTWARD);
            ScrollReveal().reveal('#storyBtn', AnimConfig.CONTENT_LEFTWARD);

            ScrollReveal().reveal('#bannerSubTitle', AnimConfig.CONTENT_UPWARD);
            ScrollReveal().reveal('#bannerTitle', AnimConfig.CONTENT_UPWARD);
            ScrollReveal().reveal('#bannerBtn', AnimConfig.CONTENT_UPWARD);

            ScrollReveal().reveal('#productSlogan', AnimConfig.CONTENT_RIGHTWARD);
            ScrollReveal().reveal('#productTitle', AnimConfig.CONTENT_RIGHTWARD);
            ScrollReveal().reveal('#productSubTitle');

            ScrollReveal().reveal('#customerImg', AnimConfig.CONTENT_UPWARD);
            ScrollReveal().reveal('#customerParagraph', AnimConfig.CONTENT_UPWARD);
    };
        },
        methods: {
            async requestData() {
                axios.get('')
                    .then(response => {
                        const data = response.data;
                        if (data) {
                                data.forEach(el => {
                                    if (el.category === this.dataType) {
                                        this.data = el.products;
                                }
                            });
                        }
                    }).catch(error => console.log(error));
            }
        }
    }

    
</script>

<style scoped lang="scss">
//-------------------- SECTION-HEADER --------------------
    .section-header {
        margin-top: 3.6rem;
        margin-bottom: $u-margin-bottom-section-lg;
        overflow: hidden;

        &__list-item {
            padding: 2.5rem 0;

            &:not(:last-child) {
                margin-bottom: 1rem;
            }

            a {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(0%, -50%);

                font-family: $font-family-1;
                font-size: 2rem;
                font-weight: 300;
                text-decoration: none;
                cursor: default;
                color: $color-grey-light;
                transition: .15s ease-in-out;
                line-height: 1;
            }

            span {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translate(0%, -38%);
                width: 2px;
                height: 0rem;
                background-color: $color-black;
                transition: .2s ease-in-out;
            }

            &--active {
                a {
                    color: $color-black;
                    font-size: 3.6rem;
                    font-weight: 500;
                    transform: translate(-2rem, -50%);
                }

                span {
                    height: 3rem;
                    transform: translate(0%, -38%);
                }
            }
        }

        nav {
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translate(calc(50% + 9.5rem), 0);
            z-index: 5;
            width: 5rem;

            ul {
                list-style: none;
                margin-bottom: 25.5rem;
            }

            .chevron-btns-grp {
                position: absolute;
                right: 0;
                bottom: 0;
                @include flex-column-center;

                &__icon {
                    @include size(5rem, 5rem);
                    background-color: $color-grey-bright-2;
                    cursor: pointer;

                    &:first-child {
                        margin-bottom: .5rem;
                    }

                    svg {
                        @include abs-center;
                        @include size(35%, 35%);
                        fill: $color-black;
                    }
                }
            }
        }

        &__gallery {
            @include size(90%, 80rem);
            float: right;
            overflow: hidden;
            
            &-bg {
                @include size(80%, 100%);
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(0, -50%);
                opacity: .35;
                background-image: url('../assets/images/homepage/cover_03.jpg');
                background-size: cover;
                background-position: top;
                background-repeat: no-repeat;
                // background-attachment: fixed;
            }

            &-page-container {
                @include size(100%, 100%);
                white-space: nowrap;
                float: right;
                right: 0;
                transition: .5s;
            }
        }
    }
//-------------------- SECTION-INTRO --------------------
    .section-intro {
        margin-bottom: $u-margin-bottom-section-lg;

        background-image: linear-gradient(rgba($color-white, .7)), url("../assets/images/homepage/cover_03.jpg");
        background-size: cover;
        background-position: top;
        background-attachment: fixed;
        
        &__story {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            overflow: hidden;
        }

        &__block {
            width: 85rem;
            height: 50rem;
            img {
                width: 100%;
            }
        }

        &__contents {
            width: 45rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(calc(-50% + 50rem), calc(-50% - 2rem));
            z-index: 1;
            color: $color-black;

            p {
                width: 80%;
                margin-top: 1.8rem;
                margin-bottom: 3rem;
            }
        }

        &__banner {
            @include flex-row-center;
            position: relative;
            margin: 0 auto;
            width: $row-max-width;
            padding: $u-margin-bottom-section-md 0;

            &-contents {
                @include abs-center;
                @include flex-column-center;
                z-index: 1;
                color: $color-black;

                & > span {
                    text-transform: uppercase;
                    font-family: $font-family-1;
                    font-weight: 800;
                    letter-spacing: .1rem;
                }

                h2 {
                    margin-top: 1.5rem;
                    margin-bottom: 2rem;
                }
            }

            &-img {
                @include size(50%, 27rem);
                background-color: yellow;
                overflow: hidden;

                &:first-child {
                    img {
                        left: 0;
                    }
                }

                &:last-child {
                    margin-left: 2rem;
                    img {
                        right: 50%;
                    }
                }

                img {
                    height: 100%;
                    
                }
            }
        }
    }
//-------------------- SECTION-PRODUCT --------------------
    .section-product {
        max-width: $row-max-width;
        margin: 0 auto;

        &__slogan {
            color: $color-primary;
            text-transform: uppercase;
            font-family: $font-family-1;
            font-weight: 800;
            margin-bottom: 1.5rem;
        }

        &__title {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 7rem;

            h2 {
                display: inline-block;
            }

            &-sub {
                text-transform: uppercase;
                font-family: $font-family-1;
                font-weight: 600;
                letter-spacing: .2rem;
                color: $color-black;
                font-size: 1rem;
                
                &::before {
                    @include size(4rem, 1px);                
                    content: "";
                    background-color: $color-black;
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translate(calc(-50% - 3rem), -50%);
                }

            }
        }
    }

//-------------------- SECTION-CUSTOMER --------------------
    .section-customer {
        @include flex-column-center;
        margin-top: 25rem;
        margin-bottom: 15rem;

        p {
            margin-top: 3.5rem;
            margin-bottom: 2.5rem;
            width: 74.5rem;
            text-align: center;
            color: $color-grey-light;
            font-size: 1.6rem;
        }

        &__img {
            width: 117rem;
            img {
                vertical-align: middle;
                width: 100%;
            }
        }
    }
</style>