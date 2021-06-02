import React from 'react'
import Styles from '../styles/AppTheme.module.css'

class AppThemeToggle extends React.Component{
    constructor(props){
        super(props)

        this.state = {theme : 'Light'};
    }
    
    toggle() {
        const theme = this.state.theme === 'Light' ? 'Dark' : 'Light'

        this.setState({theme : theme})

    }
    
    render(){ //Se crea el componente
        let styleToApply
        this.state.theme === 'Light' ? styleToApply = Styles.appThemeToggle : styleToApply = Styles.appThemeDark
        return(
            <div 
                className={styleToApply}
                onClick={this.toggle.bind(this)}
            >
                {this.state.theme}
            </div>
        )
    }

    componentDidMount(){
        document.body.setAttribute('theme', this.state.theme)
        //Setea la propiedad theme=ligth(p.e) al body (HTML)
    }

    componentDidUpdate(){
        document.body.setAttribute('theme', this.state.theme)
    }



    // //HOOKS del LIFECYCLE
    // componentWillMount(){ //Se ejecuta antes de que se monte en el DOM
    //     const now = new Date()
    //     console.log('antes de que se esté en el DOM!', now.getTime())
    // }
    // componentDidMount(){ //SE ejecuta justo después de que se monta en el DOM7
    //     const now = new Date()
    //     console.log('ya estoy en el DOM!', now.getTime())
    // }
    // componentWillUpdate(){ //Se ejecuta cada de que hay una actualización
    //     const now = new Date()
    //     console.log('antes de que me actualice!', now.getTime())
    // }
    // componentDidUpdate(){ //Se ejecuta justo después de actualizarse
    //     const now = new Date()
    //     console.log('después de actualizar,e!', now.getTime())
    // }
    // componentWillUnmount(){ //Se ejecuta antes de que el componente desaparezca
    //     const now = new Date()
    //     console.log('antes de que me quite del DOM!', now.getTime())
    // }
}

export default AppThemeToggle