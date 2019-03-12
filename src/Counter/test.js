import React from 'react';
import { shallow } from 'enzyme';
import Counter from '.';
import EnzymeToJson from 'enzyme-to-json';

const wrapper = shallow(<Counter />);

describe('測試一組規範 ', () => {
//   it('測試規格1', () => {
//     expect(true).toBeTruthy();
//   });

//   it('測試規格2', () => {
//     expect(1).toBe(1);
//   });

//   it('測試規格3', () => {
//     expect('happy').toBe('happy');
//   });

  it('1. 包含一個樣式名稱為count的節點', () => {
    expect(wrapper.find('.count').exists()).toBeTruthy();
  });

  it('2. 包含一個樣式名稱為btn-inc的節點', () => {
    expect(wrapper.find('.btn-inc').exists()).toBeTruthy();
  });

  it('3. 包含一個樣式名稱為btn-dec的節點', () => {
    expect(wrapper.find('.btn-dec').exists()).toBeTruthy();
  });

  it('4. counter 初始值為零', () => {
    expect(wrapper.state('counter')).toBe(0);
  });

  it('5. 點擊+1按鈕', () => {
    wrapper.find('.btn-inc').simulate('click')
    expect(wrapper.state('counter')).toBe(1);
  });

  it('6. 點擊-1按鈕', () => {
    wrapper.find('.btn-dec').simulate('click')
    expect(wrapper.state('counter')).toBe(0);
  });

  it('7. 輸出snapshot', () => {
    expect(EnzymeToJson(wrapper)).toMatchSnapshot(0);
  });

});
