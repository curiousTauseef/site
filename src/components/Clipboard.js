import React from 'react';
import { Tooltip } from 'react-tippy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { compose, withHandlers, withState, defaultProps } from 'recompose';

const Clipboard = ({ copied, tooltip, onCopy, children, ...props }) => (
  <Tooltip open={copied} title={tooltip} position="top" arrow>
    <CopyToClipboard onCopy={onCopy} {...props}>
      {children}
    </CopyToClipboard>
  </Tooltip>
);

const onCopy = (props) => () => {
  props.setCopied(true);

  setTimeout(() => {
    props.setCopied(false);
  }, 2000);
};

Clipboard.defaultProps = {
  copied: false,
  tooltip: '',
};

export default compose(
  defaultProps({ tooltip: 'Copied to clipboard!' }),
  withState('copied', 'setCopied', false),
  withHandlers({ onCopy }),
)(Clipboard);
