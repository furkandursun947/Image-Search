import React from 'react'
//import axios from 'axios'  unsplash a aldık gerek kalmadı
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from '../components/ImageList'



class App extends React.Component{
    state = {images:[], datas:[]};
    /*
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos',{// first parameter is the adress that we want to request to. second is a object that will have options that will customize the request
            params: {query: term},
            headers:{
                Authorization: 'Client-ID GI_k14Q01GYqLYub68pLeOZsu9jPSwFWIN7Wdtf2GBM'
            }
        }).then((response) =>{
            console.log(response.data.results[0].color);
        });
        console.log(term);
    }
    */
    onSearchSubmit = async (term) => {     // fonksiyona async eklemek, fonksyionun içinde await kullanımına izin verir. Arrow function yapmazsak this i tanımlamaz hata veirr
        const response = await unsplash.get('/search/photos',{// first parameter is the adress that we want to request to. second is a object that will have options that will customize the request
            params: {query: term},
            /*
            headers:{
                Authorization: 'Client-ID GI_k14Q01GYqLYub68pLeOZsu9jPSwFWIN7Wdtf2GBM'
            }
            */ // unsplash.js klasorune alındı
        });
        
        this.setState({images:response.data.results});
    }


    render(){
        return(
            <div className="ui container" style={{marginTop:'15px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div> 
        ); 
    }
}

export default App;
