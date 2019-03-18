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
		skip: 0,
		showPagination: true,
		pageNumber: 1
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
		let showPagination = false;
		if (event.target.value === '' && updatedEmojiData.length > 0) {
			updatedEmojiData = [];
			showPagination = true
		}
		if (event.target.value !== '' && updatedEmojiData.length === 0) {
			showPagination = false;
		}
		this.setState({
			...this.state,
			inputSearchValue: event.target.value,
			updatedEmojiData,
			showPagination
		});
	};

	paginateData = (number) => {
		this.setState({
			...this.state,
			skip: ((number * 10) - 10),
			limit: number * 10,
			pageNumber: number
		})
	}

	paginatePreviousData = () => {
		let number = this.state.pageNumber;
		if (this.state.pageNumber > 1) {
			number = this.state.pageNumber - 1;
		}
		this.setState({
			...this.state,
			skip: ((number * 10) - 10),
			limit: number * 10,
			pageNumber: number
		})
	}

	paginateNextData = () => {
		let number = this.state.pageNumber;
		if (this.state.pageNumber < 5) {
			number = this.state.pageNumber + 1;
		}
		this.setState({
			...this.state,
			skip: ((number * 10) - 10),
			limit: number * 10,
			pageNumber: number
		})
	}

	render() {
		return (
			<div className="Emoji-page-wrapper">
				<Header />
				<Search inputChangeHandler={(event) => this.inputChangeHandler(event)} />
				<EmojiValue
					emojiData={this.state.inputSearchValue === '' ? this.state.emojiData.slice(this.state.skip, this.state.limit) : this.state.updatedEmojiData}
				/>
				{
					this.state.showPagination &&
					<Pagination
						pageNumber={this.state.pageNumberArray}
						paginateData={(number) => { this.paginateData(number) }}
						limit={this.state.limit}
						paginatePreviousData={() => this.paginatePreviousData()}
						paginateNextData={() => this.paginateNextData()}
					/>
				}
				{
					this.state.inputSearchValue !== '' && this.state.updatedEmojiData.length === 0 && <h4>Emoji Not Found !!</h4>
				}
			</div>
		);
	};
};

export default Emoji;