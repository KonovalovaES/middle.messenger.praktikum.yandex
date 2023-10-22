import { afterEach, beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { useFakeXMLHttpRequest } from 'sinon';

import HTTPTransport from './HTTPTransport';

// eslint-disable-next-line no-duplicate-imports
import type { SinonFakeXMLHttpRequestStatic, SinonFakeXMLHttpRequest } from 'sinon';

describe('HTTPTransport', () => {
  let testXHR: SinonFakeXMLHttpRequestStatic;
  let requests: SinonFakeXMLHttpRequest[] = [];
  let transport: HTTPTransport;
  const baseUrl = 'https://ya-praktikum.tech/api/v2';
  const testRoute = 'test-route';
  const testUrl = '/test-url';

  beforeEach(() => {
    testXHR = useFakeXMLHttpRequest();
    testXHR.onCreate = (xhr) => requests.push(xhr);
    transport = new HTTPTransport(testRoute);
  });

  afterEach(() => {
    testXHR.restore();
    requests = [];
  });

  describe('get', () => {
    beforeEach(() => {
      transport.get(testUrl, { data: { key: 'value' } });
    });

    it('should make a request with correct method', () => {
      expect(requests[0].method).to.equal('GET');
    });

    it('should make a request with correct URL', () => {
      expect(requests[0].url).to.equal(`${baseUrl}/${testRoute}${testUrl}?key=value`);
    });
  });

  describe('put', () => {
    beforeEach(() => {
      transport.put(testUrl, { data: { key: 'value' } });
    });

    it('should make a request with correct method', () => {
      expect(requests[0].method).to.equal('PUT');
    });

    it('should make a request with correct URL', () => {
      expect(requests[0].url).to.equal(`${baseUrl}/${testRoute}${testUrl}`);
    });
  });

  describe('post', () => {
    beforeEach(() => {
      transport.post(testUrl, { data: { key: 'value' } });
    });

    it('should make a request with correct method', () => {
      expect(requests[0].method).to.equal('POST');
    });

    it('should make a request with correct URL', () => {
      expect(requests[0].url).to.equal(`${baseUrl}/${testRoute}${testUrl}`);
    });
  });

  describe('delete', () => {
    beforeEach(() => {
      transport.delete(testUrl, { data: { key: 'value' } });
    });

    it('should make a request with correct method', () => {
      expect(requests[0].method).to.equal('DELETE');
    });

    it('should make a request with correct URL', () => {
      expect(requests[0].url).to.equal(`${baseUrl}/${testRoute}${testUrl}`);
    });
  });

  it('should handle a successful request', async () => {
    const response = transport.request(testUrl, { method: 'GET' });

    requests[0].respond(200, { 'Content-Type': 'application/json' }, JSON.stringify({ result: 'data' }));

    expect(await response).to.deep.equal({ result: 'data' });
  });

  it('should handle an unsuccessful request', async () => {
    const response = transport.request(testUrl, { method: 'GET' });

    requests[0].respond(404, { 'Content-Type': 'text/plain' }, 'Resource not found');

    try {
      await response;
      expect.fail('Request should have been rejected.');
    } catch (error) {
      expect(error).to.equal('Resource not found');
    }
  });
});
