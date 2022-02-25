import { Fragment } from "react";
import {Route } from "react-router-dom";
import { USER_LOGIN } from "../../util/settings/config";
import { Redirect } from "react-router-dom"

export const CheckoutTemplate = (props) => {
    const {Component,...restProps} = props ;
    if(!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/login"/>
    }
    return <Route {...restProps} render={(propsRoute)=>{
        return <Fragment>
        
            <Component {...propsRoute}/>
           
        </Fragment>
    }}/>
}
