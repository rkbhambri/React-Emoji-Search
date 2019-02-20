import React, { Component } from 'react';
import EmojiList from '../emojiData.json';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import EmojiValue from '../components/EmojiValue/EmojiValue';
import Pagination from '../components/Pagination/Pagination';
import './Emoji.css';

class Emoji extends Component {

	state = {
		emojiData: [],
		inputSearchValue: '',
		updatedEmojiData: [],
		pageNumberArray: [],
		limit: 10,
		skip: 0
	};

	componentDidMount() {
		const emoji = EmojiList.slice(0, 50);
		const emojiLength = emoji.length / 10;
		let pageNumberArray = JSON.parse(JSON.stringify(this.state.pageNumberArray));

		for (let i = 1; i <= emojiLength; i++) {
			pageNumberArray.push(i)
		}

		this.setState({
			...this.state,
			pageNumberArray,
			emojiData: emoji
		});
	};

	inputChangeHandler = (event) => {
		let updatedEmojiData = this.state.emojiData.filter((item) => {
			return item.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
		});
		this.setState({
			...this.state,
			inputSearchValue: event.target.value,
			updatedEmojiData
		});
	};

	paginateData = (number) => {
		this.setState({
			...this.state,
			skip: ((number * 10) - 10),
			limit: number * 10
		})
	}

	render() {
		return (
			<div className="Emoji-page-wrapper">
				<Header />
				<Search inputChangeHandler={(event) => this.inputChangeHandler(event)} /><br />
				<EmojiValue
					emojiData={this.state.inputSearchValue === '' ? this.state.emojiData.slice(this.state.skip, this.state.limit) : this.state.updatedEmojiData}
				/>
				<Pagination
					pageNumber={this.state.pageNumberArray}
					paginateData={(number) => { this.paginateData(number) }}
				/>
			</div>
		);
	};
};

export default Emoji;