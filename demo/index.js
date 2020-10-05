import React from 'react'
import ReactDOM from 'react-dom'
import {Card} from 'y-ui0';
import {ConsoleView} from 'y-code-view';
import toDate from '../src/toDate';
import dateFormat from '../src/dateFormat';
import 'y-ui0/lib/style.css';
import 'y-code-view/lib/index.css';
import './index.scss';

const App = ()=>{
    return <div>
        <Card title='dateFormat文档'>
            <ConsoleView source={require('../doc/dateFormat文档.md')} direction='vertical' dependencies={{dateFormat}}/>
        </Card>
        <Card title='toDate文档'>
            <ConsoleView source={require('../doc/toDate文档.md')} direction='vertical' dependencies={{toDate}}/>
        </Card>
    </div>
}

ReactDOM.render(<App/>, document.querySelector('#app'));