const testDynamo = require('../functions/models/getRecordDynamon');
const urlCreate = `${process.env.authServiceNow}/api/sn_sc/servicecatalog/items/49c9ee39db263b006cbe09a0ba961919/add_to_cart`;

const fakeDataSF = {
	RequestID: 'sdw3',
	RequestedTime: '2012/08/02',
	OpportunitiesId: 'BSDD#12S',
	Status: 'Pendente'
};

test('Test dynamo Db', async () => {
	const param = 'a6dd426e-4595-4eae-aaea-b539f008faae';
	const retorno = await testDynamo.get(param);
	console.log(retorno.Item.ServiceNowNumber.S)
});
