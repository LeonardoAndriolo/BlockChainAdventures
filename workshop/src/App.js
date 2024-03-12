import React from 'react';
import Input from './components/Input';
import Button from './components/Button';


function App() {
  return (
    <div className="flex min-h-screen w-full h-full items-center justify-center">
      
      <div className="flex flex-col bg-gray-600 w-2/6 justify-center items-center">
        <p>
          Receba sua Proof-Of-Attendance NFT
        </p>

        {/* <p className="">
          Receba sua Proof-Of-Attendance NFT
        </p> */}

        <form className="flex flex-col mt-8">
          <Input description="Seu nome" label="Nome" placeholder="Bill"/>
          <Input description="E-mail" label="E-mail para receber news" placeholder="user@user.com"/>
          <Input description="Wallet" label="Carteira NFT" placeholder="00.00...0000"/>
        </form>
        <Button type="Submit" name="Submit" />
      </div>

    </div>
  );
}

export default App;
