<template>
    <main>
        <section class="section-contact">
            <span class="section-contact__cover">
                <img src="../assets/images/contactpage/cover.png" alt="Team photo">
            </span>
            <div class="section-contact__form">
                <div class="sub-title">A: 1125 Josie Knolls Apt. 978 New York</div>
                <div class="sub-title">T: 01 234 5678</div>
                <div class="sub-title">E: contact@m989.com</div>
                <form action="#">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name">

                    <label for="email">Email</label>
                    <input type="email" name="email" id="email">

                    <label for="subject">Subject</label>
                    <input type="text" name="subject" id="subject">

                    <label for="content">Your content</label>
                    <textarea name="content" id="content"></textarea>

                    <input type="submit" value="send messenger">
                </form>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    .section-contact {
        @include flex-row-center;
        margin-top: $u-margin-bottom-section-lg;
        margin-bottom: 8rem;

        &__cover {
            width: 45%;
            margin-left: -4rem;
            margin-top: -8rem;

            img {
                vertical-align: middle;
                width: 100%;
            }
        }

        &__form {
            margin-left: 3rem;

            .sub-title {
                margin-bottom: .5rem;
            }

            form {
                margin-top: 5rem;
                label {
                    display: block;
                    font-family: $font-family-1;
                    font-size: 1.4rem;

                    &:not(:first-child) {
                        margin-top: 2rem;
                    }
                }

                input[type=submit] {
                    @include size(22rem, 3.5rem);
                    float: right;
                    margin-top: 2.5rem;
                    line-height: 1;
                    text-transform: uppercase;
                    font-family: $font-family-1;
                    font-weight: 600;
                    font-size: 1rem;
                    border: none;
                    color: $color-black;
                    background-color: $color-primary;
                    letter-spacing: 2px;
                    transform: translateY(0);
                    transition: .15s;
                    
                    &:hover {
                        transform: translateY(-.3rem);
                        font-size: 1.25rem;
                        letter-spacing: .25rem;
                        box-shadow: 0 1rem 1rem rgba($color-black, .15);
                    }
                }

                input:not([type=submit]) {
                    @include size(45rem, 3rem);
                    display: block;
                    border: none;
                    border-bottom: 1px solid $color-grey-dark;
                }

                textarea {
                    @include size(45rem, 15rem);
                    display: block;
                    border: 1px solid $color-grey-dark;
                    margin-top: 1rem;
                    resize: none;

                }
            }
        }
    }
</style>