import React from 'react';
import {
	ListInfo,
	ListItem,
	LoadMore
} from '../style';
import { connect } from 'react-redux';
import { actionCreator } from '../store';

class List extends React.Component {
	render() {
		const { list, getMoreList, page } = this.props;
		return (
			<div>
				{
					list.map((item, index) => {
						return (
							<ListItem key={index}>
								<img alt='' className='pic' src={item.get('imgUrl')} />
								<ListInfo>
									<h3 className='title'>{item.get('title')}</h3>
									<p className='desc'>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						);
					})
				}
				<LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
			</div>
		);
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreator.getMoreList(page))
	}
});

export default connect(mapState, mapDispatch)(List);