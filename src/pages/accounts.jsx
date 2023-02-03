import React from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import Template from '../components/template';
import Button from '../components/button';

const getAccounts = async () => {
  const res = await fetch('http://localhost:3456/accounts');
  return res.json();
};

const postAccount = async (data) => {
  const response = await fetch('http://localhost:3456/accounts', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

const putAccount = async (data) => {
  const response = await fetch(`http://localhost:3456/accounts/${data.id}`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

const getAccountTypes = async () => {
  const res = await fetch('http://localhost:3456/account-types');
  return res.json();
};

export default function Accounts() {
  // const queryClient = useQueryClient();
  const {
    data: accounts,
    isLoading: isLoadingAccounts,
    error: errorAccounts,
  } = useQuery(['get-accounts'], getAccounts);

  const { data: accountTypes, isLoading: isLoadingAccountTypes } = useQuery(
    ['get-account-types'],
    getAccountTypes
  );

  const saveAccountMutation = useMutation((account) => {
    if (!account.id) {
      return postAccount(account);
    }
    return putAccount(account);
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    // watch, // to watch for a field value change
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(11111, data);
    saveAccountMutation.mutate(data);
    reset();
  };

  const editAccount = (account) => {
    setValue('id', account.id);
    setValue('name', account.name);
    setValue('amount', account.currentAmount);
    setValue('accountTypeId', account.accountTypeId);
  };

  if (isLoadingAccounts || isLoadingAccountTypes) return 'is loading';

  if (errorAccounts) return 'oh nooooo';

  const isEmpty = accounts.length > 0;

  const getAccountTypeName = (accountTypeId) =>
    accountTypes.find((account) => account.id === accountTypeId).name;

  return (
    <Template>
      <main>
        <h1>Contas</h1>

        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Nome</th>
              <th className="text-right">Valor Inicial</th>
              <th className="text-right">Valor Atual</th>
              <th className="text-left">Tipo de Conta</th>
              <th className="text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            {accounts?.map((account) => (
              <tr key={account.id}>
                <td>{account.name}</td>
                <td className="text-right">{account.initialAmount}</td>
                <td className="text-right">{account.currentAmount}</td>
                <td>{getAccountTypeName(account.accountTypeId)}</td>
                <td>
                  <Button onClick={() => editAccount(account)}>Editar</Button>
                  <Button>Ajustar valor</Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t border-t-stone-300">
            <tr>
              <td>Total</td>
              <td className="text-right">
                <span className="text-stone-300">R$</span> 12.983,90
                <br />
                <span className="text-stone-300">US$</span> 28,930.00
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>

        <h2 className="text-2xl">Adicionar conta</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register('id')} />
          <div>
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="border"
            />
          </div>
          <div>
            <label htmlFor="initialAmount" className="block">
              Valor Inicial
            </label>
            <input
              type="number"
              id="amount"
              {...register('amount', {
                valueAsNumber: true,
              })}
              className="border"
            />
          </div>
          <div>
            <label htmlFor="accountType" className="block">
              Tipo de Conta
            </label>
            <select {...register('accountTypeId')}>
              {accountTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="border">
            Salvar
          </button>
          <button type="reset" className="border" onClick={() => reset()}>
            Reset
          </button>
        </form>
      </main>
    </Template>
  );
}
