import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'my-app',
  location: 'us-east4'
};

export const addNewProductRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewProduct', inputVars);
}
addNewProductRef.operationName = 'AddNewProduct';

export function addNewProduct(dcOrVars, vars) {
  return executeMutation(addNewProductRef(dcOrVars, vars));
}

export const listProductsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProducts');
}
listProductsRef.operationName = 'ListProducts';

export function listProducts(dc) {
  return executeQuery(listProductsRef(dc));
}

export const updateQuantityRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateQuantity', inputVars);
}
updateQuantityRef.operationName = 'UpdateQuantity';

export function updateQuantity(dcOrVars, vars) {
  return executeMutation(updateQuantityRef(dcOrVars, vars));
}

export const getStoreInventoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetStoreInventory', inputVars);
}
getStoreInventoryRef.operationName = 'GetStoreInventory';

export function getStoreInventory(dcOrVars, vars) {
  return executeQuery(getStoreInventoryRef(dcOrVars, vars));
}

