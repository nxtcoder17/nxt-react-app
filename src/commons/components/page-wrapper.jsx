import React from 'react';

import styled, { css } from 'styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { AppBarComp } from '~/commons/components/app-bar';
import SideBar from '~/commons/components/side-bar';
import { doSpacing } from '~/commons/styled-components-util';

const PageContentStyles = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  ${(props) => css`
    ${props.showOnMedia} {
      margin-left: 250px;
    }
  `}
`;

const Content = styled.div`
  display: grid;
  padding: ${doSpacing(2)};
`;

export const PageContent = ({ children }) => {
  const { alwaysShowIfMedia } = useStoreState(
    (state) => state[sideBarStoreKey]
  );
  const { setValue: setSideBar } = useStoreActions(
    (actions) => actions[sideBarStoreKey]
  );

  return (
    <PageContentStyles showOnMedia={alwaysShowIfMedia}>
      <AppBarComp
        menuHandler={() => {
          setSideBar({ isOpen: true, isMobileView: true });
        }}
      />
      <Content>{children}</Content>
    </PageContentStyles>
  );
};

export const PageWrapper = ({ children }) => {
  return (
    <>
      <SideBar />
      <PageContent>{children}</PageContent>
    </>
  );
};
