// src/app/dashboard/page.tsx

// 'use client' é uma diretiva que indica que este componente será executado no lado do cliente.
"use client"

// Importa o hook 'useAuth' do contexto de autenticação. Este hook fornece funções relacionadas à autenticação.
import { useAuth } from "@/contexts/AuthContext"

// Importa o hook 'useRouter' do Next.js, que permite manipular o roteamento no lado do cliente.
import { useRouter } from "next/navigation"

// Componente funcional 'Logout', responsável por lidar com a funcionalidade de logout.
export default function Logout() {
    // Desestrutura o 'logout' do contexto de autenticação, que será usado para realizar o logout.
    const { logout } = useAuth()

    // Inicializa o hook 'useRouter' para obter o roteador e permitir redirecionamentos.
    const router = useRouter()

    // Função que será chamada quando o usuário clicar no botão "Sair".
    const handleLogout = () => {
        // Chama a função 'logout' do contexto, que realiza o logout do usuário (provavelmente removendo o token de autenticação).
        logout()

        // Redireciona o usuário para a página inicial ('/').
        router.push("/")
    }

    // A renderização do componente.
    return (
      <div>
        {/* Botão "Sair", que quando clicado chama a função 'handleLogout'. */}
        <button onClick={handleLogout}
            // Aplicando classes de estilo para tornar o botão atrativo, com largura, cor de fundo, texto branco, borda arredondada, etc.
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-60 mt-10">
            Sair
          </button>
      </div>
    );
}
