import React from 'react';

type State = {
  name: string;
};

export class PressedKey extends React.Component<{}, State> {
  state: Readonly<State> = {
    name: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ name: event.key });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        {name === '' ? (
          <p>Nothing was pressed yet</p>
        ) : (
          <p>The last pressed key is [{name}]</p>
        )}
      </div>
    );
  }
}
