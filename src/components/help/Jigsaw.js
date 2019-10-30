import React from 'react';
import '../../styles/css/help/Jigsaw.css';

class Jigsaw extends React.Component {

    componentDidMount() {
    }

    render() {
        return(
            <div className="Jigsaw-Block">
                <div className="Jigsaw-Avatar"><img className="Jigsaw-Image" alt="Jigsaw" title="Jigsaw" src={require('../../styles/assets/jigsawAvatar.png')} /></div>
                <div id='JigsawQuote' className="Jigsaw-Quote">{this.props.quote}</div>
            </div>
        )
    }

}

export default Jigsaw;