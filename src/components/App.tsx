import React from 'react';
import { User } from '../model/model';
import { AuthService } from '../services/AuthService';
import { Login } from './Login';
import { Router, Route , Switch } from 'react-router-dom';
import history from '../utils/history';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Profile } from './Profile';
import { Hotels } from './hotels/hotels'
import { DataService } from '../services/DataService';
import { CreateHotel } from "../components/hotels/CreateHotel";
interface AppState{
  user: User | undefined
}

export class App extends React.Component <{}, AppState>{

  private authService: AuthService = new AuthService();
  private dataService: DataService = new DataService();

  constructor(props: any) {
    super(props)
    this.state = {
      user : undefined
    }

    this.setUser = this.setUser.bind(this)
  }

  //user function
    private async setUser(user: User){
    this.setState({
      user: user
    })
    await this.authService.getAWSTemporaryCreds(user.cognitoUser);
  }

  render() {
    return (
      <div className='wrapper'>
        <Router history={history}>
          <div>
            <Navbar user={this.state.user}/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login'>
                <Login authService={this.authService} setUser={this.setUser}/>
              </Route>
              <Route exact path='/profile'>
                <Profile authService={this.authService} user={this.state.user} />
              </Route>
              <Route exact path='/hotels'>
              <Hotels dataService={this.dataService}/>
                </Route>
                <Route exact path='/createHotel'>
                <CreateHotel dataService={this.dataService}/>
              </Route>
            </Switch>
          </div>

        </Router>        
    </div>
  )
  }
}

