import React from 'react'
import bbc from '../../assets/bbc.png';
import techCrunch from '../../assets/techCrunch.jpg';
import firstNews from '../../assets/firstNews.jpg';
import gizmodo from '../../assets/gizmodo.jpg';
import skySport from '../../assets/skySport.jpg';

import CustomButton from '../../components/CustomButton/CustomButton';

const logos = [bbc, firstNews, gizmodo,skySport, techCrunch]
// const news = [
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
class Favorites extends React.Component {
    list = () => {
         news = [];
        console.log('fav news', this.props.favoritesNews)
            for(const item in this.props.favoritesNews){
                news.push(this.props.favoritesNews[item])
            }
            console.log(news)
        }
    render(){
        return(
             <div className='homeContainer'>
                 {/* <CustomButton buttonText='change favorites list'/> */}
                 {this.list()}
               <div className='allNewsContainer'>
                   {
                       news.map((item,index) => {
                           return(
                            ((index % 2) === 0) ? 
                            ( <div className='singleNewsSiteContainer'>
                                <div className='newsLogo'
                                 style={{backgroundImage: `url(${logos[index]})`}}></div>
                                <div className='newsDetail'>
                                    {
                                        item.map((singleNews,index) => {
                                            return (
                                                <ul>
                                                    <li><span style={{ marignRight: '1em'}}>
                                                        {index + 1}.</span>
                                                        {(singleNews.detail == '' || singleNews.detail == null) ? (<a href={singleNews.title_link}>{singleNews.title}</a>) : (<p>{singleNews.detail}</p>)}
                                                        </li>
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
                                            item.map((singleNews,index) => {
                                                return (
                                                    <ul>
                                                        <li><span style={{ marignRight: '1em'}}>
                                                            {index + 1}.</span>
                                                            {(singleNews.detail == '' || singleNews.detail == null) ? (<a href={singleNews.title_link}>{singleNews.title}</a>) : (<p>{singleNews.detail}</p>)}
                                                           </li>
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
