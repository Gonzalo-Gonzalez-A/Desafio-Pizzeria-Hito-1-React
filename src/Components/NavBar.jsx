const total = 25000;
const token = false; // Simula si el usuario está logueado
const totalFormateado = total.toLocaleString('es-CL'); // Usa 'es-CL' para formato chileno (punto de miles, coma decimal)

// ...
return (
  <nav>
    <button>Home</button>
    
    {/* Renderizado Condicional */}
    {token ? (
      <>
        <button>Profile</button>
        <button>Logout</button>
      </>
    ) : (
      <>
        <button>Login</button>
        <button>Register</button>
      </>
    )}
    
    <button>Total: ${totalFormateado}</button>
  </nav>
);
// ...