import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ChatIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill={props?.fill || '#555a61'}
    viewBox="0 0 256 256"
    {...props}
  >
    <Path d="M116 128a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm-32 12a12 12 0 1 0-12-12 12 12 0 0 0 12 12Zm88 0a12 12 0 1 0-12-12 12 12 0 0 0 12 12Zm60-76v128a16 16 0 0 1-16 16H83l-32.6 28.16-.09.07A15.89 15.89 0 0 1 40 240a16.13 16.13 0 0 1-6.8-1.52A15.85 15.85 0 0 1 24 224V64a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16ZM40 224ZM216 64H40v160l34.77-30a8 8 0 0 1 5.23-2h136Z" />
  </Svg>
);
export default ChatIcon;
