import React from 'react';
import '../../styles/css/help/Jigsaw.css';
import ReactTypingEffect from 'react-typing-effect';

class Jigsaw extends React.Component {

    componentDidMount() {
    }

    render() {
        return(
            <div className="Jigsaw-Block">
                <div className="Jigsaw-Avatar"><img className="Jigsaw-Image" alt="Jigsaw" title="Jigsaw" src={require('../../styles/assets/jigsawAvatar.png')} /></div>
                <div className="Jigsaw-Quote">
                    <ReactTypingEffect
                        speed={30}
                        eraseDelay={50000}
                        cursor="|"
                        text={this.props.quote}
                    />
                </div>
            </div>
        )
    }

}

export default Jigsaw;