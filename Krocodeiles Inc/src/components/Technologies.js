import React from 'react'
import './TechnologyStyles.css'

const Technologies = () => {
  return (
    <>
    <span className="bar1"></span>
    <h1 className="text1">Technologies We Use</h1>
    <div className="tech">
        <div className="container">
            <div className="img">
                <img src="Adobe.png" height={100} alt='Adobe' />
            </div>
            <div className="img">
                <img src="Ahrefs.png" height={100} alt='Ashrefs' />
            </div>
            <div className="img">
                <img src="AndroidStudio.png" height={100} alt='AndroidStudio'/>
            </div>
            <div className="img">
                <img src="Angular.png" height={50} alt='Angular' />
            </div>
            <div className="img">
                <img src="Csharp.png" height={100} alt='Csharp' />
            </div>
            <div className="img">
                <img src="Express.png" height={100} alt='Express' />
            </div>
            <div className="img">
                <img src="Kotlin.png" height={110} alt='Kotlin' />
            </div>
            <div className="img">
                <img src="Node.png" height={100} alt='Node' />
            </div>
            <div className="img">
                <img src="React.png" height={100} alt='React' />
            </div>
            <div className="img">
                <img src="Semrush.png" height={100} alt='Semrush' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Technologies