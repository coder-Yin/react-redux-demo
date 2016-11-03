//启用mock数据start
import mockConfig from '../mock/mock.config.js';
import enableMock from '../mock/mock-tool/index.js';
enableMock(mockConfig);
//启用mock数据end

var $ = require('jquery');
window.$ = $;

export const getStudentList = () => {
	let url = '/webapi/students';
  return $.getJSON(url);
};
