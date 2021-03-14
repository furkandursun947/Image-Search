## input events, callbacks

onClick = user clicks on something
onChange = User changes the text input
onSubmit = user submits a form


## controlled vs uncontrolled

class SearchBar extends React.Component{
    
    onInputChange(event){
        
    }
    
    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange}/>
                    </div>
                    
                </form>
            </div>
        );
    }
}


export default SearchBar;
bu şekilde yaptığımızda uncontrolled oluyor, bunun yerine state de tutucaz onchange de ki control edip kullanabilelim


## flow bu şekilde (searchbar) - Controlled

user types input -> callback gets invoked -> we call setState with the new value -> component re renders -> input is told what its value is(comes from state)

### this

this in içinde ne olduğunu merak ediyorsan çağrıldıgı yer e bak, mesela car.drive() yapmış car class ın içindeki this, car ı temsil ediyor. Noktanın soluna bak.

## super

extends yapınca constructor içinde super yapman gerek onun dışında yapma

## bind

constructor(){
    this.drive = this.drive.bind(this);
}

classın dışında drive() yaptogın zaman çalısması için. Normalde this.drive() yaparsın ama bind leyince direk this gibi alır ve bu sorun kalkar.
bunun yerine arrow function da yapılabilir, arrow function otomatikman bindler. Yani fonksiyon tanımlarken her zaman arrow fonksiyon kullan hata alma oranın azalır.

this.handleClick = this.handleClick.bind(this)
aşşağıda handleclick fonskyinuında this state kullanabileceksin veya this.setstate kullanabilecen. This undefined olmaktan çıkıyor.


## axios vs fetch

axious ->  3rd party package that installed with npm, handles requests pretty good
fetch -> built in browsers


## note 

{this.state.display && <h1>Displayed!</h1>}
burada if else durumu var. eğer display true ise displayed yazar değilse yazmaz. sıoldaki condition sağdaki return 

## key

listelerde key koyarız, bu şekilde performans daha hızlı olur program daha iyi anlar, array map de falan

## react refs

gives access to single dom element
we create refs in the constructor, assign them to instance variables, then pass to particular JSX element as props