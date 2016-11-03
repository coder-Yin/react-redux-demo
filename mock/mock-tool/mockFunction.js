import Mock from 'mockjs';

let getMockFunctions = config => {
    let mockFunctions = [];

    for (let configItem of config) {
        let {url, method, template, mockFunc} = configItem;
        mockFunctions.push(() => {
            let param3 = template || mockFunc;
            method = method.toLowerCase();
            if (!param3) {
                return;
            }
            Mock.mock(url, method, param3);
        });
    }

    return mockFunctions;
};
export default getMockFunctions;
