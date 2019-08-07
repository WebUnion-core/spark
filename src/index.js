import dva from 'dva';
import './assets/scss/reset.scss';
import './assets/scss/mixin.scss';

const routes = require('./routes.json');

// 1. Initialize
const app = dva();

// 2. Plugins
app.use({});

// 3. Model
routes.forEach(item => {
    if (item.model) {
        app.model(require('./models/' + item.model).default);
    }
});

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#app');
