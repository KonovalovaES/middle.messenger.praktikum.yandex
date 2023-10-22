import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<body></body>', { url: 'https://example.org/' });

global.window = jsdom.window;
global.document = jsdom.window.document;
global.FormData = jsdom.window.FormData;
global.location = jsdom.window.location;
global.XMLHttpRequest = jsdom.window.XMLHttpRequest;
global.WebSocket = jsdom.window.WebSocket;
global.Node = jsdom.window.Node;
