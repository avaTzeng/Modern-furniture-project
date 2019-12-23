<template>
    <main>
        <section class="section-contact">
            <span class="section-contact__cover">
                    <img src="../assets/images/contactpage/cover.jpeg" alt="Team photo">
                </span>
            <div class="section-contact__form">
                <div class="sub-title">A: 1125 Josie Knolls Apt. 978 New York</div>
                <div class="sub-title">T: 01 234 5678     E: contact@m989.com</div>
                <form action="#">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name">

                    <label for="name">Email</label>
                    <input type="email" name="name" id="name">

                    <label for="name">Subject</label>
                    <input type="text" name="name" id="name">

                    <label for="name">Your content</label>
                    <input type="text" name="name" id="name">

                    <input type="submit" value="send messenger">
                </form>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    .section-contact {
        @include flex-row-center;
        justify-content: flex-start;

        margin-top: $u-margin-bottom-section-md;
        margin-bottom: 8rem;

        &__cover {
            width: 75rem;

            img {
                vertical-align: middle;
                width: 100%;
            }
        }

        &__form {
            margin-left: 9rem;
            margin-top: 2rem;

            .sub-title {
                margin-bottom: .5rem;
            }

            form {
                margin-top: 5rem;

                label {
                    display: block;
                    font-family: $font-family-1;
                    font-size: 1.4rem;
                    margin-top: 2rem;
                }

                input[type=submit] {
                    @include size(22rem, 3.5rem);
                    margin-top: 4rem;
                    line-height: 1;
                    text-transform: uppercase;
                    font-family: $font-family-1;
                    font-weight: 600;
                    border: none;
                    color: $color-black;
                    background-color: $color-primary;
                    letter-spacing: 2px;
                    
                }

                input:not([type=submit]) {
                    @include size(38rem, 3rem);
                    display: block;
                    border: none;
                    border-bottom: 1px solid $color-grey-dark;
                }
            }

            

            
        }

        

    }
</style>