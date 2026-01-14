import { AddNewProductData, AddNewProductVariables, ListProductsData, UpdateQuantityData, UpdateQuantityVariables, GetStoreInventoryData, GetStoreInventoryVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAddNewProduct(options?: useDataConnectMutationOptions<AddNewProductData, FirebaseError, AddNewProductVariables>): UseDataConnectMutationResult<AddNewProductData, AddNewProductVariables>;
export function useAddNewProduct(dc: DataConnect, options?: useDataConnectMutationOptions<AddNewProductData, FirebaseError, AddNewProductVariables>): UseDataConnectMutationResult<AddNewProductData, AddNewProductVariables>;

export function useListProducts(options?: useDataConnectQueryOptions<ListProductsData>): UseDataConnectQueryResult<ListProductsData, undefined>;
export function useListProducts(dc: DataConnect, options?: useDataConnectQueryOptions<ListProductsData>): UseDataConnectQueryResult<ListProductsData, undefined>;

export function useUpdateQuantity(options?: useDataConnectMutationOptions<UpdateQuantityData, FirebaseError, UpdateQuantityVariables>): UseDataConnectMutationResult<UpdateQuantityData, UpdateQuantityVariables>;
export function useUpdateQuantity(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateQuantityData, FirebaseError, UpdateQuantityVariables>): UseDataConnectMutationResult<UpdateQuantityData, UpdateQuantityVariables>;

export function useGetStoreInventory(vars: GetStoreInventoryVariables, options?: useDataConnectQueryOptions<GetStoreInventoryData>): UseDataConnectQueryResult<GetStoreInventoryData, GetStoreInventoryVariables>;
export function useGetStoreInventory(dc: DataConnect, vars: GetStoreInventoryVariables, options?: useDataConnectQueryOptions<GetStoreInventoryData>): UseDataConnectQueryResult<GetStoreInventoryData, GetStoreInventoryVariables>;
