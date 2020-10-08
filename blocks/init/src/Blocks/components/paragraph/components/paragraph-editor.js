import React from 'react'; // eslint-disable-line no-unused-vars
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

export const ParagraphEditor = (props) => {
	const {
		paragraph: {
			content,
			align,
			color,
			size,
		},
		componentClass = 'paragraph',
		blockClass,
		onChangeParagraphContent,
	} = props;

	const paragraphClass = classnames(
		componentClass,
		align && `${componentClass}__align--${align}`,
		color && `${componentClass}__color--${color}`,
		size && `${componentClass}__size--${size}`,
		blockClass && `${blockClass}__${componentClass}`,
	);

	return (
		<RichText
			className={paragraphClass}
			placeholder={__('Add your text', 'eightshift-boilerplate')}
			onChange={onChangeParagraphContent}
			value={content}
		/>
	);
};
