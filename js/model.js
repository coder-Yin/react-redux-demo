var $ = require('jquery');
window.$ = $;

export function getWebapiHost() {
    let webapiHost,
        env = '',
        host = location.host;

    if (/^local/i.test(host)) {
        env = 'localhost:3334'
    } else if (/^dev/i.test(host)) {
        env = 'dev/api';
    }
    webapiHost = 'http://' + env;
    return webapiHost;
}

export const getStudentList = () => {
	let action = 'students';
	let url = `${getWebapiHost()}/${action}`
  return $.getJSON(url);
};
