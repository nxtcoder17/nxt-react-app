import styled from 'styled-components';
import { doSpacing } from '~/commons/styled-components-util';

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex: 1;
  align-items: center;
  gap: ${(props) => doSpacing(props.gap || 0)};
  justify-content: ${(props) => props.justify || 'flex-start'};
`;
