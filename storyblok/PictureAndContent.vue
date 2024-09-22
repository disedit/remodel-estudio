<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok"
    :class="[
      'picture-and-content',
      `text-${blok.text_size}`,
      {
        'full-height': blok.full_height,
        'inverted': blok.invert,
        'first-item': blok.first_item
      }
    ]"
    :style="{
      '--cols': blok.columns,
      '--align': blok.content_align
    }"
  >
    <div class="container padded">
      <div class="picture">
        <UtilsMedia :media="blok.picture" class="picture-asset" />
      </div>
      <UtilsRichText :content="blok.content" class="content" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.picture-and-content {
  .container {
    display: grid;
    grid-template-columns: var(--cols);
    grid-template-areas: "picture content";
    gap: var(--site-padding-x);
    align-content: var(--align);
    padding-block: var(--site-padding-x); 
  }

  .picture {
    grid-area: picture;

    &-asset {
      display: block;
      width: 100%;
    }
  }

  .content {
    grid-area: content;
    align-self: var(--align);
  }

  &.full-height {
    .container {
      min-height: calc(100vh - var(--navbar-safe-area));
    }
  }

  &.inverted {
    .container {
      grid-template-areas: "content picture";
    }
  }

  &.first-item {
    .container {
      padding-block-start: 0;
    }
  }
}

@include media('<md') {
  .picture-and-content {
    .container {
      grid-template-columns: 1fr;
      grid-template-areas: "picture" "content";
    }

    &.inverted {
      .container {
        grid-template-areas: "picture" "content";
      }
    }
  }
}
</style>

<style lang="scss">
.picture-and-content {
  .content {
    font-weight: 300;
    color: var(--black);

    h2, h3 {
      color: var(--primary);
      font-weight: 700;
      line-height: 1.25;
    }

    h2 {
      font-size: 1.5em;
    }

    h3 {
      font-size: 1.25em;
    }

    p {
      margin-block: 1rem;
      line-height: 1.25;
    }

    strong,
    b {
      font-weight: 700;
    }

    li p {
      margin: 0;
    }

    ul {
      margin-top: -.5rem;
      margin-bottom: 2rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      color: var(--black);
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: .2em;

      &:hover {
        text-decoration-thickness: 2px;
      }
    }
  }
}
</style>