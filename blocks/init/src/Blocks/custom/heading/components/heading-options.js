import React from 'react';
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { props } from '@eightshift/frontend-libs/scripts';
import { HeadingOptions as HeadingOptionsComponent } from '../../../components/heading/components/heading-options';

export const HeadingOptions = ({ attributes, setAttributes }) => {
	return (
		<PanelBody title={__('Heading', 'eightshift-frontend-libs')}>
			<HeadingOptionsComponent
				{...props('heading', attributes, {
					setAttributes: setAttributes,
				})}
			/>
		</PanelBody>
	);
};
