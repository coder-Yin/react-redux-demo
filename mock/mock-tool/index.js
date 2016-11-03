import MockServer from './mockServer.js';
import getMockFunctions from './mockFunction.js';

const enableMock = config => {
    let mockFunctions = getMockFunctions(config);
    let mockServer = new MockServer(mockFunctions);
    mockServer.start();
}
export default enableMock;
