'use strict';

const g = React.createElement;

class LikeButto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return g(
      'button',
      { onClick: () => i++},
      'Like'
    );
  }
}

const domContainer = document.querySelector('#total_container');
ReactDOM.render(g(LikeButto), domContainer);