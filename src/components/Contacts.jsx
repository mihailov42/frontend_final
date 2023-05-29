import React from 'react'

const Contacts = () => {
  return (
    <div>
      <div className='container'>
        <div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center'>
          <div className='col px-3 py-3'>
            <h5>+7 (3842) 65 55 55</h5>
            <div className='flex-column'>                
              <div className='p-0 text-muted'>ООО Автоцентр ДЮК И К</div>
              <div className='p-0 text-muted'>ул. Баумана, д.55</div>             
            </div>
          </div>
          <div className='col px-3 py-3'>
            <h5>8 800 700 52 32</h5>
            <div className='flex-column'>                
              <div className='p-0 text-muted'>Клиентская служба LADA</div>
              <div className='p-0 text-muted'>звонок по россии бесплатный</div>             
            </div>
          </div>            
        </div>
      </div>
    </div>
  )
}

export default Contacts