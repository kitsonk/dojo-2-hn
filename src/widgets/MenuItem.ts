import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';
import { Link } from '@dojo/routing/Link';

import * as css from './styles/menuItem.m.css';

export interface MenuItemProperties {
	selected: boolean;
	category: string;
}

@theme(css)
export class MenuItem extends ThemeableMixin(WidgetBase)<MenuItemProperties> {

	render() {
		const { selected } = this.properties;

		return v('li', { classes: this.classes(css.root) }, [
			w(Link, {
				to: 'content',
				params: { category: this.properties.category, page: '1' },
				classes: this.classes(css.item, selected ? css.selected : null)
			}, this.children)
		]);

	}
}
