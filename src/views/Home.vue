<template>
    <main>
        <section class="section-header">
            <nav>
                <ul>
                    <li id="section-header__list-item-0" class="section-header__list-item section-header__list-item--active"><a href="#">01</a><span></span></li>
                    <li id="section-header__list-item-1" class="section-header__list-item"><a href="#">02</a><span></span></li>
                    <li id="section-header__list-item-2" class="section-header__list-item"><a href="#">03</a><span></span></li>
                    <li id="section-header__list-item-3" class="section-header__list-item"><a href="#">04</a><span></span></li>
                    <li id="section-header__list-item-4" class="section-header__list-item"><a href="#">05</a><span></span></li>
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
                        <h2>inspiration from nature</h2>
                        <p class="p--fore-line">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <a href="#" class="btn btn--normal"><span>view more</span></a>
                    </span>
                    <img src="../assets/images/homepage/cover_02.jpg" alt="Mountain Photo">
                </span>
            </div>
            
            
            <div class="section-intro__banner">
                <span class="section-intro__banner-contents">
                    <span class="section-intro__banner-sub-title">furniture creative</span>
                    <h2>latest collection</h2>
                    <a href="#" class="btn btn--normal"><span>show all</span></a>
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
            <div class="section-product__slogan">product creative</div>
            <div class="section-product__title">
                <h2>creative world in your hands</h2>
                <span class="section-product__title-sub">view all product</span>
            </div>
            
             <app-product-grid :products="showOffProducts"></app-product-grid>
             
        </section>
        <section class="section-customer">
            <span class="section-customer__img">
                <img src="../assets/images/homepage/companyLogos.png" alt="Companies's logo">
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
        </section>
    </main>
</template>

<script>
    import ProductGrid from '@/components/product/AppGrid';
    import GalleryPage from '@/components/gallery/AppPage';
    export default {
        data() {
            return {
                galleryContents: [
                    {
                        title: 'softness in the arms of nature 1',
                        bgFileName: 'cover_01.jpeg',
                        productFileName: '7.png'
                    },
                    {
                        title: 'softness in the arms of nature 2',
                        bgFileName: 'cover_04.jpg',
                        productFileName: '1.png'
                    },
                    {
                        title: 'softness in the arms of nature 3',
                        bgFileName: 'cover_05.jpg',
                        productFileName: '2.png'
                    },
                    {
                        title: 'softness in the arms of nature 4',
                        bgFileName: 'cover_06.jpg',
                        productFileName: '3.png'
                    },
                    {
                        title: 'softness in the arms of nature 5',
                        bgFileName: 'cover_07.jpg',
                        productFileName: '4.png'
                    }
                ],
                // products: this.$store.state.dataMap.get('SHOW_OFF')
            };
        },
        components: {
            appProductGrid: ProductGrid,
            appGalleryPage: GalleryPage
        },
        computed: {
            showOffProducts() {
                return this.$store.state.dataMap.get('SHOW_OFF');
            }
        }
    }

    window.onload = () => {
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
    }
    
</script>

<style scoped lang="scss">
//-------------------- SECTION-HEADER --------------------
    .section-header {
        margin-top: 1rem;
        margin-bottom: $u-margin-bottom-section-md;
        overflow: hidden;

        &__list-item {
            padding: 1.5rem;

            &:not(:last-child) {
                margin-bottom: 1rem;
            }

            a {
                @include abs-center;
                font-family: $font-family-1;
                font-size: 1.3rem;
                font-weight: 300;
                text-decoration: none;
                cursor: default;
                color: $color-grey-light;
                transition: .15s ease-in-out;
            }

            span {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translate(calc(50% - .8rem), -50%);
                width: .1rem;
                height: 0rem;
                background-color: $color-black;
                opacity: 0;
                transition: .2s ease-in-out;
            }

            &--active {
                a {
                    color: $color-black;
                    font-size: 2rem;
                    transform: translate(calc(-50% - 1.4rem), -50%);
                    transform-origin: top right;
                }

                span {
                    height: 3rem;
                    opacity: 1;
                    transform: translate(calc(50% - .8rem), -50%);
                }
            }
        }

        nav {
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translate(calc(50% + 2rem), 0);
            z-index: 5;

            ul {
                list-style: none;
                margin-bottom: 9rem;
            }

            .chevron-btns-grp {
                @include flex-column-center;
                right: .65rem;

                &__icon {
                    @include size(100%, 3rem);
                    background-color: $color-grey-bright-2;

                    &:first-child {
                        margin-bottom: .5rem;
                    }

                    svg {
                        @include abs-center;
                        @include size(50%, 50%);
                        fill: $color-black;
                    }
                }
            }
        }

        &__gallery {
            @include size(94%, 50rem);
            float: right;
            overflow: hidden;


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
        margin-bottom: $u-margin-bottom-section-md * 2;

        &::before {
            @include abs-center;
            @include size(100%, 100%);
            content: "";
            background-image: url("../assets/images/homepage/cover_03.jpg");
            background-size: cover;
            background-position: top;
            opacity: .2;
            z-index: -1;
        }
        
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
            width: 60rem;
            text-align: center;
            color: $color-grey-light;
        }

        &__img {
            width: 85rem;
            img {
                vertical-align: middle;
                width: 100%;
            }
        }
    }
</style>