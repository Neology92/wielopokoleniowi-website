import React from 'react';

import { Title, Description, RuleItem, RulesList } from './styled';
import rules from '../../../rules';

const Rules = () => {
  return (
    <RulesList>
      {rules.map(rule => (
        <RuleItem key={rule.name}>
          <Title>{rule.name}</Title>
          <Description>{rule.description}</Description>
        </RuleItem>
      ))}
    </RulesList>
  );
};

export default Rules;
