import { css } from "@emotion/react";


export const DeskopStyle = css`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  justify-content: space-between;

  .desktop-view__left-side {
    display: none;
  }

  .desktop-view__right-side {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }

  @media only screen and (min-width: 1028px) {
    .desktop-view__left-side {
      display: block;
      width: calc(100% - 500px);
    }

    .desktop-view__right-side {
      width: 500px;
      margin: unset;
    }
  }
`;
