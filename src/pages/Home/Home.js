import React from 'react';

import './Home.css'

import bbc from '../../assets/bbc.png';
import techCrunch from '../../assets/techCrunch.jpg';
// import CustomButton from '../../components/CustomButton/CustomButton';

const logos = [bbc, bbc, bbc,bbc, bbc]
// const news = [
//     {
//     newsName: 'sky sports',
//     data: [
//           {
//               title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas skjdfhfsdfsssssssssssssssssssssssssssss'
//     },
//     {
//           title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas sdmfnbdsknbfsdfmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'
//     },
//     {
//           title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
//     },
//     {
//           title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
//     },
//     {
//           title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
//     }
//     ]
// },
//  {
//     newsName: 'Gizmodo',
//     data: [
//           {
//               title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
//     },
//     {
//           title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
//     },
//     {
//           title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
//     },
//     {
//           title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
//     },
//     {
//           title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
//     }
//     ]
// },
//  {
//     newsName: 'Tech Crunch',
//     data: [
//           {
//               title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
//     },
//     {
//           title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
//     },
//     {
//           title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
//     },
//     {
//           title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
//     },
//     {
//           title: 'title',
//         description: 'loreem ipsum sdfnjlsdfn,asqdjwf lskdasdasd dasjdlnkasdas'
//     }
//     ]
// }
// ]
let news = [];

class Home extends React.Component {
    list = () => {
        news = [];
        for(const item in this.props.news){
            news.push(this.props.news[item])
        }
        console.log(news)
    }
    render(){
        return(
            <div>
            { (this.props.news === '') ? '': <div className='homeContainer'> 
                {this.list()}
               <div className='allNewsContainer'>
                   {
                       // 5 times loop - 
                      news.map((item,index) => {
                           return(
                            ((index % 2) === 0) ? 
                            ( 
                                 <div className='singleNewsSiteContainer'>
                                     {console.log('inhere', index)}
                                      <div className='newsLogo'
                                        style={{backgroundImage: `url(${logos[index]})`}}></div>
                                        <div className='newsDetail'>
                                            {   
                                                item.map((singleNews,index) => {
                                                    return(
                                                           <ul>
                                                        <li>
                                                            <span style={{ marignRight: '1em'}}>
                                                            {index + 1}.</span>
                                                            <a href={singleNews.title_link}>{singleNews.title}</a>
                                                        </li>
                                                    </ul> 
                                                        )
                                                })
                                            }
                                        </div>
                                     </div>
                            ) 
                            : 
                            (
                                <div className='singlesingleNewsSiteContainer'>
                                     {console.log('outttt', index)}
                                    <div className='newsDetail'>
                                        {
                                            item.map((singleNews,index) => {
                                                return (
                                                    <ul>
                                                        <li><span style={{ marignRight: '1em'}}>
                                                            {index + 1}.</span>
                                                            {singleNews.detail}</li>
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
            }
            </div>
        )
    }
}

export default Home;