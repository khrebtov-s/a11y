import * as React from 'react';
import { CSSProperties } from 'react';

export interface IconProps {
	icon?: string;
	title?: string;
	onClick?: React.MouseEventHandler<HTMLSpanElement>;
	onMouseDown?: React.MouseEventHandler<HTMLSpanElement>;
	onMouseUp?: React.MouseEventHandler<HTMLSpanElement>;
	onMouseLeave?: React.MouseEventHandler<HTMLSpanElement>;
	onMouseEnter?: React.MouseEventHandler<HTMLSpanElement>;
    className?: string;
	style?: CSSProperties;
}

export const Icon = React.forwardRef((props: IconProps, ref: React.Ref<HTMLSpanElement>) => {
	const { icon = '', ...rest } = props;

    console.log('icon', icon)
	return (
		<span
			{ ...rest }
			ref={ ref }
			dangerouslySetInnerHTML={ { __html: icon } }
		/>
	);
});
