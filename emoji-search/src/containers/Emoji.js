import React, { Component } from 'react';
import EmojiList from '../emojiData.json';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import EmojiValue from '../components/EmojiValue/EmojiValue';
import './Emoji.css';

class Emoji extends Component {
    state = {
        emojiData: []
    }
    componentDidMount() {
        this.setState({
            ...this.state,
            emojiData: EmojiList.slice(0, 10)
        })
    }
    render() {
        console.log('this.state.sadasd===', this.state.emojiData)
        return (
            <div className="Emoji-page-wrapper">
                <Header />
                <Search /><br />
                <EmojiValue
                    emojiData={this.state.emojiData}
                />
            </div>
        );
    }
}

export default Emoji;