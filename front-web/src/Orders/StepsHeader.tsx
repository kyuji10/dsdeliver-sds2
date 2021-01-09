function StepsHeader() {
    return (
      <header className="orders-steps-container">
          <div className="orders-steps-content">
            <h1 className="steps-title">
                SIGA AS ESTAPAS
            </h1>
            <ul>
                <li>
                    <span className="steps-number">1</span>
                    Selecione os produtos e localização.
                </li>
                <li>
                    <span className="steps-number">2</span>
                    Depois Clique em <strong>"ENVIAR PEDIDO"</strong>
                </li>
            </ul>
          </div>
      </header>

    )
}

export default StepsHeader;