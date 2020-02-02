<template>
    <main>
        <section class="section-header">
            <div class="animated fadeIn section-header__img">
                <img srcset="https://i.imgur.com/b0cFqWg.jpg 1x, https://i.imgur.com/bfMy8Ql.jpg 2x" alt="Cover Photo">
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
                        <img src="https://i.imgur.com/4gE70bs.png" alt="Tree icon">
                    </span>
                    <span class="section-work__content-sub-title sub-title">natural furniture</span>
                    <p class="p--fore-line">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cup</p>
                </div>

                <div id="sectionWorkBlock_second" class="section-work__content-block">
                    <span class="section-work__content-img">
                        <img src="https://i.imgur.com/A01PnsK.png" alt="Tree icon">
                    </span>
                    <span class="section-work__content-sub-title sub-title">creative furniture</span>
                    <p class="p--fore-line">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </div>

                <div id="sectionWorkBlock_third" class="section-work__content-block">
                    <span class="section-work__content-img">
                        <img src="https://i.imgur.com/P4VA319.png" alt="Tree icon">
                    </span>
                    <span class="sub-title">High Quality</span>
                    <p class="p--fore-line">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca</p>
                </div>
            </div>
        </section>

        <section class="section-map">
            <h2 id="sectionMapTitle" >Where to find us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5263249085147!2d121.50363155123125!3d25.016206445078485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9bf67f5098b%3A0x995e2d85e973d20d!2z57ag5a-255-z5a-154mp5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1579692561490!5m2!1szh-TW!2stw" frameborder="0"></iframe>
        </section>

        <section class="section-aboutus">
            <div class="section-aboutus__contents">
                <span id="sectionAboutusImg" class="section-aboutus__contents-img">
                    <img src="https://i.imgur.com/taFwYNQ.png" alt="Logo">
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
        beforeMount() {
            window.scrollTo(0,0);
        },
        mounted() {
            ScrollReveal().reveal('#sectionWorkTitle', AnimConfig.CONTENT_UPWARD);
            ScrollReveal().reveal('#sectionWorkBlock_first', AnimConfig.CONTENT_LEFTWARD);
            ScrollReveal().reveal('#sectionWorkBlock_second', AnimConfig.CONTENT_LEFTWARD_DELAY_100);
            ScrollReveal().reveal('#sectionWorkBlock_third', AnimConfig.CONTENT_LEFTWARD_DELAY_200);

            ScrollReveal().reveal('#sectionAboutusImg', AnimConfig.CONTENT_UPWARD);
            ScrollReveal().reveal('#sectionAboutusParagraph', AnimConfig.CONTENT_UPWARD);
            ScrollReveal().reveal('#sectionAboutusSubtitle', AnimConfig.CONTENT_UPWARD);

            ScrollReveal().reveal('#sectionMapTitle', AnimConfig.CONTENT_UPWARD);
        }
    }
</script>

<style scoped lang="scss">
    .section-header {
        @include flex-row-center;
        margin-top: $u-margin-bottom-section-md;
        align-items: flex-end;

        &__img {
            width: 50%;
            height: 73vh;
            overflow: hidden;

            img {
                height: 100%;
            }
        }

        &__contents {
            width: 50%;
            padding-left: 8rem;
            
            div {
                width: 47rem;
            }

            h2 {
                line-height: 1.1;
                margin-bottom: 3.5rem;
                animation-delay: .2s;
            }

            p {
                color: $color-grey-light;

                &:not(:last-child) {
                    margin-bottom: 2.6rem;
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
        max-width: $row-max-width;
        margin: 0 auto;
        margin-top: 22.6rem;


        &__content {
            @include flex-row-center;
            justify-content: space-between;
            width: 100%;
            margin-top: 11.4rem;

            .sub-title {
                margin-top: 2.8rem;
                margin-bottom: 2.3rem;
            }

            &-block {
                @include flex-column-center;
                align-items: flex-start;
                flex: 1;

                &:not(:first-child) {
                    margin-left: 3rem;
                }

                p {
                    text-align: initial;
                    color: $color-grey-light;
                }
            }

            &-img {
                height: 7rem;
                img {
                    height: 100%;
                }
            }
        }
    }

    .section-map {
        max-width: $row-max-width;
        margin: 0 auto;
        margin-top: 22.6rem;
        text-align: center;
        
        iframe {
            margin-top: 7.5rem;
            width: 100%;
            height: 45rem;
            border: none;
        }
    }

    .section-aboutus {
        margin-top: 28rem;
        margin-bottom: 25rem;
    

        &__contents {
            @include flex-column-center;

            &-img {
                border-radius: 50%;
                box-shadow: 0 .6rem .6rem rgba($color-black, .1);
            }

            p {
                width: 60rem;
                margin: 4rem 0;

                text-align: center;
                color: $color-grey-light;
                
            }

        }
    }
</style>