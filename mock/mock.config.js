/*
 *配置说明: 一个数组元素对应一个mock接口
 *属性url: 指定被拦截的请求的url，可以是精确的字符串，也可以是正则
 *属性method: 指定被拦截的请求的方法，如get、post
 *属性template: 拦截请求后返回数据的mock规则
 *属性function(可选): 拦截请求后的处理函数，该函数有一个形参，是请求提交的数据
 */

import studentList from './mockData/studentList.js';

const mockConfig = [{
    url: /webapi\/students/, //正则或字符串
    method: 'GET',
    template: studentList
}];
export default mockConfig;
