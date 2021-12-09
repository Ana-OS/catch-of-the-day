import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './store_picker';
import App from './app'
import NotFound from './not_found'


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;