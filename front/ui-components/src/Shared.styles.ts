// Copyright 2018-2019 @paritytech/nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from 'styled-components';
import SUIContainer from 'semantic-ui-react/dist/commonjs/elements/Container';
import SUIDropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import SUIInput from 'semantic-ui-react/dist/commonjs/elements/Input';

import { FONT_SIZES, MARGIN_SIZES } from './constants';
import { theme } from './globalStyle';
import { DynamicSizeTextProps, HeaderProps, FlexItemProps, StackProps, StyledNavButtonProps, StyledNavLinkProps, SubHeaderProps, WithSpaceAroundProps, WithSpaceBetweenProps, WrapperDivProps } from './StyleProps';

// FIXME: customize as needed
export const Dropdown = styled<any>(SUIDropdown)`
  color: ${theme.black};
`;

export const Input = styled<any>(SUIInput)`
  width: ${(props): string => props.width || '100%'}
`;

export const Container = styled(SUIContainer)`
  padding: ${MARGIN_SIZES.large};
`;

/**
 * Fixed-width container
 */
export const FixedWidthContainer = styled(Container)`
  @media only screen and (min-width: 320px) and (max-width: 479px){
    width: 300px;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px){
    width: 400px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px){
    width: 700px;
  }

  @media only screen and (min-width: 992px){
    width: 950px;
  }
`;

export const BoldText = styled.b`
  color: ${theme.black};
`;

export const FadedText = styled.p`
  color: ${theme.black};
  opacity: 0.5;
  text-align: center;
`;

export const FlexItem = styled.div<FlexItemProps>`
  flex: ${(props): number => props.flex || 1};
`;

export const ErrorText = styled.p`
  color: red;
  text-align: center;
  font-weight: 500;
`;

export const SuccessText = styled.p`
  color: green;
  text-align: center;
  font-weight: 500;
`;

export const WithSpace = styled.div`
  margin: ${MARGIN_SIZES.medium} auto;
`;

export const WithSpaceAround = styled.div<WithSpaceAroundProps>`
  margin: ${(props): string => MARGIN_SIZES[props.margin || 'medium']};
  padding: ${(props): string => MARGIN_SIZES[props.padding || 'medium']};
`;

export const WithSpaceBetween = styled.div<WithSpaceBetweenProps>`
  display: flex ${(props): string => props.flexDirection || 'row'};
  justify-content: space-between;
  align-items: space-between;
`;

export const WithPadding = styled.div`
  padding: ${MARGIN_SIZES.medium} auto;
`;

export const Header = styled.h2<HeaderProps>`
  color: ${(props): string => props.color ? theme[props.color] : theme.grey};
  font-weight: 300;
  font-size: ${FONT_SIZES.big};
  margin: ${(props): string => props.margin ? MARGIN_SIZES[props.margin] : `${MARGIN_SIZES.big} 0`};
  padding: ${MARGIN_SIZES.small} ${MARGIN_SIZES.medium};
  text-align: ${(props): string => props.textAlign || 'center'};
`;

export const DynamicSizeText = styled.p<DynamicSizeTextProps>`
  font-size: ${(props): string => FONT_SIZES[props.fontSize || 'medium']};
  font-weight: ${(props): string => props.fontWeight || 'light'};
  margin: ${(props): string => props.margin || '0 auto'};
  padding: ${(props): string => props.padding || '0 auto'};
  text-align: ${(props): string => props.textAlign || 'center'};
`;

export const RefreshButton = styled.button`
  border: none;
  background-color: inherit;
  color: ${theme.hotPink};

  :hover {
    cursor: pointer;
    color: ${theme.maroon};
  }
`;

export const StyledNavLink = styled.span <StyledNavLinkProps>`
  background: none;
  border: none;
  color: ${(props): string => props.inverted ? theme.white : theme.lightBlue1};
  font-size: ${FONT_SIZES.medium};
  font-weight: 300;

  :hover {
    cursor: pointer;
  }
`;

export const StyledLinkButton = styled.button`
  align-items: space-between;
  background: none;
  border: none;
  color: ${(props): string => props.color || theme.lightBlue1};
  display: flex;
  font-size: ${FONT_SIZES.medium};
  font-weight: 300;
  justify-content: space-between;

  :hover {
    cursor: pointer;
  }
`;

export const StyledNavButton = styled.button<StyledNavButtonProps>`
  background-image: linear-gradient(
    107deg,
    ${(props): string => props.disabled ? theme.grey : props.negative ? theme.grey : theme.coral},
    ${(props): string => props.disabled ? theme.grey : props.negative ? theme.grey : theme.hotPink}
  );
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 6px 0 rgba(${theme.black}, 0.3);
  color: ${theme.white};
  fontSize: ${FONT_SIZES.large};
  height: 42px;
  width: 134px;

  :hover {
    cursor: ${(props): string => props.disabled ? 'not-allowed' : 'pointer'};
  }
`;

export const VoteNayButton = styled.button`
background-image: linear-gradient(
    107deg,
    ${theme.lightBlue1},
    ${theme.neonBlue}
  );
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px 0 rgba(${theme.black}, 0.3);
  color: ${theme.white};
  fontSize: ${FONT_SIZES.large};
  height: 21px;
  width: 51px;

  :hover {
    cursor: pointer;
  }
`;

export const VoteYayButton = styled.button`
background-image: linear-gradient(
    107deg,
    ${theme.lightBlue1},
    ${theme.lightBlue2}
  );
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px 0 rgba(${theme.black}, 0.3);
  color: ${theme.white};
  fontSize: ${FONT_SIZES.large};
  height: 21px;
  width: 51px;

  :hover {
    cursor: pointer;
  }
`;

export const Stacked = styled.div<StackProps>`
  align-items: ${(props): string => props.alignItems || 'center'};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: ${(props): string => props.justifyContent || 'center'};
  text-align: ${(props): string => props.textAlign || 'center'};
`;

export const StackedHorizontal = styled.div<StackProps>`
  align-items: ${(props): string => props.alignItems || 'center'};
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-grow: 1;
  flex-wrap: wrap;
  margin: ${(props): string | number => props.margin || 0}
  justify-content: ${(props): string => props.justifyContent || 'center'};
  text-align: ${(props): string => props.textAlign || 'center'};

`;

export const SubHeader = styled.h3<SubHeaderProps>`
  color: ${theme.black};
  font-weight: 200;
  font-size: ${FONT_SIZES.medium};
  margin: ${(props): string => props.noMargin ? '0 0' : '1rem auto 0.3rem auto'};
  padding: ${(props): string => props.padding || '0 0'};
  text-align: ${(props): string => props.textAlign || 'left'};
`;

export const InlineSubHeader = styled(SubHeader)`
  display: inline;
`;

export const WrapperDiv = styled.div<WrapperDivProps>`
  margin: ${(props): string => props.margin || '1rem'};
  padding: ${(props): string => props.padding || '1rem'};
  width: ${(props): string => props.width || '30rem'};
  height: ${(props): string => props.height || '100%'};
`;
