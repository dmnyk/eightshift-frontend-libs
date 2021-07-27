import React from 'react';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl} from '@wordpress/components';
import { checkAttr, getAttrKey } from '@eightshift/frontend-libs/scripts';
import manifest from './../manifest.json';

export const TabOptions = ({ attributes, setAttributes }) => {
	const tabTitle = checkAttr('tabTitle', attributes, manifest);

	return (
		<PanelBody title={__('Tab Settings', 'eightshift-frontend-libs')}>
			<>
				<TextControl
					label={__('Tab Title', 'eightshift-frontend-libs')}
					value={tabTitle}
					onChange={(value) => setAttributes({ [getAttrKey('tabTitle', attributes, manifest)]: value })}
				/>
			</>
		</PanelBody>
	);
};
