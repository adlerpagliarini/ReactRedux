import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import RepositoryItem from '../RepositoryItem';

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
  loadSuccess(data: Repository[]): void;
}

interface OwnProps {
  parentComponentName: string;
}

type Props = StateProps & DispatchProps & OwnProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { repositories } = this.props;
    return (
      <ul>
        {repositories.map(r => (
          <RepositoryItem key={r.id} repository={r} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadRequest: () => dispatch(RepositoriesActions.loadRequest()),
  loadSuccess: (data: Repository[]) => dispatch(RepositoriesActions.loadSuccess(data)),
});
/* Outra maneira mais simples
import { bindActionCreators } from 'redux';
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepositoryList);
