import React, { Component } from 'react';

interface Repository {
  id: number;
  name: string;
}

interface Props {
  repositories: Repository[];
}

interface State {
  newRepository?: number;
}

export default class RepositoryList extends Component<Props, State> {
  state = {
    newRepository: 0,
  };

  render() {
    const { repositories } = this.props;
    const { newRepository } = this.state;

    return (
      <ul>
        {repositories.map(r => (
          <li>r.name</li>
        ))}
      </ul>
    );
  }
}
