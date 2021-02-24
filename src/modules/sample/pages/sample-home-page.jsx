import { Typography } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { doSpacing } from '~/commons/styled-components-util';
import laundaProgrammingImg from '../assets/launda-programming.jpg';

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  color: rgba(159, 227, 179);

  div {
    display: grid;
    place-items: center;
    width: min(100%, 600px);
    gap: ${doSpacing(4)};

    img {
      width: 100%;
      animation-name: logo-rotation;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    h3 {
      font-family: 'Dancing Script', sans-serif;
      font-weight: 700;
      animation-name: rotating;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  @keyframes rotating {
    0% {
      opacity: 0.25;
    }

    100% {
      opacity: 1;
    }
  }

  .title-box {
    background: rgba(150, 245, 113, 0.4);
    color: black;
  }
`;

const SampleHomePage = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    enqueueSnackbar('Welcome to nxt-react-app', { variant: 'success' });
  }, []);

  return (
    <Wrapper>
      <div>
        {/* <img src={imgSrc} alt="React Logo" /> */}
        <img src={laundaProgrammingImg} alt="Launda Programming" />
        <div className="title-box">
          <Typography variant="h4" noWrap>
            Let&apos;s Keep Coding
          </Typography>
        </div>
      </div>
    </Wrapper>
  );
};

export default SampleHomePage;
