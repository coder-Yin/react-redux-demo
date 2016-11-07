//Mock Server
import Mock from 'mockjs';

class MockServer {
    constructor(mockFunctions) {
        this.mockFunctions = mockFunctions;
    }
    init() {
        //模拟接口请求时间
        Mock.setup({
            timeout: '2000-3000'
        });
    }
    start() {
        this.init();
        for (let func of this.mockFunctions) {
            func();
        }
    }
}
export default MockServer;
