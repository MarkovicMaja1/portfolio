import React from 'react'
import './Technologies.css'
import { width } from '@mui/system'

const Technologies = () => {
  return (
    
    <div id="technologies">
        <div >
           <h1 className='technologies-title'> Technologies</h1>
        </div>
        <div className='technologies-body'>
            <div className='services-item'>
            <img src={require('../../Assets/node.png')} alt="Node.js" className='services-icon-node'  />
            <h2 className='services-name'> Node.js</h2>
            </div>
            <div className='services-item'>
            <img src={require('../../Assets/javascript.png')} alt="Node.js" className='services-icon' />
            <h2 className='services-name'>JavaScript</h2>
         
            </div>
            <div className='services-item'>
            <img src={require('../../Assets/react.png')} alt="Node.js" className='services-icon-react' />
            <h2 className='services-name'>React</h2>
        
            </div>
            <div className='services-item'>
            <img src={require('../../Assets/html.png')} alt="Node.js" className='services-icon' />
            <h2 className='services-name'> HTML</h2>
            </div>
            <div className='services-item'>
            <img src={require('../../Assets/css.png')} alt="Node.js" className='services-icon' />
            <h2 className='services-name'>CSS</h2>
            </div>
            <div className='services-item'>
            <img src={require('../../Assets/mysql.png')} alt="Node.js" className='services-icon' />
            <h2 className='services-name'> MySql</h2>
            </div>
            <div className='services-item'>
            <img src={require('../../Assets/git.png')} alt="Node.js" className='services-icon' />
            <h2 className='services-name'> Git</h2>
            </div>
            <div className='services-item'>
            <img src={require('../../Assets/wordpres.png')} alt="Node.js" className='services-icon' />
            <h2 className='services-name'> WordPress</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Technologies
