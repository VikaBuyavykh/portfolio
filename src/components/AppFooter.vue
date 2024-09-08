<script setup></script>

<template>
  <footer id="contacts" class="footer">
    <div class="footer--container">
      <h2 class="footer--title">Контакты</h2>
      <address class="footer--contacts">
        <ul class="footer--icons">
          <li>
            <a href="https://t.me/vika_buyavykh" target="_blank"
              ><img src="/src/assets/icons/telegram.svg" alt="Иконка телеграма"
            /></a>
          </li>
          <li>
            <a href="https://github.com/VikaBuyavykh" target="_blank"
              ><img src="/src/assets/icons/github.svg" alt="Иконка гитхаба"
            /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/buyavykh_" target="_blank"
              ><img src="/src/assets/icons/instagram.svg" alt="Иконка инстаграма"
            /></a>
          </li>
        </ul>
        <a class="footer--contacts-item" href="tel:+79826657817">+7(982)665-78-17</a>
        <a class="footer--contacts-item" href="mailto:vikabuyavykh@gmail.com"
          >vikabuyavykh@gmail.com</a
        >
      </address>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.footer {
  @include size(100%, auto);
  background-color: $base;

  &--container {
    @extend %sizing;
    padding-block: 40px;
    @include flex(row, space-between, start, 24px);
    border-block-start: 1px solid $primary;

    @include media_sm {
      @include flex(column, start, center, 24px);
    }
  }

  &--title {
    @include u2($text, left);
  }

  &--contacts {
    margin-block-start: auto;
    align-self: flex-end;
    @include flex(column-reverse, start, end, 12px);

    @include media_sm {
      align-self: center;
      align-items: center;
    }

    &-item {
      @include t2($primary, left);
      font-style: normal;
      text-decoration: none;
      @extend %hoverOpacity;

      @include media_md {
        @include t5($primary, left);
      }
    }
  }

  &--icons {
    @include flex(row, end, end, 24px);
    margin-block-start: 8px;
    list-style-type: none;

    @include media_lg {
      margin-block-start: 4px;
      gap: 16px;
    }

    li {
      a {
        img {
          @include size(48px, 48px);
          @extend %hoverOpacity;

          @include media_lg {
            @include size(32px, 32px);
          }
        }
      }
    }
  }
}
</style>
