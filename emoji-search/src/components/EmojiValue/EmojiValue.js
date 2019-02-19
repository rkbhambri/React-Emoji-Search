import React from 'react';
import './EmojiValue.css';

const EmojiValue = (props) => {
    const emojiValue = (
        props.emojiData.length > 0 && props.emojiData.map((data, index) => {
            return (
                // <React.Fragment>

                <div className="emoji-value row p-2" key={index}>
                    <h5 className="symbol">{data.symbol}</h5>&nbsp;
                    <h5 className="p-1">{data.title}</h5>
                </div>
                // </React.Fragment>
            )
        })
    )
    return (
        <div className="Emoji-list-wrapper col-md-12">
            <div className="emoji-list col-md-12">
                {emojiValue}
            </div>
        </div>
    );
}

export default EmojiValue;