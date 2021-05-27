import React, { useMemo } from 'react';
import { outputCssVariables, getUnique, props } from '@eightshift/frontend-libs/scripts/editor';
import { HeadingEditor as HeadingEditorComponent } from '../../../components/heading/components/heading-editor';
import manifest from './../manifest.json';
import globalManifest from './../../../manifest.json';

export const HeadingEditor = ({ attributes, setAttributes }) => {
	const unique = useMemo(() => getUnique(), []);

	const {
		blockName: manifestBlockName,
	} = manifest;

	const {
		blockClass,
	} = attributes;

	return (
		<div className={blockClass} data-id={unique}>

			{outputCssVariables(attributes, manifest, unique, globalManifest)}

			<HeadingEditorComponent
				{...props(attributes, manifestBlockName, '', true)}
				setAttributes={setAttributes}
			/>
		</div>
	);
};
