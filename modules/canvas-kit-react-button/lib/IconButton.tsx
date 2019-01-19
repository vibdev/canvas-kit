import * as React from 'react';
import {ButtonBaseCon} from './ButtonBase';
import styled from 'react-emotion';
import {ButtonTypes} from './types';
import {ButtonProps} from './Button';
import {iconButtonStyles} from './ButtonStyles';

const IconButtonCon = styled(ButtonBaseCon)(iconButtonStyles.styles);

export default class IconButton extends React.Component<ButtonProps> {
  public render() {
    return (
      // TODO (breaking change): need to remove buttonType and buttonSize prop here, doesn't make sense to expose
      <IconButtonCon {...this.props} buttonType={ButtonTypes.Secondary} buttonSize={undefined} />
    );
  }
}
