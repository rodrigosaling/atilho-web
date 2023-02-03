import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Button from '../components/button';
import { NavLink } from 'react-router-dom';
import Template from '../components/template';

function Home() {
  // const queryClient = useQueryClient();

  const getAccounts = async () => {
    const res = await fetch('http://localhost:3456/accounts');
    return res.json();
  };

  const { data, isLoading } = useQuery(['get-accounts'], getAccounts);

  if (isLoading) return 'is loading';

  return (
    <Template>
      <main className="p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border">
            <div className="flex justify-between">
              <h2 className="font-bold text-3xl">Contas</h2>
              <Button>Adicionar uma conta</Button>
            </div>
          </div>

          <div className="border">
            <div className="flex justify-between">
              <h2 className="font-bold text-3xl">Tags</h2>
              <Button>Adicionar uma tag</Button>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>Itaú Casa</td>
                  <td>R$ 123,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border col-span-2">
            <div className="flex justify-between">
              <h2 className="font-bold text-3xl">Transações</h2>
              <div className="">
                <Button>Adicionar uma receita</Button>
                <Button>Adicionar uma despesa</Button>
                <Button>Adicionar uma transferência</Button>
              </div>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>Itaú Casa</td>
                  <td>R$ 123,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border">
            <div className="flex justify-between">
              <h2 className="font-bold text-3xl">Metas</h2>
              <button className="bg-purple-500 text-purple-50 px-3 rounded">
                Adicionar uma meta
              </button>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>Itaú Casa</td>
                  <td>R$ 123,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border">
            <div className="flex justify-between">
              <h2 className="font-bold text-3xl">Saldo Histórico</h2>
              <div className="">
                <Button>30 dias</Button>
                <Button>60 dias</Button>
                <Button>90 dias</Button>
              </div>
            </div>
            <div className="text-5xl">📊</div>
            <p>TODO: add https://airbnb.io/visx/docs</p>
          </div>
        </div>
      </main>
    </Template>
  );
}

export default Home;
