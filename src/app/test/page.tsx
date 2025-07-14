"use client";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-red-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">TEST DE ESTILOS TAILWIND</h1>
      <div className="bg-blue-500 p-4 rounded-lg">
        <p className="text-white">Si ves este texto en blanco sobre fondo azul, Tailwind funciona.</p>
      </div>
      <div className="mt-4 bg-green-500 p-4 rounded-lg">
        <p className="text-white font-bold">Este texto debe ser blanco y bold sobre fondo verde.</p>
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
          Botón Morado
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">
          Botón Amarillo
        </button>
      </div>
    </div>
  );
}
