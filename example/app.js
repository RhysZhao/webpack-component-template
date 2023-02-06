/*
 * Author  rhys.zhao
 * Date  2022-01-28 15:36:55
 * LastEditors  rhys.zhao
 * LastEditTime  2023-02-06 17:44:12
 * Description 组件使用例子
 */
import React from 'react';
import { render } from 'react-dom';

import DragZoomContainer from '../src';

const App = () => (
  <div style={{ width: '80vw', height: '80vh', border: '1px solid red' }}>
    <DragZoomContainer dragInDocument={false}>
      <div style={{ width: 200, height: 200, backgroundColor: 'red' }}>111</div>
    </DragZoomContainer>
  </div>
);
render(<App />, document.getElementById('root'));
