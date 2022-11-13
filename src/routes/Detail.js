
import React from 'react';

function Detail(props) {
    console.log(props);
    return <span>hello</span>;
}
/*
class Detail extends React.Component {
    componentDidMount() {
        const { movies, history } = this.props;
        if(movies.state === undefined){
            history.push('/');
        }
    }

    render() {
        const { movies } = this.props;
        return <span>{movies.state.title}</span>;
    }
}
*/
export default Detail;