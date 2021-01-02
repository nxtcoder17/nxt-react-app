import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import { FlexBox } from '#commons/components/flex-box';
import { doSpacing } from '#commons/styled-components-util';
import { MediaQuery } from '#commons/media-query';

const links = [
  { link: 'http://github.com/nxtcoder17', label: 'Github', icon: GitHubIcon },
  { link: 'http://gitlab.com/nxtcoder17', label: 'Gitlab' },
  { link: 'http://nxtcoder17.me', label: 'website' },
];

const Actions = styled.div`
  display: none;
  ${MediaQuery.md} {
    display: flex;
    align-items: center;
    gap: ${doSpacing(2)};
    a {
      text-decoration: unset;
    }
  }
`;

export const AppBarComp = styled(({ menuHandler, ...props }) => (
  <AppBar position="sticky" {...props}>
    <Toolbar>
      <FlexBox justify="space-between">
        <FlexBox>
          <IconButton className="menu-icon" onClick={() => menuHandler()}>
            <MenuIcon fontSize="inherit" />
          </IconButton>
          <p className="title">nxtcoder17</p>
        </FlexBox>
        <Actions>
          {links.map(({ link, label, icon: Icon }) => (
            <a href={link} target="_blank" key={nanoid()}>
              <FlexBox gap={1}>
                <span>{Icon != null && <Icon />}</span>
                {label}
              </FlexBox>
            </a>
          ))}
        </Actions>
      </FlexBox>
    </Toolbar>
  </AppBar>
))`
  .title {
    font-family: 'Dancing Script', sans-serif;
    font-size: 3.5rem;
  }
  .menu-icon {
    display: initial;
    font-size: 2.25rem;

    ${MediaQuery.lg} {
      display: none;
    }
  }
`;
