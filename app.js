var lib = require('./include/lib');
/*************** S L A S H ****************/




/******DataBase Connection******/

/******Use Config******/
lib.app.use(lib.express.static(lib.path.join(__dirname, 'public')));
lib.app.use(lib.bodyParser.urlencoded({extended: false}));
lib.app.use(lib.bodyParser.json({keepExtensions: true, uploadDir: './upload_files'}));
lib.app.use(lib.cookieParser());
lib.app.use(lib.session({secret: '123456789'}));


/**********Set Config********/
lib.app.set('views', lib.path.join(__dirname, 'views'));
lib.app.set('view engine', 'jade');


/*****Routes*****/
lib.fs.readdirSync(lib.path.join(__dirname,'/Routers')).forEach(function (item) {
    if (item.substr(-3) == '.js') {
        require('./Routers/'+item)(lib.app);
    }else{
        console.log("file is not a js");
    }
});


/***** Page Not Found *****/
lib.app.set('port', lib.port);
lib.app.use(function (req, res , next) {
    console.log("Not Found");
    var err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});


/***** Listen Port *****/
lib.app.listen(lib.port, function () {
    console.log("Listen to port:", lib.port);
});