<template>
    <section class="section-thank-you">
        <h2>Thanks for your order!</h2>
        <span>
            Orders are processed within 24-48 hours (excluding weekends and holidays). Once your order ships, we will email you a shipping notification with your tracking number. Your order will arrive in 3-7 business days after it’s processed.
        </span>
        <!-- <span>Orders are processed within 24-48 hours (excluding weekends and holidays).</span>
        <span>Once your order ships, we will email you a shipping notification with your tracking number.</span>
        <span>Your order will arrive in 3-7 business days after it’s processed.</span> -->
    </section>
</template>

<style lang="scss" scoped>
    .section-thank-you {
        margin: 0 auto;
        max-width: $row-max-width;

        height: 90vh;
        padding: 25rem 0 20rem 0;

        @include flex-column-center;
        justify-content: flex-start;

        & h2 {
            margin-bottom:  1.6rem;
        }

        & span {
            text-align: center;
            display: inline-block;
            width: 70rem;
            font-size: 1.6rem;
            font-family: $font-family-1;
            color: $color-grey-light;
            line-height: 1.6;
        }

    }
</style>