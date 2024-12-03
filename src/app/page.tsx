"use client";
import Link from "next/link";
 
export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Projeto de Autenticação</h1>
                <p className="mb-4">
                    Este é um exemplo de rotas protegidas com autenticação em Next.js.
                </p>
                <Link
                    href="/login"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Ir para Login
                </Link>
            </div>
        </div>
    );
}
 