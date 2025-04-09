import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Bem-vindo à Cornerstone Engenharia</h2>
      <p className="text-lg">Engenharia civil com excelência e alto padrão para sua obra.</p>
    </section>
  );
}

function About() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Sobre a Empresa</h2>
      <p className="text-lg">Somos especializados em soluções de engenharia civil para clientes exigentes e projetos de médio e alto padrão.</p>
    </section>
  );
}

function Services() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Serviços</h2>
      <ul className="list-disc list-inside text-lg">
        <li>Projetos de engenharia civil</li>
        <li>Gerenciamento de obras</li>
        <li>Consultoria técnica</li>
        <li>Execução de obras residenciais e comerciais</li>
      </ul>
    </section>
  );
}

function Blog() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Blog</h2>
      <p className="text-lg">Conteúdo relevante sobre construção, obras e engenharia.</p>
    </section>
  );
}

function Contact() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Contato</h2>
      <form className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Nome" className="p-2 rounded" />
        <input type="email" placeholder="Email" className="p-2 rounded" />
        <input type="tel" placeholder="Telefone" className="p-2 rounded" />
        <textarea placeholder="Mensagem" className="p-2 rounded"></textarea>
        <button type="submit" className="bg-[#936332] text-white py-2 px-4 rounded hover:opacity-90">Enviar</button>
      </form>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-[#1B2E58] text-white min-h-screen font-sans">
        <nav className="bg-[#936332] p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">CORNERSTONE ENGENHARIA</h1>
          <ul className="flex gap-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}