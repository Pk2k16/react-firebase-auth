import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddNewProductData {
  product_insert: Product_Key;
}

export interface AddNewProductVariables {
  name: string;
  sku: string;
  createdAt: TimestampString;
}

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

export interface GetStoreInventoryVariables {
  storeId: UUIDString;
}

export interface InventoryItem_Key {
  storeId: UUIDString;
  productId: UUIDString;
  __typename?: 'InventoryItem_Key';
}

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

export interface Product_Key {
  id: UUIDString;
  __typename?: 'Product_Key';
}

export interface Store_Key {
  id: UUIDString;
  __typename?: 'Store_Key';
}

export interface Transfer_Key {
  id: UUIDString;
  __typename?: 'Transfer_Key';
}

export interface UpdateQuantityData {
  inventoryItem_upsert: InventoryItem_Key;
}

export interface UpdateQuantityVariables {
  storeId: UUIDString;
  productId: UUIDString;
  quantity: number;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface AddNewProductRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddNewProductVariables): MutationRef<AddNewProductData, AddNewProductVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddNewProductVariables): MutationRef<AddNewProductData, AddNewProductVariables>;
  operationName: string;
}
export const addNewProductRef: AddNewProductRef;

export function addNewProduct(vars: AddNewProductVariables): MutationPromise<AddNewProductData, AddNewProductVariables>;
export function addNewProduct(dc: DataConnect, vars: AddNewProductVariables): MutationPromise<AddNewProductData, AddNewProductVariables>;

interface ListProductsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProductsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProductsData, undefined>;
  operationName: string;
}
export const listProductsRef: ListProductsRef;

export function listProducts(): QueryPromise<ListProductsData, undefined>;
export function listProducts(dc: DataConnect): QueryPromise<ListProductsData, undefined>;

interface UpdateQuantityRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateQuantityVariables): MutationRef<UpdateQuantityData, UpdateQuantityVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateQuantityVariables): MutationRef<UpdateQuantityData, UpdateQuantityVariables>;
  operationName: string;
}
export const updateQuantityRef: UpdateQuantityRef;

export function updateQuantity(vars: UpdateQuantityVariables): MutationPromise<UpdateQuantityData, UpdateQuantityVariables>;
export function updateQuantity(dc: DataConnect, vars: UpdateQuantityVariables): MutationPromise<UpdateQuantityData, UpdateQuantityVariables>;

interface GetStoreInventoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStoreInventoryVariables): QueryRef<GetStoreInventoryData, GetStoreInventoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetStoreInventoryVariables): QueryRef<GetStoreInventoryData, GetStoreInventoryVariables>;
  operationName: string;
}
export const getStoreInventoryRef: GetStoreInventoryRef;

export function getStoreInventory(vars: GetStoreInventoryVariables): QueryPromise<GetStoreInventoryData, GetStoreInventoryVariables>;
export function getStoreInventory(dc: DataConnect, vars: GetStoreInventoryVariables): QueryPromise<GetStoreInventoryData, GetStoreInventoryVariables>;

