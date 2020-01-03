<template>
    <main>
        <section class="section-header">
            <div class="animated fadeInLeft section-header__img">
                <img src="../assets/images/homepage/cover_02.jpg" alt="Cover photo">
            </div>
            <div class="section-header__contents">
                <div>
                    <h2 class="animated fadeIn">Work for money Design for love</h2>
                    <p class="animated fadeInUp faster p--fore-line">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p class="animated fadeInUp faster p--fore-line">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p class="animated fadeInUp faster p--fore-line">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
            </div>
        </section>

        <section class="section-work">
            <h2 id="sectionWorkTitle">Our work favorite</h2>
            <div class="section-work__content">
                <div id="sectionWorkBlock_first" class="section-work__content-block">
                    <span class="section-work__content-img">
                        <img src="../assets/images/aboutpage/icon-tree.png" alt="Tree icon">
                    </span>
                    <span class="section-work__content-sub-title sub-title">natural furniture</span>
                    <p class="p--fore-line">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cup</p>
                </div>

                <div id="sectionWorkBlock_second" class="section-work__content-block">
                    <span class="section-work__content-img">
                        <img src="../assets/images/aboutpage/icon-lightbulb.png" alt="Tree icon">
                    </span>
                    <span class="section-work__content-sub-title sub-title">creative furniture</span>
                    <p class="p--fore-line">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </div>

                <div id="sectionWorkBlock_third" class="section-work__content-block">
                    <span class="section-work__content-img">
                        <img src="../assets/images/aboutpage/icon-trophy.png" alt="Tree icon">
                    </span>
                    <span class="sub-title">High Quality</span>
                    <p class="p--fore-line">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca</p>
                </div>
            </div>
        </section>

        <section class="section-aboutus">
            <div class="section-aboutus__contents">
                <span id="sectionAboutusImg" class="section-aboutus__contents-img">
                    <img src="../assets/images/brandLogo.png" alt="Logo">
                </span>
                <p id="sectionAboutusParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                <span id="sectionAboutusSubtitle" class="sub-title">hoang bin - art Director</span>
            </div>
        </section>
    </main>
</template>

<script>
    import AnimConfig from '@/config/ScrollRevealConfig.js'

    export default {

    }

    window.onload = () => {
        ScrollReveal().reveal('#sectionWorkTitle', AnimConfig.CONTENT_UPWARD);
        ScrollReveal().reveal('#sectionWorkBlock_first', AnimConfig.CONTENT_LEFTWARD);
        ScrollReveal().reveal('#sectionWorkBlock_second', AnimConfig.CONTENT_LEFTWARD_DELAY_100);
        ScrollReveal().reveal('#sectionWorkBlock_third', AnimConfig.CONTENT_LEFTWARD_DELAY_200);

        ScrollReveal().reveal('#sectionAboutusImg', AnimConfig.CONTENT_UPWARD);
        ScrollReveal().reveal('#sectionAboutusParagraph', AnimConfig.CONTENT_UPWARD);
        ScrollReveal().reveal('#sectionAboutusSubtitle', AnimConfig.CONTENT_UPWARD);

    };
</script>

<style scoped lang="scss">
    .section-header {
        @include flex-row-center;
        margin-top: $u-margin-bottom-section-md;
        align-items: flex-end;

        &__img {
            width: 50%;
            height: 50rem;
            overflow: hidden;
            img {
                height: 100%;
            }
        }

        &__contents {
            width: 50%;
            padding-left: 10rem;
            padding-bottom: 5.5rem;
            

            div {
                width: 45rem;
            }

            h2 {
                width: 65%;
                line-height: 1;
                margin-bottom: 2.5rem;
                animation-delay: .2s;
            }

            p {
                color: $color-grey-light;

                &:not(:last-child) {
                    margin-bottom: 1.8rem;
                }
            }

            p:nth-of-type(1) {
                animation-delay: .4s;
            }

            p:nth-of-type(2) {
                animation-delay: .48s;
            }

            p:nth-of-type(3) {
                animation-delay: .56s;
            }


        }
    }

    .section-work {
        @include flex-column-center;
        margin-top: 18rem;

        &__content {
            @include flex-row-center;
            margin-top: 6rem;

            .sub-title {
                margin-top: 1.4rem;
                margin-bottom: 1rem;
            }

            &-block {
                @include flex-column-center;
                align-items: flex-start;

                &:not(:first-child) {
                    margin-left: 2rem;
                    
                }

                p {
                    width: 30rem;
                    text-align: initial;
                    color: $color-grey-light;
                }
            }

            &-img {
                height: 4rem;
                img {
                    height: 100%;
                }
            }
        }
    }

    .section-aboutus {
        margin-top: 20rem;
        margin-bottom: 15rem;
    

        &__contents {
            @include flex-column-center;

            &-img {
                border-radius: 50%;
                box-shadow: 0 .6rem .6rem rgba($color-black, .1);
            }

            p {
                width: 60rem;
                margin: 1.8rem 0;

                text-align: center;
                color: $color-grey-light;
                
            }

        }
    }
</style>