import React, { useState } from 'react';
import { Button } from './components/button';

function Home() {
  const [accountName, setAccountName] = useState('');
  const [accounts, setAccounts] = useState(['asdf']);

  const onClick = () => {
    setAccounts((prevState) => [...prevState, accountName]);
    setAccountName('');
  };

  return (
    <div>
      <header>
        <div className="flex justify-between py-4 px-5 bg-amber-200">
          <h1 className="font-bold">Atilho</h1>
          <nav>
            <ul className="flex gap-5">
              <li>Contas</li>
              <li>Tags</li>
              <li>Transações</li>
              <li>Metas</li>
              <li>Perfil</li>
              <li>Notificações</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border">
            <div className="flex justify-between">
              <h2 className="font-bold text-3xl">Contas</h2>
              <Button>Adicionar uma conta</Button>
            </div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Nome</th>
                  <th className="text-right">Valor Atual</th>
                  <th className="text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Itaú Casa</td>
                  <td className="text-right">
                    <span className="text-stone-300">R$</span> 123,00
                  </td>
                  <td>
                    <Button>Ajustar valor</Button>
                  </td>
                </tr>
                <tr>
                  <td>Itaú Pessoal</td>
                  <td className="text-right">
                    <span className="text-stone-300">R$</span> 435,00
                  </td>
                  <td>
                    <Button>Ajustar valor</Button>
                  </td>
                </tr>
                <tr>
                  <td>Bradesco</td>
                  <td className="text-right">
                    <span className="text-stone-300">R$</span> 324.523,00
                  </td>
                  <td>
                    <Button>Ajustar valor</Button>
                  </td>
                </tr>
                <tr>
                  <td>C6 Bank Internacional</td>
                  <td className="text-right">
                    <span className="text-stone-300">US$</span> 2.345,00
                  </td>
                  <td>
                    <Button>Ajustar valor</Button>
                  </td>
                </tr>
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
    </div>
  );
}

export default Home;
