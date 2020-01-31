<template>
    <div class="section-page-not-found">
        <div class="section-page-not-found__title">404</div>
        <div class="section-page-not-found__content">We're sorry, the page you requested could not be found. Please go back to the homepage or contact us at support@start.me.</div>
    </div>
</template>

<style lang="scss" scoped>
    .section-page-not-found {
        padding: 15rem 0 45vh 0;
        text-align: center;

        &__title {
            font-family: $font-family-1;
            font-size: 15rem;
            line-height: 1;
            margin-bottom: 2rem;
            color: $color-black;
        }


        &__content {
            padding: 0 40rem;
            line-height: 1.4;
            font-family: $font-family-2;
            font-size: 1.8rem;
            color: $color-grey-dark;
        }
    }
</style>