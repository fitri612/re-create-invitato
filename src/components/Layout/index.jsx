import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';
import { Box, useMediaQuery } from '@chakra-ui/react';

import { DeskopStyle } from './style';

import SideContent from './SideContent';
import { ClassNames, css } from '@emotion/react';

function MainLayout({ children }) {
  const [isDesktopView] = useMediaQuery('(min-width: 1024px)');

  const DeskopStyle = css`
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

  return (
    <Fragment>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@1,6..72,200&family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ClassNames>
        {({ css }) => (
          <Box id="page" className={css(DeskopStyle)}>
            <Box className="desktop-view__left-side">{isDesktopView && <SideContent />}</Box>
            <Box className="desktop-view__right-side" overflow="hidden">
              <Box boxShadow="2xl">{children}</Box>
            </Box>
          </Box>
        )}
      </ClassNames>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
