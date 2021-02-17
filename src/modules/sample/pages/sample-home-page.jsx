import { Typography } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { doSpacing } from '~/commons/styled-components-util';

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  background: black;
  color: rgba(159, 227, 179);

  div {
    display: grid;
    place-items: center;
    gap: ${doSpacing(4)};

    img {
      width: 250px;
      animation-name: logo-rotation;
      animation-duration: 0.6s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    h3 {
      font-family: 'Dancing Script';
      font-weight: 700;
      animation-name: rotating;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  @keyframes logo-rotation {
    100% {
      transform: rotate(360deg);
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
`;

const imgSrc =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K';

const SampleHomePage = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    enqueueSnackbar('Welcome to nxt-react-app', { variant: 'success' });
  }, []);

  return (
    <Wrapper>
      <div>
        <img src={imgSrc} alt="React Logo" />
        <Typography variant="h3">Let&apos;s Keep Coding</Typography>
      </div>
    </Wrapper>
  );
};

export default SampleHomePage;
