import React from 'react';
import { shallow, mount, render } from 'enzyme';

import GuessForm from './guessform';

const wrapper = shallow(<GuessForm />);

describe('<GuessForm />', () => {
  it('renders without crashing', () => {
    shallow(<GuessForm />);
  });
});