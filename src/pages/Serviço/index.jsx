// pagina-usuarios\src\pages\Serviço\index.jsx
import './style.css';

function Servico() {
    return (
        <section className='servico'>
            <h1>Serviços de Contabilidade</h1>
            <p>Na Contabilidade Dendezeiros, oferecemos uma ampla gama de serviços de contabilidade para atender às necessidades específicas de pequenas e médias empresas. Nossa equipe de profissionais experientes está pronta para ajudar sua empresa a prosperar com soluções financeiras personalizadas.</p>
            <div className='grid-cols-3'>
                <div className='card'>
                    <h2>Abertura de empresa</h2>
                    <p>Auxiliamos na abertura de empresas, desde a escolha do tipo societário até o registro nos órgãos competentes, garantindo que sua empresa esteja em conformidade com as regulamentações legais.</p>
                </div>
                <div className='card'>
                    <h2>Folha de Pagamento</h2>
                    <p>Gerenciamos a folha de pagamento de sua empresa, incluindo cálculos de salários, impostos e benefícios, garantindo que seus funcionários sejam pagos corretamente e dentro dos prazos legais.</p>
                </div>
            </div>
        </section>
    );
}
export default Servico;

