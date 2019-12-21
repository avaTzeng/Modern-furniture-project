<template>
    <div>
        <main>
            <section class="section-nav">
                <div class="section-nav__img-block">
                    <span class="section-nav__title">softness in the arms of nature</span>
                    <span class="section-nav__img-bg">
                        <img src="../assets/images/homepage/cover_01.jpeg" alt="Mountain Photo">
                    </span>
                    <span class="section-nav__img-product">
                        <img src="../assets/images/furniture/bed/bed_01.png" alt="Product Photo">
                    </span>
                </div>
            </section>
            <section class="section-intro">
                <div class="section-intro__introdunction">
                    <span class="section-intro__img-block">
                        <span class="section-intro__contents">
                            <h2>inspiration from nature</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <a href="#" class="btn btn--normal">view more</a>
                        </span>
                        <img src="../assets/images/homepage/cover_02.jpg" alt="Mountain Photo">
                    </span>
                </div>
                
                <div class="section-intro__panels">
                    <span class="section-intro__collection-contents">
                        <span>furniture creative</span>
                        <h2>latest collection</h2>
                        <a href="#" class="btn btn--normal">show all</a>
                    </span>
                    <span class="section-intro__panel">
                        <img src="../assets/images/homepage/moreCollection.jpg" alt="Collection 1">
                    </span>
                    <span class="section-intro__panel">
                        <img src="../assets/images/homepage/moreCollection.jpg" alt="Collection 2">
                    </span>
                    
                </div>
            </section>


        </main>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
//-------------------- SECTION-NAV --------------------
    .section-nav {
        margin-bottom: $u-margin-bottom-section-md;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        overflow: hidden;
        
        &__img-block {
            width: 105rem;
            height: 50rem;
            img {
                width: 100%;
            }
        }

        &__title {
            width: 55rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(calc(-50% + 5rem), calc(-50% - 1rem));
            z-index: 1;

            font-size: 7rem;
            font-family: $font-family-1;
            font-weight: 800;
            text-transform: uppercase;
            color: $color-black;
        }

        &__img-bg {
            img {
                opacity: 0.5;
            }
        }

        &__img-product {
            width: 58rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(calc(-50% - 45rem), calc(-50% + 8rem));
            z-index: 6;
            img {
                opacity: 1;
            }
        }
    }
//-------------------- SECTION-INTRO --------------------
    .section-intro {
        // margin-bottom: $u-margin-bottom-section-md;

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
        
        &__introdunction {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            overflow: hidden;
        }

        &__img-block {
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

        &__collection-contents {
            @include abs-center;
            @include flex-column-center;
            z-index: 1;
            color: $color-black;

            span {
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

        &__panels {
            @include flex-row-center;
            padding: $u-margin-bottom-section-md 0;
        }

        &__panel {
            @include size(38rem, 27rem);
            background-color: yellow;
            overflow: hidden;

            &:not(:first-child) {
                margin-left: 2rem;
            }

            &:first-child {
                img {
                    left: 0;
                }
            }

            &:last-child {
                img {
                    right: 100%;
                }
            }

            img {
                height: 100%;
            }

        }
    }
</style>