const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'my-app',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const addNewProductRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewProduct', inputVars);
}
addNewProductRef.operationName = 'AddNewProduct';
exports.addNewProductRef = addNewProductRef;

exports.addNewProduct = function addNewProduct(dcOrVars, vars) {
  return executeMutation(addNewProductRef(dcOrVars, vars));
};

const listProductsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProducts');
}
listProductsRef.operationName = 'ListProducts';
exports.listProductsRef = listProductsRef;

exports.listProducts = function listProducts(dc) {
  return executeQuery(listProductsRef(dc));
};

const updateQuantityRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateQuantity', inputVars);
}
updateQuantityRef.operationName = 'UpdateQuantity';
exports.updateQuantityRef = updateQuantityRef;

exports.updateQuantity = function updateQuantity(dcOrVars, vars) {
  return executeMutation(updateQuantityRef(dcOrVars, vars));
};

const getStoreInventoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetStoreInventory', inputVars);
}
getStoreInventoryRef.operationName = 'GetStoreInventory';
exports.getStoreInventoryRef = getStoreInventoryRef;

exports.getStoreInventory = function getStoreInventory(dcOrVars, vars) {
  return executeQuery(getStoreInventoryRef(dcOrVars, vars));
};
