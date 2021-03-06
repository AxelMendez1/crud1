import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path, { dirname } from 'path';

//routes
import indexRoutes from './routes/index';
import taskRoutes from './routes/tasks';


class Application {
    app: express.Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewars();
        this.routes();
    }
    settings(){
        this.app.set('port', 3000);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs', exphbs({
            layoutsDir: path.join(this.app.get('views'), 'layaouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs'
            }));
            this.app.set('view engine', '.hbs');

    }
    middlewars(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(){
        this.app.use (indexRoutes);
        this.app.use('/tasks', taskRoutes);
        


        this.app.use(express.static(path.join(__dirname, 'public')));
        
        }
        
        start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'));

        });
    }
    
}

export default Application;

