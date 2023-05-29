import React from 'react'
import { Link } from'react-router-dom';

const Item = (props) => {
  return (
    <div className='conteiner py-3'>
    <main>
        <div className='row row-cols-1 justify-content-evenly 
        row-cols-md-3 row-cols-sm-2 text-center'>
            <div className='col px-3 py-3'>
                <div className='card md-6 rounded'>
                    <div className='card-header py-2 px-3'>                        
                        <Link to={'/form'}>
                            <button type='button' className='w-100 btn btn-lg btn-primary'>Записаться на Тест-драйв</button>
                        </Link>                        
                        <p>{props.title}</p>
                        <img className='rounded' src={props.img} width={'85%'}></img>
                        <p>{props.description}</p>
                        <p>{props.price}</p>
                        <button type='button' className='w-100 btn btn-lg btn-primary'>                        
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
  )
}

export default Item