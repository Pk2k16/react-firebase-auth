# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListProducts*](#listproducts)
  - [*GetStoreInventory*](#getstoreinventory)
- [**Mutations**](#mutations)
  - [*AddNewProduct*](#addnewproduct)
  - [*UpdateQuantity*](#updatequantity)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListProducts
You can execute the `ListProducts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listProducts(): QueryPromise<ListProductsData, undefined>;

interface ListProductsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProductsData, undefined>;
}
export const listProductsRef: ListProductsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProducts(dc: DataConnect): QueryPromise<ListProductsData, undefined>;

interface ListProductsRef {
  ...
  (dc: DataConnect): QueryRef<ListProductsData, undefined>;
}
export const listProductsRef: ListProductsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProductsRef:
```typescript
const name = listProductsRef.operationName;
console.log(name);
```

### Variables
The `ListProducts` query has no variables.
### Return Type
Recall that executing the `ListProducts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProductsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListProductsData {
  products: ({
    id: UUIDString;
    name: string;
    sku: string;
    description?: string | null;
    imageUrl?: string | null;
    price?: number | null;
  } & Product_Key)[];
}
```
### Using `ListProducts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProducts } from '@dataconnect/generated';


// Call the `listProducts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProducts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProducts(dataConnect);

console.log(data.products);

// Or, you can use the `Promise` API.
listProducts().then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `ListProducts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProductsRef } from '@dataconnect/generated';


// Call the `listProductsRef()` function to get a reference to the query.
const ref = listProductsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProductsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetStoreInventory
You can execute the `GetStoreInventory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getStoreInventory(vars: GetStoreInventoryVariables): QueryPromise<GetStoreInventoryData, GetStoreInventoryVariables>;

interface GetStoreInventoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStoreInventoryVariables): QueryRef<GetStoreInventoryData, GetStoreInventoryVariables>;
}
export const getStoreInventoryRef: GetStoreInventoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getStoreInventory(dc: DataConnect, vars: GetStoreInventoryVariables): QueryPromise<GetStoreInventoryData, GetStoreInventoryVariables>;

interface GetStoreInventoryRef {
  ...
  (dc: DataConnect, vars: GetStoreInventoryVariables): QueryRef<GetStoreInventoryData, GetStoreInventoryVariables>;
}
export const getStoreInventoryRef: GetStoreInventoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getStoreInventoryRef:
```typescript
const name = getStoreInventoryRef.operationName;
console.log(name);
```

### Variables
The `GetStoreInventory` query requires an argument of type `GetStoreInventoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetStoreInventoryVariables {
  storeId: UUIDString;
}
```
### Return Type
Recall that executing the `GetStoreInventory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetStoreInventoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetStoreInventoryData {
  store?: {
    id: UUIDString;
    name: string;
    address: string;
    products_via_InventoryItem: ({
      id: UUIDString;
      name: string;
      sku: string;
      description?: string | null;
      imageUrl?: string | null;
      price?: number | null;
    } & Product_Key)[];
  } & Store_Key;
}
```
### Using `GetStoreInventory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getStoreInventory, GetStoreInventoryVariables } from '@dataconnect/generated';

// The `GetStoreInventory` query requires an argument of type `GetStoreInventoryVariables`:
const getStoreInventoryVars: GetStoreInventoryVariables = {
  storeId: ..., 
};

// Call the `getStoreInventory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getStoreInventory(getStoreInventoryVars);
// Variables can be defined inline as well.
const { data } = await getStoreInventory({ storeId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getStoreInventory(dataConnect, getStoreInventoryVars);

console.log(data.store);

// Or, you can use the `Promise` API.
getStoreInventory(getStoreInventoryVars).then((response) => {
  const data = response.data;
  console.log(data.store);
});
```

### Using `GetStoreInventory`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getStoreInventoryRef, GetStoreInventoryVariables } from '@dataconnect/generated';

// The `GetStoreInventory` query requires an argument of type `GetStoreInventoryVariables`:
const getStoreInventoryVars: GetStoreInventoryVariables = {
  storeId: ..., 
};

// Call the `getStoreInventoryRef()` function to get a reference to the query.
const ref = getStoreInventoryRef(getStoreInventoryVars);
// Variables can be defined inline as well.
const ref = getStoreInventoryRef({ storeId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getStoreInventoryRef(dataConnect, getStoreInventoryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.store);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.store);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## AddNewProduct
You can execute the `AddNewProduct` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addNewProduct(vars: AddNewProductVariables): MutationPromise<AddNewProductData, AddNewProductVariables>;

interface AddNewProductRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddNewProductVariables): MutationRef<AddNewProductData, AddNewProductVariables>;
}
export const addNewProductRef: AddNewProductRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addNewProduct(dc: DataConnect, vars: AddNewProductVariables): MutationPromise<AddNewProductData, AddNewProductVariables>;

interface AddNewProductRef {
  ...
  (dc: DataConnect, vars: AddNewProductVariables): MutationRef<AddNewProductData, AddNewProductVariables>;
}
export const addNewProductRef: AddNewProductRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addNewProductRef:
```typescript
const name = addNewProductRef.operationName;
console.log(name);
```

### Variables
The `AddNewProduct` mutation requires an argument of type `AddNewProductVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddNewProductVariables {
  name: string;
  sku: string;
  createdAt: TimestampString;
}
```
### Return Type
Recall that executing the `AddNewProduct` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddNewProductData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddNewProductData {
  product_insert: Product_Key;
}
```
### Using `AddNewProduct`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addNewProduct, AddNewProductVariables } from '@dataconnect/generated';

// The `AddNewProduct` mutation requires an argument of type `AddNewProductVariables`:
const addNewProductVars: AddNewProductVariables = {
  name: ..., 
  sku: ..., 
  createdAt: ..., 
};

// Call the `addNewProduct()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addNewProduct(addNewProductVars);
// Variables can be defined inline as well.
const { data } = await addNewProduct({ name: ..., sku: ..., createdAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addNewProduct(dataConnect, addNewProductVars);

console.log(data.product_insert);

// Or, you can use the `Promise` API.
addNewProduct(addNewProductVars).then((response) => {
  const data = response.data;
  console.log(data.product_insert);
});
```

### Using `AddNewProduct`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addNewProductRef, AddNewProductVariables } from '@dataconnect/generated';

// The `AddNewProduct` mutation requires an argument of type `AddNewProductVariables`:
const addNewProductVars: AddNewProductVariables = {
  name: ..., 
  sku: ..., 
  createdAt: ..., 
};

// Call the `addNewProductRef()` function to get a reference to the mutation.
const ref = addNewProductRef(addNewProductVars);
// Variables can be defined inline as well.
const ref = addNewProductRef({ name: ..., sku: ..., createdAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addNewProductRef(dataConnect, addNewProductVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_insert);
});
```

## UpdateQuantity
You can execute the `UpdateQuantity` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateQuantity(vars: UpdateQuantityVariables): MutationPromise<UpdateQuantityData, UpdateQuantityVariables>;

interface UpdateQuantityRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateQuantityVariables): MutationRef<UpdateQuantityData, UpdateQuantityVariables>;
}
export const updateQuantityRef: UpdateQuantityRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateQuantity(dc: DataConnect, vars: UpdateQuantityVariables): MutationPromise<UpdateQuantityData, UpdateQuantityVariables>;

interface UpdateQuantityRef {
  ...
  (dc: DataConnect, vars: UpdateQuantityVariables): MutationRef<UpdateQuantityData, UpdateQuantityVariables>;
}
export const updateQuantityRef: UpdateQuantityRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateQuantityRef:
```typescript
const name = updateQuantityRef.operationName;
console.log(name);
```

### Variables
The `UpdateQuantity` mutation requires an argument of type `UpdateQuantityVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateQuantityVariables {
  storeId: UUIDString;
  productId: UUIDString;
  quantity: number;
}
```
### Return Type
Recall that executing the `UpdateQuantity` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateQuantityData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateQuantityData {
  inventoryItem_upsert: InventoryItem_Key;
}
```
### Using `UpdateQuantity`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateQuantity, UpdateQuantityVariables } from '@dataconnect/generated';

// The `UpdateQuantity` mutation requires an argument of type `UpdateQuantityVariables`:
const updateQuantityVars: UpdateQuantityVariables = {
  storeId: ..., 
  productId: ..., 
  quantity: ..., 
};

// Call the `updateQuantity()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateQuantity(updateQuantityVars);
// Variables can be defined inline as well.
const { data } = await updateQuantity({ storeId: ..., productId: ..., quantity: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateQuantity(dataConnect, updateQuantityVars);

console.log(data.inventoryItem_upsert);

// Or, you can use the `Promise` API.
updateQuantity(updateQuantityVars).then((response) => {
  const data = response.data;
  console.log(data.inventoryItem_upsert);
});
```

### Using `UpdateQuantity`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateQuantityRef, UpdateQuantityVariables } from '@dataconnect/generated';

// The `UpdateQuantity` mutation requires an argument of type `UpdateQuantityVariables`:
const updateQuantityVars: UpdateQuantityVariables = {
  storeId: ..., 
  productId: ..., 
  quantity: ..., 
};

// Call the `updateQuantityRef()` function to get a reference to the mutation.
const ref = updateQuantityRef(updateQuantityVars);
// Variables can be defined inline as well.
const ref = updateQuantityRef({ storeId: ..., productId: ..., quantity: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateQuantityRef(dataConnect, updateQuantityVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.inventoryItem_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.inventoryItem_upsert);
});
```

