import { render, screen } from "@testing-library/react";
import App from "./App";
import ControladorTemperatura from "./componentes/ControladorTemperatura";
test("req01ct01 - verificar se o titulo foi apresentado na integração", () => {
//dado que o componente foi inicializado
render(<App />);
//quando cosulto a ocorrencia do titulo na tela
const textElement = screen.getByText(/controlador de temperatura/i);
//retorna titulo encontrado
expect(textElement).toBeInTheDocument();
});
test("req01ct02- verifica o estado do contador na inicializacao", () => {
//dado que o componente foi inicializado
render(<ControladorTemperatura />);
//quando consulto o valor inicial da temperatura
const valorContador = Number(screen.getByTestId("temperatura").textContent);
//entao a temperatura deve ser zero
expect(valorContador).toBe(0);
});