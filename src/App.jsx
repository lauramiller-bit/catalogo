import Card from "./components/Card"
import Header from "./components/Header"
import "./styles/styles.css"

function App() {

  const produtos = [
    {
      id: 1,
      nome: "Mouse Gamer RGB",
      preco: 149.90,
      imagem: "MOUSE",
      categoria: "Periféricos"
    },
    {
      id: 2,
      nome: "Teclado Mecânico",
      preco: 299.90,
      imagem: "TECLADO",
      categoria: "Periféricos"
    },
    {
      id: 3,
      nome: "Monitor Gamer",
      preco: 1199.90,
      imagem: "MONITOR",
      categoria: "Monitor"
    },
    {
      id: 4,
      nome: "Fone Gamer",
      preco: 199.90,
      imagem: "FONE",
      categoria: "Áudio"
    },
    {
      id: 5,
      nome: "Notebook",
      preco: 5999.98,
      imagem: "Notebook",
      categoria: "Promoção"
    }
  ]
  return (
    <>
      <Header />
      <section className="grid-produtos">
        {
          produtos.map((produto) => {
            return(
              <Card
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                categoria={produto.categoria}
                imagem={produto.imagem}
              ></Card>
            )
          })
        }
      </section>
    </>
  )
}

export default App
