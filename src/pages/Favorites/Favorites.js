import React from 'react'
import bbc from '../../assets/bbc.png';
import techCrunch from '../../assets/techCrunch.jpg';
import CustomButton from '../../components/CustomButton/CustomButton';

const logos = [bbc, techCrunch, bbc,techCrunch, bbc]
const news = [
 {
    newsName: 'Tech Crunch',
    data: [
          {
              title: 'title',
        description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
    },
    {
          title: 'title',
        description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
    },
    {
          title: 'title',
        description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
    },
    {
          title: 'title',
        description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
    },
    {
          title: 'title',
        description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
    }
    ]
}
]
class Favorites extends React.Component {

    render(){
        return(
             <div className='homeContainer'>
               <div className='allNewsContainer'>
                   {
                       news.map((news,index) => {
                           return(
                            ((index % 2) === 0) ? 
                            ( <div className='singleNewsSiteContainer'>
                                <div className='newsLogo'
                                 style={{backgroundImage: `url(${logos[index]})`}}></div>
                                <div className='newsDetail'>
                                    {
                                        news.data.map((news,index) => {
                                            return (
                                                <ul>
                                                    <li><span style={{ marignRight: '1em'}}>
                                                        {index + 1}.</span>
                                                        {news.description}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                            </div>) : 
                            (
                                <div className='singleNewsSiteContainer'>
                                    <div className='newsDetail'>
                                        {
                                            news.data.map((news,index) => {
                                                return (
                                                    <ul>
                                                        <li><span style={{ marignRight: '1em'}}>
                                                            {index + 1}.</span>
                                                            {news.description}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </div>
                                     <div className='newsLogo'
                                    style={{backgroundImage: `url(${logos[index]})`}}></div>
                            </div>
                            )
                           )
                       })
                   }
               </div>
            </div>
        )
    }
}

export default Favorites
