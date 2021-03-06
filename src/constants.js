/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { bill, Icon } from '@woocommerce/icons';

export const BLOCK_TITLE = __(
	'Product Price New',
	'woo-gutenberg-products-block'
);
export const BLOCK_ICON = (
	<Icon
		srcElement={ bill }
		className="wc-block-editor-components-block-icon"
	/>
);
export const BLOCK_DESCRIPTION = __(
	'Display the price of a product.',
	'woo-gutenberg-products-block'
);
