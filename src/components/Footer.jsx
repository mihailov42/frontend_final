import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
          <div className='col mb-3'>
            <a className=''>
              <img src='./img/logo.png' className='bi me-2' width={180} />
            </a>
            <p>
              LADA - движение вперед
            </p>
          </div>
            <div className='col mb-3'></div>
            <div className='col mb-4'>
              <h5>Покупателям</h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>Автомобили в наличии</a>
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>Акции и спецпредложения</a>
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>LADA Finance</a>
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>Тест-драйв</a>
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>Trade-in оценка стоимости</a>
                </li>
              </ul>
            </div>
            <div className='col mb-4'>
              <h5>Владельцам</h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>Записть на сервис</a>
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>Калькулятор ТО</a>
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>Аксессуары</a>
                </li>
              </ul>
            </div>
          
        </footer>
      </div>
    </div>
  )
}

export default Footer