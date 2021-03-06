import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';
import { Link } from '@dojo/routing/Link';

import { ArticleItem } from './../interfaces';
import { Comment } from './Comment';
import { Loading } from './Loading';

import * as css from './styles/comments.m.css';

export interface CommentsProperties {
	id: string;
	item?: ArticleItem;
}

@theme(css)
export class Comments extends ThemeableMixin(WidgetBase)<CommentsProperties> {

	protected render() {
		const { item } = this.properties;

		return item ? [
			v('article', { classes: this.classes(css.article) }, [
				v('h1', [
					v('a', { href: item.url, classes: this.classes(css.title) }, [ item.title ])
				]),
				v('p', [
					`${item.points || 0} points`,
					item.user ? w(Link, { to: 'user', params: { user: item.user }, classes: this.classes(css.user) }, [
						` by ${item.user}`
					]) : null
				])
			]),
			v('div', { classes: this.classes(css.comments) }, [
				v('h2', { classes: this.classes(css.commentCount) }, [ `${item.comments_count} comments` ]),
				v('div', item.comments.map((comment, index) => {
					return w(Comment, { key: index, comment });
				}))
			])
		] : w(Loading, {});
	}

}
