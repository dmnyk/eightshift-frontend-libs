import React from 'react';
import classnames from 'classnames';
import { selector, checkAttr } from '@eightshift/frontend-libs/scripts/helpers';
import manifest from '../manifest.json';

export const LayoutThreeColumnsEditor = (attributes) => {
	const {
		componentClass,
	} = manifest;

	const {
		selectorClass = componentClass,
		blockClass,
		additionalClass,
	} = attributes;

	const layoutThreeColumnsUse = checkAttr('layoutThreeColumnsUse', attributes, manifest);
	const layoutThreeColumnsLeft = checkAttr('layoutThreeColumnsLeft', attributes, manifest);
	const layoutThreeColumnsCenter = checkAttr('layoutThreeColumnsCenter', attributes, manifest);
	const layoutThreeColumnsRight = checkAttr('layoutThreeColumnsRight', attributes, manifest);

	const layoutClass = classnames([
		selector(componentClass, componentClass),
		selector(blockClass, blockClass, selectorClass),
		selector(additionalClass, additionalClass),
	]);

	const wrapClass = classnames([
		selector(componentClass, componentClass, 'wrap'),
		selector(selectorClass, selectorClass, 'wrap'),
	]);

	const columnLeftClass = classnames([
		selector(componentClass, componentClass, 'column'),
		selector(componentClass, componentClass, 'column'),
		selector(selectorClass, selectorClass, 'column', 'left'),
		selector(selectorClass, selectorClass, 'column', 'left'),
	]);

	const columnCenterClass = classnames([
		selector(componentClass, componentClass, 'column'),
		selector(componentClass, componentClass, 'column'),
		selector(selectorClass, selectorClass, 'column', 'center'),
		selector(selectorClass, selectorClass, 'column', 'center'),
	]);

	const columnRightClass = classnames([
		selector(componentClass, componentClass, 'column'),
		selector(componentClass, componentClass, 'column'),
		selector(selectorClass, selectorClass, 'column', 'right'),
		selector(selectorClass, selectorClass, 'column', 'right'),
	]);

	return (
		<>
			{layoutThreeColumnsUse &&
				<div className={layoutClass}>
					<div className={wrapClass}>
						{layoutThreeColumnsLeft &&
							<div className={columnLeftClass}>
								{layoutThreeColumnsLeft}
							</div>
						}

						{layoutThreeColumnsCenter &&
							<div className={columnCenterClass}>
								{layoutThreeColumnsCenter}
							</div>
						}

						{layoutThreeColumnsRight &&
							<div className={columnRightClass}>
								{layoutThreeColumnsRight}
							</div>
						}
					</div>
				</div>
			}
		</>
	);
};
