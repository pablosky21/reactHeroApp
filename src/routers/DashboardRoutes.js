import React from 'react'
import { Redirect, Route,Switch } from 'react-router'
import DcScreen from '../components/dc/DcScreen'
import HeroScreen from '../components/heroes/HeroScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import SearchScreen from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/hero/:heroeId" component={HeroScreen}></Route>
                    <Route exact path="/dc" component={DcScreen}></Route>
                    <Route exact path="/search" component={SearchScreen}></Route>
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes
