import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react';
import styled, { css } from 'styled-components';
import { FlexBox } from '~/commons/components/flex-box';
import { sideBarStoreKey } from '~/commons/components/side-bar/store/key';
import { doSpacing, fromPalette } from '~/commons/styled-components-util';
import './store';

const Wrapper = styled.div`
  position: fixed;
  z-index: 999999;
  background: ${fromPalette('common.white')};
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  width: 250px;
  padding: 1rem;

  .profile-img {
    margin-top: ${doSpacing(3)};
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  ${(props) =>
    !props.isOpen &&
    css`
      visibility: hidden;
    `}

  ${(props) => css`
    ${props.alwaysShowIfMedia} {
      visibility: visible;
      width: 250px;
    }
  `}
`;

const SideBar = () => {
  const { isOpen, isMobileView, alwaysShowIfMedia } = useStoreState(
    (state) => state[sideBarStoreKey]
  );

  const { setValue: setSideBar } = useStoreActions(
    (actions) => actions[sideBarStoreKey]
  );

  return (
    <Wrapper isOpen={isOpen} alwaysShowIfMedia={alwaysShowIfMedia}>
      <FlexBox justify="flex-end">
        {isMobileView && (
          <>
            <IconButton
              disableRipple
              onClick={() => setSideBar({ isOpen: false, isMobileView: false })}
            >
              <CloseIcon />
            </IconButton>
          </>
        )}
      </FlexBox>

      <FlexBox justify="center">
        <img
          className="profile-img"
          // src="https://www.thefamouspeople.com/profiles/images/kevin-de-bruyne-4.jpg"
          src="https://media.giphy.com/media/l41YrJvcrMg4ERcTC/giphy.gif"
          alt="Profile Photo"
        />
      </FlexBox>
      <div>
        <Typography variant="caption">Name</Typography>
        <Typography variant="h6">Kevin DeBruyne</Typography>

        <Typography variant="caption">Club</Typography>
        <Typography variant="h6">Manchester City</Typography>

        <Typography variant="caption">Position</Typography>
        <Typography variant="h6">Attacking Midfielder</Typography>

        <List>
          {sideBarItems.map((item) => (
            <>
              <ListItem key={item.label}>
                <ListItemText primary={item.label}>
                  {/* {item.sublist && !open[item.path] && <ExpandMoreIcon />} */}
                  {/* {item.sublist && open[item.path] && <ExpandLessIcon />} */}
                </ListItemText>
              </ListItem>
            </>
          ))}
        </List>
      </div>
    </Wrapper>
  );
};

export default SideBar;
