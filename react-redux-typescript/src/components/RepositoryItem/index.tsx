import React from 'react';

import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
  repository: Repository;
}

export default function RepositoryItem({ repository }: OwnProps) {
  return (
    <li>
      <span>
        {repository.id}
        <span> - </span>
        {repository.name}
      </span>
    </li>
  );
}
