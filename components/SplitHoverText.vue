<template>
  <h2>
    {{ text }}
    <span>{{ text }}</span>
    <span>{{ text }}</span>
    <span>{{ innerText }}</span>
  </h2>
</template>
<script>
export default {
  name: "SplitHoverText",
  props: {
    text: {
      type: String,
      required: true,
    },
    innerText: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
h2 {
  margin-bottom: 0;
  font-size: 5rem;
  width: fit-content;
  color: transparent;
  text-transform: uppercase;

  @media only screen and (max-width: 1100px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 900px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 700px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.6rem;
  }

  &:hover span:nth-child(1) {
    transform: translateY(-1rem);

    @media only screen and (max-width: 1100px) {
      transform: translateY(-0.7rem);
    }

    @media only screen and (max-width: 900px) {
      transform: translateY(-0.55rem);
    }

    @media only screen and (max-width: 700px) {
      transform: translateY(-0.47rem);
    }

    @media only screen and (max-width: 480px) {
      transform: translateY(-0.4rem);
    }
  }

  &:hover span:nth-child(2) {
    transform: translateY(1rem);

    @media only screen and (max-width: 1100px) {
      transform: translateY(0.7rem);
    }

    @media only screen and (max-width: 900px) {
      transform: translateY(0.55rem);
    }

    @media only screen and (max-width: 700px) {
      transform: translateY(0.47rem);
    }

    @media only screen and (max-width: 480px) {
      transform: translateY(0.4rem);
    }
  }

  &:hover span:nth-child(3) {
    opacity: 1;
    transition: opacity 700ms ease;
  }

  & span:nth-child(1),
  & span:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    color: rgb(209, 213, 219);
    transition: 0.5s;
    overflow: hidden;
  }

  & span:nth-child(1) {
    clip-path: polygon(0 0, 100% 0%, 100% 50%, 0 50%);
  }

  & span:nth-child(2) {
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  }

  & span:nth-child(3) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 350ms ease;
    font-size: 1.4rem;
    color: #fff;
    background: #62c4ff;
    width: 97.5%;
    padding-left: 5px;
    text-align: center;
    letter-spacing: 0.5rem;
    word-spacing: 1rem;
    line-height: 100%;

    @media only screen and (max-width: 1100px) {
      font-size: 1.2rem;
    }

    @media only screen and (max-width: 900px) {
      font-size: 1rem;
      width: 97%;
      letter-spacing: 4px;
    }

    @media only screen and (max-width: 700px) {
      font-size: 0.85rem;
      width: 96%;
      letter-spacing: 3px;
      word-spacing: 0.5rem;
    }

    @media only screen and (max-width: 480px) {
      font-size: 0.65rem;
      letter-spacing: 2px;
      word-spacing: 0.2rem;
    }
  }
}
</style>
