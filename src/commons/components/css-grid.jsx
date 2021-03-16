import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { doSpacing } from '~/commons/styled-components-util';

export const CssGrid = styled(
  ({ gap, rows, cols, autoFlow, align, justify, center, ...props }) => (
    <div {...props} />
  )
)`
  display: grid;
  gap: ${(props) => doSpacing(props.gap || 0)};

  ${(props) =>
    props.rows &&
    css`
      grid-template-rows: ${props.rows};
    `}

  ${(props) =>
    props.cols &&
    css`
      grid-template-columns: ${props.cols};
    `}

  ${(props) =>
    props.autoFlow &&
    css`
      grid-auto-flow: ${props.autoFlow};
    `}

  ${(props) =>
    props.align &&
    css`
      align-items: ${props.align};
    `}

  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}

  ${(props) =>
    props.center &&
    css`
      place-items: center;
    `}
`;
