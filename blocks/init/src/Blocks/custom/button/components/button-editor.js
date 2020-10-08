import React from 'react'; // eslint-disable-line no-unused-vars
import { ButtonEditor as ButtonEditorComponent } from '../../../components/button/components/button-editor';

export const ButtonEditor = ({ attributes, actions }) => {
	return (
		<ButtonEditorComponent
			{...attributes}
			{...actions}
		/>
	);
};
