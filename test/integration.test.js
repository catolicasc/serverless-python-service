const testHelperGet = require('../functions/models/getRecordServiceNow');
const testGetRecord = require('../functions/getRecords');
const paramsFakeSqs = 'RITMO0137329'

test('Test Service Now - Get Id', () => {
	expect.assertions(1);
	return testHelperGet
		.getStatus('RITMO0137329')
		.then(data => expect(data).toEqual('Pending'));
});

test('End to End Test', () => {
	const para = {
		"pathParameters" : {"id": "a6dd426e-4595-4eae-aaea-b539f008faae22"}
	}
	return testGetRecord.handler(para)
	
		// .then(data => expect(data).toEqual('Pending'));
});
