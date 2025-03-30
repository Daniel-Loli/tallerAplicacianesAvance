// Welcome.js
const Welcome = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white p-6">
        <h1 className="text-5xl font-bold mb-4">Bienvenido a Mamá Asistente</h1>
        <p className="text-lg text-center max-w-2xl">Tu asistente inteligente diseñado para apoyarte en tu viaje como madre primeriza. Encuentra consejos personalizados, recordatorios y seguimiento de tu bebé en un solo lugar.</p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
            Explorar Funcionalidades
          </button>
        </div>
      </div>
    );
  };
  
  export default Welcome;
  