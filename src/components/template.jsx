import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Template({ children }) {
  return (
    <div>
      <header>
        <div className="flex justify-between py-4 px-5 bg-amber-200">
          <h1 className="font-bold">Atilho</h1>
          <nav>
            <ul className="flex gap-5">
              <li>
                <NavLink to="/accounts">Contas</NavLink>
              </li>
              <li>Tags</li>
              <li>Transações</li>
              <li>Metas</li>
              <li>Perfil</li>
              <li>Notificações</li>
              <li>Lixeira</li>
            </ul>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
