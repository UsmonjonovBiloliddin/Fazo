import "./PurchaseRight.scss"
const PurchaseRight = () => {
  return (
    <div className="purchase_right">
        <h3>Ваши данные</h3>
        <div className="stage">
          <p>4 товара на сумму</p>
          <span>5 262 000 cум</span>
        </div>
        <div className="stage line">
          <p>Доставка</p>
          <span>бесплатно</span>
        </div>
        <div className="stage total">
          <p>Всего к оплате</p>
          <span>5 262 000 cум</span>
        </div>
        <button>Оформить покупку</button>
        <div className="privacy">
          <p>Подтверждая заказ, я принимаю условия</p>
          <span>Пользовательского соглашения</span>
        </div>
      </div>
  )
}

export default PurchaseRight