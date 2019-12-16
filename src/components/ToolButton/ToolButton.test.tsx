import { mount, shallow } from 'enzyme';
import React from 'react';
import { spy } from 'sinon';
import ToolButton from '../ToolButton';

describe('ToolButton component', () => {
  it('renders its contents', () => {
    const toolButton = shallow(<ToolButton />);
    expect(toolButton.find('.ui__toolButton').length).toEqual(1);
  });

  it('snapshot renders default toolButton', () => {
    const toolButton = shallow(<ToolButton />);
    expect(toolButton).toMatchSnapshot();
  });

  it('clicking toolButton triggers onClick prop', () => {
    const onClick = spy();
    mount(<ToolButton onClick={onClick} />).simulate('click');
    expect(onClick.callCount).toBe(1);
  });

  it('clicking disabled toolButton does not trigger onClick prop', () => {
    const onClick = spy();
    mount(<ToolButton onClick={onClick} disabled />).simulate('click');
    expect(onClick.callCount).toBe(0);
  });
});
